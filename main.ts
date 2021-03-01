import { json, serve } from "https://deno.land/x/sift@0.1.4/mod.ts";

serve({
  "/": () => json({ message: "really cool api" }),
});
