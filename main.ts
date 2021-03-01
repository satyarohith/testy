import { json, serve } from "https://deno.land/x/sift@0.1.4/mod.ts";

serve({
  "/": () => {
    return json({ message: "really cool api", date: new Date().toString() });
  }
});
