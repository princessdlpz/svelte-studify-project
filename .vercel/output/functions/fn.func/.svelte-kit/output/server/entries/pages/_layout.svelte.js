import { c as create_ssr_component, v as validate_component, a as subscribe, b as add_styles, e as each, d as add_attribute, m as missing_component, f as escape, g as compute_rest_props, h as spread, i as escape_object } from "../../chunks/ssr.js";
import "../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { p as page } from "../../chunks/stores.js";
import "../../chunks/index.js";
import "devalue";
import uniqid from "uniqid";
import { I as Icon } from "../../chunks/Icon.js";
import { X } from "../../chunks/x.js";
import { L as LogoutButton } from "../../chunks/LogoutButton.js";
import { w as writable } from "../../chunks/index2.js";
import NProgress from "nprogress";
import "micromodal";
const Chevron_down = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-down" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Chevron_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-left" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Chevron_right = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-right" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const External_link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M15 3h6v6" }],
    ["path", { "d": "M10 14 21 3" }],
    [
      "path",
      {
        "d": "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "external-link" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ],
    ["polyline", { "points": "9 22 9 12 15 12 15 22" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "home" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const List_music = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M21 15V6" }],
    [
      "path",
      {
        "d": "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
      }
    ],
    ["path", { "d": "M12 12H3" }],
    ["path", { "d": "M16 6H3" }],
    ["path", { "d": "M12 18H3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "list-music" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "11", "cy": "11", "r": "8" }],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "search" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const css$6 = {
  code: ".nav-content.svelte-sbq14w .overlay.svelte-sbq14w{position:fixed;width:100%;height:100%;top:0;left:0;background-color:var(--sidebar-color);opacity:0.75;z-index:100}@media(min-width: 768px){.nav-content.svelte-sbq14w .overlay.svelte-sbq14w{display:none}}.nav-content.svelte-sbq14w .nav-content-inner.svelte-sbq14w{min-width:var(--sidebar-width);background-color:var(--sidebar-color);height:100vh;display:none}.nav-content.svelte-sbq14w .nav-content-inner .logo-and-menu.svelte-sbq14w{padding:20px 20px 0;overflow:hidden}.nav-content.svelte-sbq14w .nav-content-inner .all-playlists.svelte-sbq14w{flex:1;overflow:auto;padding:15px 20px;border-top:1px solid var(--border)}@media(max-width: 767px){html.no-js .nav-content.svelte-sbq14w .nav-content-inner .all-playlists.svelte-sbq14w{display:none}}.nav-content.svelte-sbq14w .nav-content-inner .all-playlists ul.svelte-sbq14w{list-style:none;margin:0}.nav-content.svelte-sbq14w .nav-content-inner .all-playlists ul li.svelte-sbq14w{margin:0 0 5px}.nav-content.svelte-sbq14w .nav-content-inner .all-playlists ul li a.svelte-sbq14w{margin:0}@media(max-width: 767px){html.no-js .nav-content.svelte-sbq14w .nav-content-inner.svelte-sbq14w{display:block;height:auto}}.nav-content.svelte-sbq14w .nav-content-inner ul.svelte-sbq14w{padding:0;margin:20px 0 0;list-style:none}.nav-content.svelte-sbq14w .nav-content-inner ul li.active a.svelte-sbq14w{opacity:1}.nav-content.svelte-sbq14w .nav-content-inner ul li a.svelte-sbq14w{display:flex;align-items:center;text-decoration:none;color:var(--text-color);font-size:0.875rem;font-weight:500;padding:5px;margin:10px 0;opacity:0.7;transition:opacity 0.2s}.nav-content.svelte-sbq14w .nav-content-inner ul li a.svelte-sbq14w:hover,.nav-content.svelte-sbq14w .nav-content-inner ul li a.svelte-sbq14w:focus{opacity:1}.nav-content.svelte-sbq14w .nav-content-inner ul li a.svelte-sbq14w svg{margin-right:12px}.nav-content.desktop.svelte-sbq14w.svelte-sbq14w{position:sticky;top:0}@media(min-width: 768px){.nav-content.desktop.svelte-sbq14w .nav-content-inner.svelte-sbq14w{display:flex;flex-direction:column}}.nav-content.mobile.svelte-sbq14w .nav-content-inner.svelte-sbq14w{position:fixed;top:0;left:0;z-index:100;transition:transform 200ms, opacity 200ms}.nav-content.mobile.svelte-sbq14w .nav-content-inner.is-hidden.svelte-sbq14w{transition:transform 200ms, opacity 200ms, visibility 200ms;transform:translateX(-100%);opacity:0}@media(max-width: 767px){.nav-content.mobile.svelte-sbq14w .nav-content-inner.svelte-sbq14w{display:flex;flex-direction:column}}@media(min-width: 768px){.nav-content.svelte-sbq14w .menu-button{display:none}}.nav-content.svelte-sbq14w .close-menu-button{position:absolute;right:20px;top:20px}",
  map: `{"version":3,"file":"Navigation.svelte","sources":["Navigation.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Home, Search, ListMusic, Menu, X } from 'lucide-svelte';\\nimport { IconButton } from '$components';\\nimport { tick } from 'svelte';\\nimport { page } from '$app/stores';\\nimport { fade } from 'svelte/transition';\\nimport { beforeNavigate } from '$app/navigation';\\nexport let desktop;\\nexport let userAllPlaylists;\\nlet isMobileMenuOpen = false;\\n$: isOpen = desktop || isMobileMenuOpen;\\nlet openMenuButton;\\nlet closeMenuButton;\\nlet lastFocusableElement;\\nconst menuItems = [\\n    {\\n        path: '/',\\n        label: 'Home',\\n        icon: Home\\n    },\\n    {\\n        path: '/search',\\n        label: 'Search',\\n        icon: Search\\n    },\\n    {\\n        path: '/playlists',\\n        label: 'Playlists',\\n        icon: ListMusic\\n    }\\n];\\nconst openMenu = async () => {\\n    isMobileMenuOpen = true;\\n    await tick();\\n    closeMenuButton.getButton().focus();\\n};\\nconst closeMenu = async () => {\\n    isMobileMenuOpen = false;\\n    await tick();\\n    openMenuButton.getButton().focus();\\n};\\nconst moveFocusToBottom = (e) => {\\n    if (desktop)\\n        return;\\n    if (e.key === 'Tab' && e.shiftKey) {\\n        e.preventDefault();\\n        lastFocusableElement.focus();\\n    }\\n};\\nconst moveFocusToTop = (e) => {\\n    if (desktop)\\n        return;\\n    if (e.key === 'Tab' && !e.shiftKey) {\\n        e.preventDefault();\\n        closeMenuButton.getButton().focus();\\n    }\\n};\\nconst handleEscape = (e) => {\\n    if (e.key === 'Escape') {\\n        closeMenu();\\n    }\\n};\\nbeforeNavigate(() => {\\n    isMobileMenuOpen = false;\\n});\\n<\/script>\\n\\n<svelte:head>\\n\\t{#if !desktop && isMobileMenuOpen}\\n\\t\\t<style>\\n\\t\\t\\tbody {\\n\\t\\t\\t\\toverflow: hidden;\\n\\t\\t\\t}\\n\\t\\t</style>\\n\\t{/if}\\n</svelte:head>\\n\\n<div class=\\"nav-content\\" class:desktop class:mobile={!desktop}>\\n\\t{#if !desktop && isMobileMenuOpen}\\n\\t\\t<div\\n\\t\\t\\tclass=\\"overlay\\"\\n\\t\\t\\ton:click={closeMenu}\\n\\t\\t\\ton:keyup={handleEscape}\\n\\t\\t\\ttransition:fade={{ duration: 200 }}\\n\\t\\t/>\\n\\t{/if}\\n\\t<nav aria-label=\\"Main\\">\\n\\t\\t{#if !desktop}\\n\\t\\t\\t<IconButton\\n\\t\\t\\t\\ticon={Menu}\\n\\t\\t\\t\\tlabel=\\"Open menu\\"\\n\\t\\t\\t\\tbind:this={openMenuButton}\\n\\t\\t\\t\\ton:click={openMenu}\\n\\t\\t\\t\\taria-expanded={isOpen}\\n\\t\\t\\t\\tclass=\\"menu-button\\"\\n\\t\\t\\t/>\\n\\t\\t{/if}\\n\\t\\t<div\\n\\t\\t\\tclass=\\"nav-content-inner\\"\\n\\t\\t\\tclass:is-hidden={!isOpen}\\n\\t\\t\\tstyle:visibility={isOpen ? 'visible' : 'hidden'}\\n\\t\\t\\ton:keyup={handleEscape}\\n\\t\\t>\\n\\t\\t\\t{#if !desktop}\\n\\t\\t\\t\\t<IconButton\\n\\t\\t\\t\\t\\ticon={X}\\n\\t\\t\\t\\t\\tlabel=\\"Close Menu\\"\\n\\t\\t\\t\\t\\tbind:this={closeMenuButton}\\n\\t\\t\\t\\t\\ton:click={closeMenu}\\n\\t\\t\\t\\t\\ton:keydown={moveFocusToBottom}\\n\\t\\t\\t\\t\\tclass=\\"close-menu-button\\"\\n\\t\\t\\t\\t/>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<div class=\\"logo-and-menu\\">\\n\\t\\t\\t\\t<h1>Studify</h1>\\n\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t{#each menuItems as item, index}\\n\\t\\t\\t\\t\\t\\t{@const iconProps = {\\n\\t\\t\\t\\t\\t\\t\\tfocusable: 'false',\\n\\t\\t\\t\\t\\t\\t\\t'aria-hidden': true,\\n\\t\\t\\t\\t\\t\\t\\tcolor: 'var(--text-color)',\\n\\t\\t\\t\\t\\t\\t\\tsize: 26,\\n\\t\\t\\t\\t\\t\\t\\tstrokeWidth: 2\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t<li class:active={item.path === $page.url.pathname}>\\n\\t\\t\\t\\t\\t\\t\\t{#if menuItems.length === index + 1}\\n\\t\\t\\t\\t\\t\\t\\t\\t<a bind:this={lastFocusableElement} href={item.path} on:keydown={moveFocusToTop}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svelte:component this={item.icon} {...iconProps} />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{item.label}\\n\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href={item.path}>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<svelte:component this={item.icon} {...iconProps} />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t{item.label}\\n\\t\\t\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</div>\\n\\t\\t\\t{#if userAllPlaylists && userAllPlaylists.length > 0}\\n\\t\\t\\t\\t<div class=\\"all-playlists\\">\\n\\t\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t\\t{#each userAllPlaylists as playlist}\\n\\t\\t\\t\\t\\t\\t\\t<li class:active={$page.url.pathname === \`/playlist/\${playlist.id}\`}>\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\"/playlist/{playlist.id}\\">{playlist.name}</a>\\n\\t\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t</ul>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</nav>\\n</div>\\n\\n<style lang=\\"scss\\">.nav-content .overlay {\\n  position: fixed;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  background-color: var(--sidebar-color);\\n  opacity: 0.75;\\n  z-index: 100;\\n}\\n@media (min-width: 768px) {\\n  .nav-content .overlay {\\n    display: none;\\n  }\\n}\\n.nav-content .nav-content-inner {\\n  min-width: var(--sidebar-width);\\n  background-color: var(--sidebar-color);\\n  height: 100vh;\\n  display: none;\\n}\\n.nav-content .nav-content-inner .logo-and-menu {\\n  padding: 20px 20px 0;\\n  overflow: hidden;\\n}\\n.nav-content .nav-content-inner .all-playlists {\\n  flex: 1;\\n  overflow: auto;\\n  padding: 15px 20px;\\n  border-top: 1px solid var(--border);\\n}\\n@media (max-width: 767px) {\\n  :global(html.no-js) .nav-content .nav-content-inner .all-playlists {\\n    display: none;\\n  }\\n}\\n.nav-content .nav-content-inner .all-playlists ul {\\n  list-style: none;\\n  margin: 0;\\n}\\n.nav-content .nav-content-inner .all-playlists ul li {\\n  margin: 0 0 5px;\\n}\\n.nav-content .nav-content-inner .all-playlists ul li a {\\n  margin: 0;\\n}\\n@media (max-width: 767px) {\\n  :global(html.no-js) .nav-content .nav-content-inner {\\n    display: block;\\n    height: auto;\\n  }\\n}\\n.nav-content .nav-content-inner ul {\\n  padding: 0;\\n  margin: 20px 0 0;\\n  list-style: none;\\n}\\n.nav-content .nav-content-inner ul li.active a {\\n  opacity: 1;\\n}\\n.nav-content .nav-content-inner ul li a {\\n  display: flex;\\n  align-items: center;\\n  text-decoration: none;\\n  color: var(--text-color);\\n  font-size: 0.875rem;\\n  font-weight: 500;\\n  padding: 5px;\\n  margin: 10px 0;\\n  opacity: 0.7;\\n  transition: opacity 0.2s;\\n}\\n.nav-content .nav-content-inner ul li a:hover, .nav-content .nav-content-inner ul li a:focus {\\n  opacity: 1;\\n}\\n.nav-content .nav-content-inner ul li a :global(svg) {\\n  margin-right: 12px;\\n}\\n.nav-content.desktop {\\n  position: sticky;\\n  top: 0;\\n}\\n@media (min-width: 768px) {\\n  .nav-content.desktop .nav-content-inner {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n}\\n.nav-content.mobile .nav-content-inner {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  z-index: 100;\\n  transition: transform 200ms, opacity 200ms;\\n}\\n.nav-content.mobile .nav-content-inner.is-hidden {\\n  transition: transform 200ms, opacity 200ms, visibility 200ms;\\n  transform: translateX(-100%);\\n  opacity: 0;\\n}\\n@media (max-width: 767px) {\\n  .nav-content.mobile .nav-content-inner {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .nav-content :global(.menu-button) {\\n    display: none;\\n  }\\n}\\n.nav-content :global(.close-menu-button) {\\n  position: absolute;\\n  right: 20px;\\n  top: 20px;\\n}</style>\\n"],"names":[],"mappings":"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"}`
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isOpen;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { desktop } = $$props;
  let { userAllPlaylists } = $$props;
  let isMobileMenuOpen = false;
  let openMenuButton;
  let closeMenuButton;
  let lastFocusableElement;
  const menuItems = [
    { path: "/", label: "Home", icon: Home },
    {
      path: "/search",
      label: "Search",
      icon: Search
    },
    {
      path: "/playlists",
      label: "Playlists",
      icon: List_music
    }
  ];
  if ($$props.desktop === void 0 && $$bindings.desktop && desktop !== void 0)
    $$bindings.desktop(desktop);
  if ($$props.userAllPlaylists === void 0 && $$bindings.userAllPlaylists && userAllPlaylists !== void 0)
    $$bindings.userAllPlaylists(userAllPlaylists);
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    isOpen = desktop || isMobileMenuOpen;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-abtipy_START -->${!desktop && isMobileMenuOpen ? `<style data-svelte-h="svelte-knu6sh">body {
				overflow: hidden;
			}</style>` : ``}<!-- HEAD_svelte-abtipy_END -->`, ""} <div class="${[
      "nav-content svelte-sbq14w",
      (desktop ? "desktop" : "") + " " + (!desktop ? "mobile" : "")
    ].join(" ").trim()}">${!desktop && isMobileMenuOpen ? `<div class="overlay svelte-sbq14w"></div>` : ``} <nav aria-label="Main">${!desktop ? `${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        icon: Menu,
        label: "Open menu",
        "aria-expanded": isOpen,
        class: "menu-button",
        this: openMenuButton
      },
      {
        this: ($$value) => {
          openMenuButton = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="${["nav-content-inner svelte-sbq14w", !isOpen ? "is-hidden" : ""].join(" ").trim()}"${add_styles({
      "visibility": isOpen ? "visible" : "hidden"
    })}>${!desktop ? `${validate_component(IconButton, "IconButton").$$render(
      $$result,
      {
        icon: X,
        label: "Close Menu",
        class: "close-menu-button",
        this: closeMenuButton
      },
      {
        this: ($$value) => {
          closeMenuButton = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``} <div class="logo-and-menu svelte-sbq14w"><h1 data-svelte-h="svelte-8czbc6">Studify</h1> <ul class="svelte-sbq14w">${each(menuItems, (item, index) => {
      let iconProps = {
        focusable: "false",
        "aria-hidden": true,
        color: "var(--text-color)",
        size: 26,
        strokeWidth: 2
      };
      return ` <li class="${["svelte-sbq14w", item.path === $page.url.pathname ? "active" : ""].join(" ").trim()}">${menuItems.length === index + 1 ? `<a${add_attribute("href", item.path, 0)} class="svelte-sbq14w"${add_attribute("this", lastFocusableElement, 0)}>${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, Object.assign({}, iconProps), {}, {})} ${escape(item.label)} </a>` : `<a${add_attribute("href", item.path, 0)} class="svelte-sbq14w">${validate_component(item.icon || missing_component, "svelte:component").$$render($$result, Object.assign({}, iconProps), {}, {})} ${escape(item.label)} </a>`} </li>`;
    })}</ul></div> ${userAllPlaylists && userAllPlaylists.length > 0 ? `<div class="all-playlists svelte-sbq14w"><ul class="svelte-sbq14w">${each(userAllPlaylists, (playlist) => {
      return `<li class="${[
        "svelte-sbq14w",
        $page.url.pathname === `/playlist/${playlist.id}` ? "active" : ""
      ].join(" ").trim()}"><a href="${"/playlist/" + escape(playlist.id, true)}" class="svelte-sbq14w">${escape(playlist.name)}</a> </li>`;
    })}</ul></div>` : ``}</div></nav> </div>`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const css$5 = {
  code: ".search-form.svelte-1c1gesq.svelte-1c1gesq{margin-left:20px;display:none}@media(min-width: 960px){.search-form.svelte-1c1gesq.svelte-1c1gesq{display:block}}html.no-js .search-form.svelte-1c1gesq.svelte-1c1gesq{margin-left:0px}.content.svelte-1c1gesq.svelte-1c1gesq{display:flex;justify-content:space-between;align-items:center;width:100%}@media(max-width: 767px){html.no-js .content.svelte-1c1gesq.svelte-1c1gesq{justify-content:flex-start}}.content.svelte-1c1gesq .left.svelte-1c1gesq{display:flex;align-items:center}.profile-button.svelte-1c1gesq.svelte-1c1gesq{background:none;border:1px solid var(--border);padding:5px;border-radius:25px;display:flex;align-items:center;color:var(--text-color);cursor:pointer}html.no-js .profile-button.svelte-1c1gesq.svelte-1c1gesq{display:none}.profile-button.svelte-1c1gesq .profile-arrow{margin-left:3px}.profile-button.svelte-1c1gesq img.svelte-1c1gesq{width:28px;height:28px;border-radius:100%;margin-right:10px}.profile-button.svelte-1c1gesq.svelte-1c1gesq:hover{background-color:var(--accent-color)}.profile-menu-content.svelte-1c1gesq.svelte-1c1gesq{padding:5px 0}.profile-menu-content.svelte-1c1gesq ul.svelte-1c1gesq{padding:0;margin:0;list-style:none}.profile-menu-content.svelte-1c1gesq ul li.svelte-1c1gesq:hover{background-image:linear-gradient(rgba(255, 255, 255, 0.07) 0 0)}.profile-menu-content.svelte-1c1gesq ul li a.svelte-1c1gesq svg{vertical-align:middle;margin-left:10px}.profile-menu-content.svelte-1c1gesq ul li a.svelte-1c1gesq,.profile-menu-content.svelte-1c1gesq ul li.svelte-1c1gesq button{display:inline-block;padding:10px 15px;background:none;border:none;text-decoration:none;cursor:pointer;color:var(--menu-text-color);width:100%;text-align:left;font-size:0.875rem;border-radius:0;font-weight:400}.profile-menu-content.svelte-1c1gesq ul li a.svelte-1c1gesq:hover,.profile-menu-content.svelte-1c1gesq ul li.svelte-1c1gesq button:hover{background-image:none}html.no-js #profile-menu.svelte-1c1gesq.svelte-1c1gesq{display:block !important}html.no-js #profile-menu.svelte-1c1gesq .profile-menu-content ul.svelte-1c1gesq{padding:0;margin:0}html.no-js #profile-menu.svelte-1c1gesq .profile-menu-content ul li.svelte-1c1gesq{display:inline-block}",
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { browser } from '$app/environment';\\nimport { LogoutButton, Navigation, SearchForm, HeaderNav } from '$components';\\nimport { page } from '$app/stores';\\nimport { ChevronDown, ExternalLink } from 'lucide-svelte';\\nimport { tippy } from '$actions';\\nexport let userAllPlaylists;\\n$: user = $page.data.user;\\n<\/script>\\n\\n<div class=\\"content\\">\\n\\t<div class=\\"left\\">\\n\\t\\t{#if browser}\\n\\t\\t\\t<Navigation desktop={false} {userAllPlaylists} />\\n\\t\\t{/if}\\n\\n\\t\\t<HeaderNav />\\n\\n\\t\\t{#if $page.url.pathname.startsWith('/search')}\\n\\t\\t\\t<div class=\\"search-form\\">\\n\\t\\t\\t\\t<SearchForm />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t</div>\\n\\t<div class=\\"right\\">\\n\\t\\t<div id=\\"profile-button\\">\\n\\t\\t\\t<button\\n\\t\\t\\t\\tclass=\\"profile-button\\"\\n\\t\\t\\t\\tuse:tippy={{\\n\\t\\t\\t\\t\\tcontent: document.getElementById('profile-menu') || undefined,\\n\\t\\t\\t\\t\\tonMount: () => {\\n\\t\\t\\t\\t\\t\\tconst template = document.getElementById('profile-menu');\\n\\t\\t\\t\\t\\t\\tif (template) {\\n\\t\\t\\t\\t\\t\\t\\ttemplate.style.display = 'block';\\n\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t},\\n\\t\\t\\t\\t\\ttrigger: 'click',\\n\\t\\t\\t\\t\\tplacement: 'bottom-end',\\n\\t\\t\\t\\t\\tinteractive: true,\\n\\t\\t\\t\\t\\ttheme: 'menu',\\n\\t\\t\\t\\t\\thideOnPopperBlur: true\\n\\t\\t\\t\\t}}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#if user?.images && user.images.length > 0}\\n\\t\\t\\t\\t\\t<img src={user.images[0].url} alt=\\"\\" />\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{user?.display_name} <span class=\\"visually-hidden\\">Profile menu</span>\\n\\t\\t\\t\\t<ChevronDown class=\\"profile-arrow\\" size={22} />\\n\\t\\t\\t</button>\\n\\t\\t</div>\\n\\t\\t<div id=\\"profile-menu\\" style=\\"display: none;\\">\\n\\t\\t\\t<div class=\\"profile-menu-content\\">\\n\\t\\t\\t\\t<ul>\\n\\t\\t\\t\\t\\t<li>\\n\\t\\t\\t\\t\\t\\t<a href={user?.external_urls.spotify} target=\\"_blank\\" rel=\\"noopener noreferrer\\"\\n\\t\\t\\t\\t\\t\\t\\t>View on Spotify\\n\\t\\t\\t\\t\\t\\t\\t<ExternalLink focusable=\\"false\\" aria-hidden size={20} />\\n\\t\\t\\t\\t\\t\\t</a>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t<li><a href=\\"/profile\\">View Profile</a></li>\\n\\t\\t\\t\\t\\t<li><LogoutButton /></li>\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style lang=\\"scss\\">.search-form {\\n  margin-left: 20px;\\n  display: none;\\n}\\n@media (min-width: 960px) {\\n  .search-form {\\n    display: block;\\n  }\\n}\\n:global(html.no-js) .search-form {\\n  margin-left: 0px;\\n}\\n\\n.content {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100%;\\n}\\n@media (max-width: 767px) {\\n  :global(html.no-js) .content {\\n    justify-content: flex-start;\\n  }\\n}\\n.content .left {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.profile-button {\\n  background: none;\\n  border: 1px solid var(--border);\\n  padding: 5px;\\n  border-radius: 25px;\\n  display: flex;\\n  align-items: center;\\n  color: var(--text-color);\\n  cursor: pointer;\\n}\\n:global(html.no-js) .profile-button {\\n  display: none;\\n}\\n.profile-button :global(.profile-arrow) {\\n  margin-left: 3px;\\n}\\n.profile-button img {\\n  width: 28px;\\n  height: 28px;\\n  border-radius: 100%;\\n  margin-right: 10px;\\n}\\n.profile-button:hover {\\n  background-color: var(--accent-color);\\n}\\n\\n.profile-menu-content {\\n  padding: 5px 0;\\n}\\n.profile-menu-content ul {\\n  padding: 0;\\n  margin: 0;\\n  list-style: none;\\n}\\n.profile-menu-content ul li:hover {\\n  background-image: linear-gradient(rgba(255, 255, 255, 0.07) 0 0);\\n}\\n.profile-menu-content ul li a :global(svg) {\\n  vertical-align: middle;\\n  margin-left: 10px;\\n}\\n.profile-menu-content ul li a,\\n.profile-menu-content ul li :global(button) {\\n  display: inline-block;\\n  padding: 10px 15px;\\n  background: none;\\n  border: none;\\n  text-decoration: none;\\n  cursor: pointer;\\n  color: var(--menu-text-color);\\n  width: 100%;\\n  text-align: left;\\n  font-size: 0.875rem;\\n  border-radius: 0;\\n  font-weight: 400;\\n}\\n.profile-menu-content ul li a:hover,\\n.profile-menu-content ul li :global(button):hover {\\n  background-image: none;\\n}\\n\\n:global(html.no-js) #profile-menu {\\n  display: block !important;\\n}\\n:global(html.no-js) #profile-menu .profile-menu-content ul {\\n  padding: 0;\\n  margin: 0;\\n}\\n:global(html.no-js) #profile-menu .profile-menu-content ul li {\\n  display: inline-block;\\n}</style>\\n"],"names":[],"mappings":"AAkEmB,0CAAa,CAC9B,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IACX,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,0CAAa,CACX,OAAO,CAAE,KACX,CACF,CACQ,UAAW,CAAC,0CAAa,CAC/B,WAAW,CAAE,GACf,CAEA,sCAAS,CACP,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IACT,CACA,MAAO,YAAY,KAAK,CAAE,CAChB,UAAW,CAAC,sCAAS,CAC3B,eAAe,CAAE,UACnB,CACF,CACA,uBAAQ,CAAC,oBAAM,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CAEA,6CAAgB,CACd,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,IAAI,QAAQ,CAAC,CAC/B,OAAO,CAAE,GAAG,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,IAAI,YAAY,CAAC,CACxB,MAAM,CAAE,OACV,CACQ,UAAW,CAAC,6CAAgB,CAClC,OAAO,CAAE,IACX,CACA,8BAAe,CAAS,cAAgB,CACtC,WAAW,CAAE,GACf,CACA,8BAAe,CAAC,kBAAI,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,YAAY,CAAE,IAChB,CACA,6CAAe,MAAO,CACpB,gBAAgB,CAAE,IAAI,cAAc,CACtC,CAEA,mDAAsB,CACpB,OAAO,CAAE,GAAG,CAAC,CACf,CACA,oCAAqB,CAAC,iBAAG,CACvB,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CAAC,CACT,UAAU,CAAE,IACd,CACA,oCAAqB,CAAC,EAAE,CAAC,iBAAE,MAAO,CAChC,gBAAgB,CAAE,gBAAgB,KAAK,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,CAAC,CAAC,CACjE,CACA,oCAAqB,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAC,CAAS,GAAK,CACzC,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,IACf,CACA,oCAAqB,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAC,CAC7B,oCAAqB,CAAC,EAAE,CAAC,iBAAE,CAAS,MAAQ,CAC1C,OAAO,CAAE,YAAY,CACrB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,OAAO,CACf,KAAK,CAAE,IAAI,iBAAiB,CAAC,CAC7B,KAAK,CAAE,IAAI,CACX,UAAU,CAAE,IAAI,CAChB,SAAS,CAAE,QAAQ,CACnB,aAAa,CAAE,CAAC,CAChB,WAAW,CAAE,GACf,CACA,oCAAqB,CAAC,EAAE,CAAC,EAAE,CAAC,gBAAC,MAAM,CACnC,oCAAqB,CAAC,EAAE,CAAC,iBAAE,CAAS,MAAO,MAAO,CAChD,gBAAgB,CAAE,IACpB,CAEQ,UAAW,CAAC,2CAAc,CAChC,OAAO,CAAE,KAAK,CAAC,UACjB,CACQ,UAAW,CAAC,4BAAa,CAAC,qBAAqB,CAAC,iBAAG,CACzD,OAAO,CAAE,CAAC,CACV,MAAM,CAAE,CACV,CACQ,UAAW,CAAC,4BAAa,CAAC,qBAAqB,CAAC,EAAE,CAAC,iBAAG,CAC5D,OAAO,CAAE,YACX"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { userAllPlaylists } = $$props;
  if ($$props.userAllPlaylists === void 0 && $$bindings.userAllPlaylists && userAllPlaylists !== void 0)
    $$bindings.userAllPlaylists(userAllPlaylists);
  $$result.css.add(css$5);
  user = $page.data.user;
  $$unsubscribe_page();
  return `<div class="content svelte-1c1gesq"><div class="left svelte-1c1gesq">${``} ${validate_component(HeaderNav, "HeaderNav").$$render($$result, {}, {}, {})} ${$page.url.pathname.startsWith("/search") ? `<div class="search-form svelte-1c1gesq">${validate_component(SearchForm, "SearchForm").$$render($$result, {}, {}, {})}</div>` : ``}</div> <div class="right"><div id="profile-button"><button class="profile-button svelte-1c1gesq">${user?.images && user.images.length > 0 ? `<img${add_attribute("src", user.images[0].url, 0)} alt="" class="svelte-1c1gesq">` : ``} ${escape(user?.display_name)} <span class="visually-hidden" data-svelte-h="svelte-qt2ybr">Profile menu</span> ${validate_component(Chevron_down, "ChevronDown").$$render($$result, { class: "profile-arrow", size: 22 }, {}, {})}</button></div> <div id="profile-menu" style="display: none;" class="svelte-1c1gesq"><div class="profile-menu-content svelte-1c1gesq"><ul class="svelte-1c1gesq"><li class="svelte-1c1gesq"><a${add_attribute("href", user?.external_urls.spotify, 0)} target="_blank" rel="noopener noreferrer" class="svelte-1c1gesq">View on Spotify
							${validate_component(External_link, "ExternalLink").$$render(
    $$result,
    {
      focusable: "false",
      "aria-hidden": true,
      size: 20
    },
    {},
    {}
  )}</a></li> <li class="svelte-1c1gesq" data-svelte-h="svelte-1ec5riz"><a href="/profile" class="svelte-1c1gesq">View Profile</a></li> <li class="svelte-1c1gesq">${validate_component(LogoutButton, "LogoutButton").$$render($$result, {}, {}, {})}</li></ul></div></div></div> </div>`;
});
const css$4 = {
  code: "button.svelte-1m8k0ey{border:none;background:none;cursor:pointer;padding:0;width:38px;height:38px}button.svelte-1m8k0ey svg{vertical-align:middle}button.svelte-1m8k0ey:disabled{opacity:0.6;cursor:not-allowed}button.svelte-1m8k0ey:active{background-color:var(--menu-background-color)}",
  map: '{"version":3,"file":"IconButton.svelte","sources":["IconButton.svelte"],"sourcesContent":["<script lang=\\"ts\\">export let icon;\\nexport let label;\\nlet button;\\nexport function getButton() {\\n    return button;\\n}\\n<\/script>\\n\\n<button bind:this={button} on:click on:mouseover on:focus on:keydown {...$$restProps}>\\n\\t<svelte:component this={icon} color=\\"var(--text-color)\\" aria-hidden=\\"true\\" focusable=\\"false\\" />\\n\\t<span class=\\"visually-hidden\\">{label}</span>\\n</button>\\n\\n<style lang=\\"scss\\">button {\\n  border: none;\\n  background: none;\\n  cursor: pointer;\\n  padding: 0;\\n  width: 38px;\\n  height: 38px;\\n}\\nbutton :global(svg) {\\n  vertical-align: middle;\\n}\\nbutton:disabled {\\n  opacity: 0.6;\\n  cursor: not-allowed;\\n}\\nbutton:active {\\n  background-color: var(--menu-background-color);\\n}</style>\\n"],"names":[],"mappings":"AAamB,qBAAO,CACxB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,qBAAM,CAAS,GAAK,CAClB,cAAc,CAAE,MAClB,CACA,qBAAM,SAAU,CACd,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,WACV,CACA,qBAAM,OAAQ,CACZ,gBAAgB,CAAE,IAAI,uBAAuB,CAC/C"}'
};
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["icon", "label", "getButton"]);
  let { icon } = $$props;
  let { label } = $$props;
  let button;
  function getButton() {
    return button;
  }
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.getButton === void 0 && $$bindings.getButton && getButton !== void 0)
    $$bindings.getButton(getButton);
  $$result.css.add(css$4);
  return `<button${spread([escape_object($$restProps)], { classes: "svelte-1m8k0ey" })}${add_attribute("this", button, 0)}>${validate_component(icon || missing_component, "svelte:component").$$render(
    $$result,
    {
      color: "var(--text-color)",
      "aria-hidden": "true",
      focusable: "false"
    },
    {},
    {}
  )} <span class="visually-hidden">${escape(label)}</span> </button>`;
});
function createToastsStore() {
  const { subscribe: subscribe2, update } = writable([]);
  function addToast({
    type,
    message,
    id,
    timeout = 3e3
  }) {
    update((toasts2) => [{ type, message, id }, ...toasts2]);
    if (timeout) {
      setTimeout(() => {
        removeToast(id);
      }, timeout);
    }
  }
  function removeToast(id) {
    update((toasts2) => toasts2.filter((t) => t.id !== id));
  }
  return {
    subscribe: subscribe2,
    info: (message, timeout) => addToast({
      type: "info",
      message,
      timeout,
      id: uniqid()
    }),
    warning: (message, timeout) => addToast({
      type: "warning",
      message,
      timeout,
      id: uniqid()
    }),
    error: (message, timeout) => addToast({
      type: "error",
      message,
      timeout,
      id: uniqid()
    }),
    success: (message, timeout) => addToast({
      type: "success",
      message,
      timeout,
      id: uniqid()
    }),
    remove: (id) => removeToast(id)
  };
}
const toasts = createToastsStore();
const css$3 = {
  code: ".toasts.svelte-qupmqz.svelte-qupmqz{position:fixed;top:0;right:0;padding:20px;width:100%;max-width:300px;z-index:9999;max-height:100vh;overflow:auto}.toasts.svelte-qupmqz .toast.svelte-qupmqz{background-color:var(--accent-color);box-shadow:0 0 10px rgba(1, 1, 1, 0.2);border-radius:2px;padding:10px 20px;margin-bottom:10px;font-weight:500;position:relative}.toasts.svelte-qupmqz .toast.error.svelte-qupmqz{background-color:var(--error)}.toasts.svelte-qupmqz .toast.warning.svelte-qupmqz{background-color:var(--warning)}.toasts.svelte-qupmqz .toast .close.svelte-qupmqz{background:none;padding:5px;border:none;position:absolute;top:0;right:0;cursor:pointer}.toasts.svelte-qupmqz .toast .close.svelte-qupmqz svg{width:18px;height:18px}",
  map: `{"version":3,"file":"Toasts.svelte","sources":["Toasts.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { toasts } from '$stores';\\nimport { fly } from 'svelte/transition';\\nimport { flip } from 'svelte/animate';\\nimport { X } from 'lucide-svelte';\\n<\/script>\\n\\n{#if $toasts.length > 0}\\n\\t<div class=\\"toasts\\">\\n\\t\\t{#each $toasts as toast (toast.id)}\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"toast {toast.type}\\"\\n\\t\\t\\t\\ttransition:fly={{ x: 100, duration: 300 }}\\n\\t\\t\\t\\tanimate:flip={{ duration: 300 }}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"content\\" role=\\"status\\">\\n\\t\\t\\t\\t\\t{toast.message}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\tclass=\\"close\\"\\n\\t\\t\\t\\t\\taria-label=\\"Close toast\\"\\n\\t\\t\\t\\t\\ton:click={() => {\\n\\t\\t\\t\\t\\t\\ttoasts.remove(toast.id);\\n\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t<X focusable=\\"false\\" aria-hidden color=\\"var(--text-color)\\" />\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n{/if}\\n\\n<style lang=\\"scss\\">.toasts {\\n  position: fixed;\\n  top: 0;\\n  right: 0;\\n  padding: 20px;\\n  width: 100%;\\n  max-width: 300px;\\n  z-index: 9999;\\n  max-height: 100vh;\\n  overflow: auto;\\n}\\n.toasts .toast {\\n  background-color: var(--accent-color);\\n  box-shadow: 0 0 10px rgba(1, 1, 1, 0.2);\\n  border-radius: 2px;\\n  padding: 10px 20px;\\n  margin-bottom: 10px;\\n  font-weight: 500;\\n  position: relative;\\n}\\n.toasts .toast.error {\\n  background-color: var(--error);\\n}\\n.toasts .toast.warning {\\n  background-color: var(--warning);\\n}\\n.toasts .toast .close {\\n  background: none;\\n  padding: 5px;\\n  border: none;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  cursor: pointer;\\n}\\n.toasts .toast .close :global(svg) {\\n  width: 18px;\\n  height: 18px;\\n}</style>\\n"],"names":[],"mappings":"AA+BmB,mCAAQ,CACzB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,IACZ,CACA,qBAAO,CAAC,oBAAO,CACb,gBAAgB,CAAE,IAAI,cAAc,CAAC,CACrC,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACvC,aAAa,CAAE,GAAG,CAClB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,IAAI,CACnB,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,QACZ,CACA,qBAAO,CAAC,MAAM,oBAAO,CACnB,gBAAgB,CAAE,IAAI,OAAO,CAC/B,CACA,qBAAO,CAAC,MAAM,sBAAS,CACrB,gBAAgB,CAAE,IAAI,SAAS,CACjC,CACA,qBAAO,CAAC,MAAM,CAAC,oBAAO,CACpB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,CACZ,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,OACV,CACA,qBAAO,CAAC,MAAM,CAAC,oBAAM,CAAS,GAAK,CACjC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV"}`
};
const Toasts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toasts, $$unsubscribe_toasts;
  $$unsubscribe_toasts = subscribe(toasts, (value) => $toasts = value);
  $$result.css.add(css$3);
  $$unsubscribe_toasts();
  return `${$toasts.length > 0 ? `<div class="toasts svelte-qupmqz">${each($toasts, (toast) => {
    return `<div class="${"toast " + escape(toast.type, true) + " svelte-qupmqz"}"><div class="content" role="status">${escape(toast.message)}</div> <button class="close svelte-qupmqz" aria-label="Close toast">${validate_component(X, "X").$$render(
      $$result,
      {
        focusable: "false",
        "aria-hidden": true,
        color: "var(--text-color)"
      },
      {},
      {}
    )}</button> </div>`;
  })}</div>` : ``}`;
});
const css$2 = {
  code: ".search-input-wrapper.svelte-bvut78.svelte-bvut78{position:relative;display:flex;align-items:center}.search-input-wrapper.svelte-bvut78 svg{position:absolute;margin-left:10px;stroke:var(--medium-gray);width:22px;height:22px}.search-input-wrapper.svelte-bvut78 .search-input.svelte-bvut78{border:none;padding:0 20px 0 40px;height:calc(var(--header-height) - 25px);border-radius:20px;font-size:0.875rem;color:var(--medium-gray)}",
  map: `{"version":3,"file":"SearchForm.svelte","sources":["SearchForm.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { afterNavigate } from '$app/navigation';\\nimport { page } from '$app/stores';\\nimport { Search } from 'lucide-svelte';\\nlet searchInput;\\n$: searchQuery = $page.params.query || '';\\nafterNavigate(() => {\\n    searchInput.focus();\\n});\\n<\/script>\\n\\n<form action=\\"/search\\" method=\\"GET\\" role=\\"search\\">\\n\\t<div class=\\"search-input-wrapper\\">\\n\\t\\t<Search aria-hidden focusable=\\"false\\" />\\n\\t\\t<input\\n\\t\\t\\tbind:this={searchInput}\\n\\t\\t\\tvalue={searchQuery}\\n\\t\\t\\tname=\\"q\\"\\n\\t\\t\\tclass=\\"search-input\\"\\n\\t\\t\\ttype=\\"search\\"\\n\\t\\t\\tsize=\\"30\\"\\n\\t\\t\\tplaceholder=\\"Search for albums, artists or playlists.\\"\\n\\t\\t\\taria-label=\\"Search for albums, artists or playlists.\\"\\n\\t\\t/>\\n\\t</div>\\n</form>\\n\\n<style lang=\\"scss\\">.search-input-wrapper {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n}\\n.search-input-wrapper :global(svg) {\\n  position: absolute;\\n  margin-left: 10px;\\n  stroke: var(--medium-gray);\\n  width: 22px;\\n  height: 22px;\\n}\\n.search-input-wrapper .search-input {\\n  border: none;\\n  padding: 0 20px 0 40px;\\n  height: calc(var(--header-height) - 25px);\\n  border-radius: 20px;\\n  font-size: 0.875rem;\\n  color: var(--medium-gray);\\n}</style>\\n"],"names":[],"mappings":"AA0BmB,iDAAsB,CACvC,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,mCAAqB,CAAS,GAAK,CACjC,QAAQ,CAAE,QAAQ,CAClB,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,aAAa,CAAC,CAC1B,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,mCAAqB,CAAC,2BAAc,CAClC,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CAAC,IAAI,CAAC,CAAC,CAAC,IAAI,CACtB,MAAM,CAAE,KAAK,IAAI,eAAe,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CACzC,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,QAAQ,CACnB,KAAK,CAAE,IAAI,aAAa,CAC1B"}`
};
const SearchForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let searchQuery;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let searchInput;
  $$result.css.add(css$2);
  searchQuery = $page.params.query || "";
  $$unsubscribe_page();
  return `<form action="/search" method="GET" role="search"><div class="search-input-wrapper svelte-bvut78">${validate_component(Search, "Search").$$render($$result, { "aria-hidden": true, focusable: "false" }, {}, {})} <input${add_attribute("value", searchQuery, 0)} name="q" class="search-input svelte-bvut78" type="search" size="30" placeholder="Search for albums, artists or playlists." aria-label="Search for albums, artists or playlists."${add_attribute("this", searchInput, 0)}></div> </form>`;
});
const css$1 = {
  code: "button.nav-button{background-color:var(--menu-background-color);margin-right:5px;border-radius:100%;height:34px;width:34px}button.nav-button:active{background-color:var(--accent-color)}html.no-js button.nav-button{display:none}",
  map: `{"version":3,"file":"HeaderNav.svelte","sources":["HeaderNav.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { afterNavigate, preloadData } from '$app/navigation';\\nimport { IconButton } from '$components';\\nimport { page } from '$app/stores';\\nimport { ChevronLeft, ChevronRight } from 'lucide-svelte';\\nlet backStack = []; // Stores previous route's pathnames\\nlet forwardStack = []; // Stores next route's pathnames\\nlet navClicked = false; // Keeps track of weather we navigated using the back and forward buttons or navigated using a link or any other way in the app.\\n// After every navigation:\\nafterNavigate(({ from, to }) => {\\n    // If we navigated to our app from outside our app, we don't need to store a route in the back stack.\\n    if (!from)\\n        return;\\n    // If we navigated using the back and forward buttons, we don't need to re-store the routes again in the stack because we are just moving in the history we are not adding a new item to the stack.\\n    if (navClicked) {\\n        navClicked = false;\\n        return;\\n    }\\n    // Otherwise, store the previous route in the back stack and clear the forward stack.\\n    backStack = [...backStack, from.url.pathname];\\n    forwardStack = [];\\n});\\n<\/script>\\n\\n<IconButton\\n\\ton:mouseover={() => {\\n\\t\\t// If we have items in the back stack, preload the page programmatically on hover using preloadData. This mimics hovering over links.\\n\\t\\tif (backStack.length === 0) return;\\n\\t\\tconst prevPage = backStack[backStack.length - 1];\\n\\t\\tpreloadData(prevPage);\\n\\t}}\\n\\ton:click={async () => {\\n\\t\\tif (backStack.length === 0) return;\\n\\t\\tnavClicked = true; // Set navClicked to true so that afterNavigate won't restore the route.\\n\\t\\tconst currPage = $page.url.pathname; // Get the current page pathname before navigating\\n\\t\\thistory.back(); // Navigate backwards\\n\\t\\tforwardStack = [...forwardStack, currPage]; // Store the path that we navigated from in the forward stack.\\n\\t\\tbackStack = backStack.slice(0, -1); // Remove the last item in the back stack (the path that we navigated to when we clicked back)\\n\\t}}\\n\\tlabel=\\"Go Back\\"\\n\\tdisabled={backStack.length === 0}\\n\\ticon={ChevronLeft}\\n\\tclass=\\"nav-button\\"\\n/>\\n\\n<IconButton\\n\\ton:mouseover={() => {\\n\\t\\t// If we have items in the forward stack, preload the page programmatically on hover using preloadData. This mimics hovering over links.\\n\\t\\tif (forwardStack.length === 0) return;\\n\\t\\tconst forwardPage = forwardStack[forwardStack.length - 1];\\n\\t\\tpreloadData(forwardPage);\\n\\t}}\\n\\ton:click={async () => {\\n\\t\\tif (forwardStack.length === 0) return;\\n\\t\\tnavClicked = true; // Set navClicked to true so that afterNavigate won't restore the route.\\n\\t\\tconst currPage = $page.url.pathname; // Get the current page pathname before navigating\\n\\t\\thistory.forward(); // Navigate forwards\\n\\t\\tbackStack = [...backStack, currPage]; // Store the path that we navigated from in the back stack.\\n\\t\\tforwardStack = forwardStack.slice(0, -1); // Remove the last item in the forward stack (the path that we navigated to when we clicked forward)\\n\\t}}\\n\\tlabel=\\"Go Forward\\"\\n\\tdisabled={forwardStack.length === 0}\\n\\ticon={ChevronRight}\\n\\tclass=\\"nav-button\\"\\n/>\\n\\n<style lang=\\"scss\\">:global(button.nav-button) {\\n  background-color: var(--menu-background-color);\\n  margin-right: 5px;\\n  border-radius: 100%;\\n  height: 34px;\\n  width: 34px;\\n}\\n:global(button.nav-button):active {\\n  background-color: var(--accent-color);\\n}\\n:global(html.no-js) :global(button.nav-button) {\\n  display: none;\\n}</style>\\n"],"names":[],"mappings":"AAiE2B,iBAAmB,CAC5C,gBAAgB,CAAE,IAAI,uBAAuB,CAAC,CAC9C,YAAY,CAAE,GAAG,CACjB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IACT,CACQ,iBAAkB,OAAQ,CAChC,gBAAgB,CAAE,IAAI,cAAc,CACtC,CACQ,UAAW,CAAS,iBAAmB,CAC7C,OAAO,CAAE,IACX"}`
};
const HeaderNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let backStack = [];
  let forwardStack = [];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      label: "Go Back",
      disabled: backStack.length === 0,
      icon: Chevron_left,
      class: "nav-button"
    },
    {},
    {}
  )} ${validate_component(IconButton, "IconButton").$$render(
    $$result,
    {
      label: "Go Forward",
      disabled: forwardStack.length === 0,
      icon: Chevron_right,
      class: "nav-button"
    },
    {},
    {}
  )}`;
});
const css = {
  code: "#main.svelte-scgxk5.svelte-scgxk5{display:flex}@media(max-width: 767px){html.no-js #main.svelte-scgxk5.svelte-scgxk5{display:block}}#main.svelte-scgxk5 #content.svelte-scgxk5{flex:1}#main.svelte-scgxk5 #content .message.svelte-scgxk5{position:sticky;z-index:9999;padding:10px 20px;top:0}#main.svelte-scgxk5 #content .message .close.svelte-scgxk5{position:absolute;right:10px;top:5px}#main.svelte-scgxk5 #content .message .close.svelte-scgxk5:focus{outline-color:#fff}#main.svelte-scgxk5 #content .message .close.svelte-scgxk5 svg{stroke:var(--text-color);vertical-align:middle}#main.svelte-scgxk5 #content .message.error.svelte-scgxk5{background-color:var(--error)}#main.svelte-scgxk5 #content .message.success.svelte-scgxk5{background-color:var(--accent-color)}#main.svelte-scgxk5 #content #topbar.svelte-scgxk5{position:fixed;height:var(--header-height);padding:0 15px;display:flex;align-items:center;width:100%;z-index:100}html.no-js #main.svelte-scgxk5 #content #topbar.svelte-scgxk5{position:sticky;top:0;background-color:var(--header-color);height:auto;padding:10px 20px}@media(min-width: 768px){html.no-js #main.svelte-scgxk5 #content #topbar.svelte-scgxk5{position:fixed}}#main.svelte-scgxk5 #content #topbar .topbar-bg.svelte-scgxk5{position:absolute;width:100%;height:100%;top:0;left:0;z-index:-1;background-image:linear-gradient(rgba(0, 0, 0, 0.2) 0 0)}@media(min-width: 768px){#main.svelte-scgxk5 #content #topbar.svelte-scgxk5{padding:0 30px;width:calc(100% - var(--sidebar-width))}}#main.svelte-scgxk5 #content main#main-content.svelte-scgxk5{padding:30px 15px 60px}#main.svelte-scgxk5 #content main#main-content .search-form.svelte-scgxk5{margin-bottom:40px}@media(min-width: 960px){#main.svelte-scgxk5 #content main#main-content .search-form.svelte-scgxk5{display:none}}#main.svelte-scgxk5 #content main#main-content .search-form.svelte-scgxk5 input{width:100%}@media(min-width: 768px){#main.svelte-scgxk5 #content main#main-content.svelte-scgxk5{padding:30px 30px 60px}}#main.svelte-scgxk5 #content main#main-content.logged-in.svelte-scgxk5{padding-top:calc(30px + var(--header-height))}@media(max-width: 767px){html.no-js #main.svelte-scgxk5 #content main#main-content.logged-in.svelte-scgxk5{padding-top:30px}}",
  map: `{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Navigation, Header, Toasts, SearchForm } from '$components';\\nimport { page } from '$app/stores';\\nimport NProgress from 'nprogress';\\nimport MicroModal from 'micromodal';\\nimport { hideAll } from 'tippy.js';\\nimport 'nprogress/nprogress.css';\\nimport 'modern-normalize/modern-normalize.css';\\nimport '../styles/main.scss';\\nimport { afterNavigate, beforeNavigate } from '$app/navigation';\\nimport { browser } from '$app/environment';\\nimport { X } from 'lucide-svelte';\\nNProgress.configure({ showSpinner: false });\\nif (browser) {\\n    MicroModal.init();\\n}\\nlet topbar;\\nlet scrollY;\\nlet headerOpacity = 0;\\n$: if (topbar) {\\n    headerOpacity = scrollY / topbar.offsetHeight < 1 ? scrollY / topbar.offsetHeight : 1;\\n}\\nexport let data;\\n$: hasError = $page.url.searchParams.get('error');\\n$: hasSuccess = $page.url.searchParams.get('success');\\n$: user = data.user;\\n$: userAllPlaylists = data.userAllPlaylists;\\nafterNavigate(() => {\\n    NProgress.done();\\n});\\nbeforeNavigate(() => {\\n    NProgress.start();\\n    hideAll();\\n});\\n<\/script>\\n\\n<svelte:window bind:scrollY />\\n\\n<svelte:head>\\n\\t<title>Studify{$page.data.title ? \` - \${$page.data.title}\` : ''}</title>\\n</svelte:head>\\n\\n{#if user}\\n\\t<a href=\\"#main-content\\" class=\\"skip-link\\">Skip to Content</a>\\n{/if}\\n\\n<Toasts />\\n\\n<div id=\\"main\\">\\n\\t{#if user}\\n\\t\\t<div id=\\"sidebar\\">\\n\\t\\t\\t<Navigation desktop={true} {userAllPlaylists} />\\n\\t\\t</div>\\n\\t{/if}\\n\\t<div id=\\"content\\">\\n\\t\\t{#if hasError || hasSuccess}\\n\\t\\t\\t<div class=\\"message\\" role=\\"status\\" class:error={hasError} class:success={hasSuccess}>\\n\\t\\t\\t\\t{hasError ?? hasSuccess}\\n\\t\\t\\t\\t<a href={$page.url.pathname} class=\\"close\\">\\n\\t\\t\\t\\t\\t<X aria-hidden focusable=\\"false\\" /> <span class=\\"visually-hidden\\">Close message</span>\\n\\t\\t\\t\\t</a>\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t\\t{#if user}\\n\\t\\t\\t<div id=\\"topbar\\" bind:this={topbar}>\\n\\t\\t\\t\\t<div\\n\\t\\t\\t\\t\\tclass=\\"topbar-bg\\"\\n\\t\\t\\t\\t\\tstyle:background-color={$page.data.color ? $page.data.color : 'var(--header-color)'}\\n\\t\\t\\t\\t\\tstyle:opacity={\`\${headerOpacity}\`}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t\\t<Header {userAllPlaylists} />\\n\\t\\t\\t</div>\\n\\t\\t{/if}\\n\\t\\t<main id=\\"main-content\\" class:logged-in={user}>\\n\\t\\t\\t{#if $page.url.pathname.startsWith('/search')}\\n\\t\\t\\t\\t<div class=\\"search-form\\">\\n\\t\\t\\t\\t\\t<SearchForm />\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t{/if}\\n\\t\\t\\t<slot />\\n\\t\\t</main>\\n\\t</div>\\n</div>\\n\\n<style lang=\\"scss\\">#main {\\n  display: flex;\\n}\\n@media (max-width: 767px) {\\n  :global(html.no-js) #main {\\n    display: block;\\n  }\\n}\\n#main #content {\\n  flex: 1;\\n}\\n#main #content .message {\\n  position: sticky;\\n  z-index: 9999;\\n  padding: 10px 20px;\\n  top: 0;\\n}\\n#main #content .message .close {\\n  position: absolute;\\n  right: 10px;\\n  top: 5px;\\n}\\n#main #content .message .close:focus {\\n  outline-color: #fff;\\n}\\n#main #content .message .close :global(svg) {\\n  stroke: var(--text-color);\\n  vertical-align: middle;\\n}\\n#main #content .message.error {\\n  background-color: var(--error);\\n}\\n#main #content .message.success {\\n  background-color: var(--accent-color);\\n}\\n#main #content #topbar {\\n  position: fixed;\\n  height: var(--header-height);\\n  padding: 0 15px;\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  z-index: 100;\\n}\\n:global(html.no-js) #main #content #topbar {\\n  position: sticky;\\n  top: 0;\\n  background-color: var(--header-color);\\n  height: auto;\\n  padding: 10px 20px;\\n}\\n@media (min-width: 768px) {\\n  :global(html.no-js) #main #content #topbar {\\n    position: fixed;\\n  }\\n}\\n#main #content #topbar .topbar-bg {\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 0 0);\\n}\\n@media (min-width: 768px) {\\n  #main #content #topbar {\\n    padding: 0 30px;\\n    width: calc(100% - var(--sidebar-width));\\n  }\\n}\\n#main #content main#main-content {\\n  padding: 30px 15px 60px;\\n}\\n#main #content main#main-content .search-form {\\n  margin-bottom: 40px;\\n}\\n@media (min-width: 960px) {\\n  #main #content main#main-content .search-form {\\n    display: none;\\n  }\\n}\\n#main #content main#main-content .search-form :global(input) {\\n  width: 100%;\\n}\\n@media (min-width: 768px) {\\n  #main #content main#main-content {\\n    padding: 30px 30px 60px;\\n  }\\n}\\n#main #content main#main-content.logged-in {\\n  padding-top: calc(30px + var(--header-height));\\n}\\n@media (max-width: 767px) {\\n  :global(html.no-js) #main #content main#main-content.logged-in {\\n    padding-top: 30px;\\n  }\\n}</style>\\n"],"names":[],"mappings":"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"}`
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let hasError;
  let hasSuccess;
  let user;
  let userAllPlaylists;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  NProgress.configure({ showSpinner: false });
  let topbar;
  let headerOpacity = 0;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  hasError = $page.url.searchParams.get("error");
  hasSuccess = $page.url.searchParams.get("success");
  user = data.user;
  userAllPlaylists = data.userAllPlaylists;
  $$unsubscribe_page();
  return ` ${$$result.head += `<!-- HEAD_svelte-nwaogk_START -->${$$result.title = `<title>Studify${escape($page.data.title ? ` - ${$page.data.title}` : "")}</title>`, ""}<!-- HEAD_svelte-nwaogk_END -->`, ""} ${user ? `<a href="#main-content" class="skip-link" data-svelte-h="svelte-fw6gqu">Skip to Content</a>` : ``} ${validate_component(Toasts, "Toasts").$$render($$result, {}, {}, {})} <div id="main" class="svelte-scgxk5">${user ? `<div id="sidebar">${validate_component(Navigation, "Navigation").$$render($$result, { desktop: true, userAllPlaylists }, {}, {})}</div>` : ``} <div id="content" class="svelte-scgxk5">${hasError || hasSuccess ? `<div class="${[
    "message svelte-scgxk5",
    (hasError ? "error" : "") + " " + (hasSuccess ? "success" : "")
  ].join(" ").trim()}" role="status">${escape(hasError ?? hasSuccess)} <a${add_attribute("href", $page.url.pathname, 0)} class="close svelte-scgxk5">${validate_component(X, "X").$$render($$result, { "aria-hidden": true, focusable: "false" }, {}, {})} <span class="visually-hidden" data-svelte-h="svelte-uh2elu">Close message</span></a></div>` : ``} ${user ? `<div id="topbar" class="svelte-scgxk5"${add_attribute("this", topbar, 0)}><div class="topbar-bg svelte-scgxk5"${add_styles({
    "background-color": $page.data.color ? $page.data.color : "var(--header-color)",
    "opacity": `${headerOpacity}`
  })}></div> ${validate_component(Header, "Header").$$render($$result, { userAllPlaylists }, {}, {})}</div>` : ``} <main id="main-content" class="${["svelte-scgxk5", user ? "logged-in" : ""].join(" ").trim()}">${$page.url.pathname.startsWith("/search") ? `<div class="search-form svelte-scgxk5">${validate_component(SearchForm, "SearchForm").$$render($$result, {}, {}, {})}</div>` : ``} ${slots.default ? slots.default({}) : ``}</main></div> </div>`;
});
export {
  Layout as default
};
