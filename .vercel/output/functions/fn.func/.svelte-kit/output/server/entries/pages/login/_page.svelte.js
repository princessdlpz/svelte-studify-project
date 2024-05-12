import { c as create_ssr_component, v as validate_component, d as add_attribute } from "../../../chunks/ssr.js";
import "../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "../../../chunks/Button.js";
import "../../../chunks/index.js";
import "devalue";
import "uniqid";
const cover = "/_app/immutable/assets/concept.C-QjIcWH.png";
const css = {
  code: 'body{background-image:url("src/assets/mesh-25.png");background-repeat:no-repeat;background-size:cover;height:100vh}.wrapper.svelte-14rqhtb.svelte-14rqhtb{display:flex;width:100%;max-width:1200px;margin:80px auto 0;align-items:center;flex-direction:column}@media(min-width: 768px){.wrapper.svelte-14rqhtb.svelte-14rqhtb{flex-direction:row}}.cover.svelte-14rqhtb.svelte-14rqhtb{flex:1;margin-top:40px}@media(min-width: 768px){.cover.svelte-14rqhtb.svelte-14rqhtb{margin-top:0;margin-left:20px}}.cover.svelte-14rqhtb img.svelte-14rqhtb{max-width:100%}.content.svelte-14rqhtb.svelte-14rqhtb{flex:1.05}.content.svelte-14rqhtb h1.svelte-14rqhtb{font-size:3.75rem}.content.svelte-14rqhtb p.svelte-14rqhtb{font-size:1.25rem}.content.svelte-14rqhtb .buttons.svelte-14rqhtb{margin-top:40px}.content.svelte-14rqhtb .buttons.svelte-14rqhtb .button{margin-right:10px;padding:10px 20px;text-transform:uppercase}',
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Button } from '$components';\\nimport cover from '$assets/concept.png';\\n<\/script>\\n\\n<div class=\\"wrapper\\">\\n\\t<div class=\\"content\\">\\n\\t\\t<title>STUDIFY</title>\\n\\t\\t<h1>Studify</h1>\\n\\t\\t<p>Master the art of concentration with the perfect study soundtrack. Tune into success with Studify</p>\\n\\t\\t<div class=\\"buttons\\">\\n\\t\\t\\t<Button\\n\\t\\t\\t\\telement=\\"a\\"\\n\\t\\t\\t\\tvariant=\\"outline\\"\\n\\t\\t\\t\\thref=\\"https://www.spotify.com/us/signup\\"\\n\\t\\t\\t\\ttarget=\\"_blank\\"\\n\\t\\t\\t\\trel=\\"noopener noreferrer\\">Sign Up</Button\\n\\t\\t\\t>\\n\\t\\t\\t<Button element=\\"a\\" href=\\"/api/auth/login\\">Login</Button>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div class=\\"cover\\">\\n\\t\\t<img src={cover} alt=\\"Svelte album cover\\" />\\n\\t</div>\\n</div>\\n\\n<style lang=\\"scss\\">:global(body) {\\n  background-image: url(\\"src/assets/mesh-25.png\\");\\n  background-repeat: no-repeat;\\n  background-size: cover;\\n  height: 100vh;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  width: 100%;\\n  max-width: 1200px;\\n  margin: 80px auto 0;\\n  align-items: center;\\n  flex-direction: column;\\n}\\n@media (min-width: 768px) {\\n  .wrapper {\\n    flex-direction: row;\\n  }\\n}\\n\\n.cover {\\n  flex: 1;\\n  margin-top: 40px;\\n}\\n@media (min-width: 768px) {\\n  .cover {\\n    margin-top: 0;\\n    margin-left: 20px;\\n  }\\n}\\n.cover img {\\n  max-width: 100%;\\n}\\n\\n.content {\\n  flex: 1.05;\\n}\\n.content h1 {\\n  font-size: 3.75rem;\\n}\\n.content p {\\n  font-size: 1.25rem;\\n}\\n.content .buttons {\\n  margin-top: 40px;\\n}\\n.content .buttons :global(.button) {\\n  margin-right: 10px;\\n  padding: 10px 20px;\\n  text-transform: uppercase;\\n}</style>"],"names":[],"mappings":"AAyB2B,IAAM,CAC/B,gBAAgB,CAAE,6BAA6B,CAC/C,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,MAAM,CAAE,KACV,CAEA,sCAAS,CACP,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,CAAC,CACnB,WAAW,CAAE,MAAM,CACnB,cAAc,CAAE,MAClB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,sCAAS,CACP,cAAc,CAAE,GAClB,CACF,CAEA,oCAAO,CACL,IAAI,CAAE,CAAC,CACP,UAAU,CAAE,IACd,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,oCAAO,CACL,UAAU,CAAE,CAAC,CACb,WAAW,CAAE,IACf,CACF,CACA,qBAAM,CAAC,kBAAI,CACT,SAAS,CAAE,IACb,CAEA,sCAAS,CACP,IAAI,CAAE,IACR,CACA,uBAAQ,CAAC,iBAAG,CACV,SAAS,CAAE,OACb,CACA,uBAAQ,CAAC,gBAAE,CACT,SAAS,CAAE,OACb,CACA,uBAAQ,CAAC,uBAAS,CAChB,UAAU,CAAE,IACd,CACA,uBAAQ,CAAC,uBAAQ,CAAS,OAAS,CACjC,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,cAAc,CAAE,SAClB"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-14rqhtb"><div class="content svelte-14rqhtb"><title data-svelte-h="svelte-1gyj9x8">STUDIFY</title> <h1 class="svelte-14rqhtb" data-svelte-h="svelte-8czbc6">Studify</h1> <p class="svelte-14rqhtb" data-svelte-h="svelte-17rxzng">Master the art of concentration with the perfect study soundtrack. Tune into success with Studify</p> <div class="buttons svelte-14rqhtb">${validate_component(Button, "Button").$$render(
    $$result,
    {
      element: "a",
      variant: "outline",
      href: "https://www.spotify.com/us/signup",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {},
    {
      default: () => {
        return `Sign Up`;
      }
    }
  )} ${validate_component(Button, "Button").$$render($$result, { element: "a", href: "/api/auth/login" }, {}, {
    default: () => {
      return `Login`;
    }
  })}</div></div> <div class="cover svelte-14rqhtb" data-svelte-h="svelte-g0y4k"><img${add_attribute("src", cover, 0)} alt="Svelte album cover" class="svelte-14rqhtb"></div> </div>`;
});
export {
  Page as default
};
