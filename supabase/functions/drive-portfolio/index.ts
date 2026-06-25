// Edge function: proxies Google Drive via the Lovable connector gateway.
// - GET ?action=categories         -> lists subfolders of MASTER_FOLDER_ID
// - GET ?action=images&folderId=X  -> lists images in folder X
//
// Files are returned with a renderable `url` (lh3.googleusercontent.com)
// and a smaller `thumb` URL for grids.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const MASTER_FOLDER_ID = "12xK-hHDXiqY1y1TmOzqbkxb1s1FOupEz";
const GATEWAY = "https://connector-gateway.lovable.dev/google_drive/drive/v3";

const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
const DRIVE_KEY = Deno.env.get("GOOGLE_DRIVE_API_KEY");

async function drive(path: string, params: Record<string, string>) {
  const url = new URL(`${GATEWAY}${path}`);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  const res = await fetch(url.toString(), {
    headers: {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": DRIVE_KEY ?? "",
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Drive ${res.status}: ${body}`);
  }
  return res.json();
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    if (!LOVABLE_API_KEY || !DRIVE_KEY) {
      throw new Error("Missing gateway credentials");
    }

    const url = new URL(req.url);
    const action = url.searchParams.get("action") ?? "categories";

    if (action === "categories") {
      const data = await drive("/files", {
        q: `'${MASTER_FOLDER_ID}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
        fields: "files(id,name)",
        orderBy: "name",
        pageSize: "100",
      });
      const categories = (data.files ?? []).map((f: { id: string; name: string }) => ({
        id: f.id,
        name: f.name,
      }));
      return Response.json({ categories }, { headers: corsHeaders });
    }

    if (action === "images") {
      const folderId = url.searchParams.get("folderId");
      if (!folderId) throw new Error("folderId required");
      const data = await drive("/files", {
        q: `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`,
        fields: "files(id,name,mimeType,thumbnailLink)",
        orderBy: "name",
        pageSize: "1000",
      });
      const images = (data.files ?? []).map(
        (f: { id: string; name: string; thumbnailLink?: string }) => ({
          id: f.id,
          name: f.name,
          thumb: `https://lh3.googleusercontent.com/d/${f.id}=w600`,
          url: `https://lh3.googleusercontent.com/d/${f.id}=w1600`,
        }),
      );
      return Response.json({ images }, { headers: corsHeaders });
    }

    return Response.json({ error: "unknown action" }, { status: 400, headers: corsHeaders });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return Response.json({ error: msg }, { status: 500, headers: corsHeaders });
  }
});
