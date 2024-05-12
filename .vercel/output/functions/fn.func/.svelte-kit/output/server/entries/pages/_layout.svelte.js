import { c as spread_props, b as pop, d as slot, e as sanitize_props, p as push, f as ensure_array_like, h as head, g as attr, i as add_styles, j as stringify, k as store_get, l as escape_html, u as unsubscribe_stores, m as bind_props, n as rest_props, o as spread_attributes } from "../../chunks/index3.js";
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
function Chevron_down($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [["path", { "d": "m6 9 6 6 6-6" }]];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "chevron-down" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function Chevron_left($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [["path", { "d": "m15 18-6-6 6-6" }]];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "chevron-left" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function External_link($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
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
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "external-link" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function Home($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ],
    [
      "polyline",
      { "points": "9 22 9 12 15 12 15 22" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "home" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function List_music($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
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
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "list-music" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function Menu($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
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
      { "x1": "4", "x2": "20", "y1": "6", "y2": "6" }
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
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "menu" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function Search($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "11", "cy": "11", "r": "8" }
    ],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "search" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<!--[-->`;
        slot($$payload2, $$props.children, {});
        $$payload2.out += `<!--]-->`;
      }
    }
  ]));
  $$payload.out += `<!--]-->`;
  pop();
}
function Navigation($$payload, $$props) {
  push();
  var $$store_subs;
  let isOpen;
  let desktop = $$props["desktop"];
  let userAllPlaylists = $$props["userAllPlaylists"];
  let isMobileMenuOpen = false;
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
  isOpen = desktop || isMobileMenuOpen;
  const each_array = ensure_array_like(menuItems);
  head($$payload, ($$payload2) => {
    $$payload2.out += `<!--[-->`;
    if (!desktop && isMobileMenuOpen) {
      $$payload2.out += `<style>body {
				overflow: hidden;
			}</style>`;
      $$payload2.out += "<!--]-->";
    } else {
      $$payload2.out += "<!--]!-->";
    }
  });
  $$payload.out += `<div${attr(
    "class",
    `nav-content svelte-sbq14w ${stringify([
      desktop ? "desktop" : "",
      !desktop ? "mobile" : ""
    ].filter(Boolean).join(" "))}`,
    false
  )}><!--[-->`;
  if (!desktop && isMobileMenuOpen) {
    $$payload.out += `<div class="overlay svelte-sbq14w"></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <nav aria-label="Main"><!--[-->`;
  if (!desktop) {
    $$payload.out += `<!--[-->`;
    IconButton($$payload, {
      icon: Menu,
      label: "Open menu",
      "aria-expanded": isOpen,
      class: "menu-button"
    });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <div${add_styles({ visibility: isOpen ? "visible" : "hidden" })}${attr("class", `nav-content-inner svelte-sbq14w ${stringify([!isOpen ? "is-hidden" : ""].filter(Boolean).join(" "))}`, false)}><!--[-->`;
  if (!desktop) {
    $$payload.out += `<!--[-->`;
    IconButton($$payload, {
      icon: X,
      label: "Close Menu",
      class: "close-menu-button"
    });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <div class="logo-and-menu svelte-sbq14w"><h1>Studify</h1> <ul class="svelte-sbq14w"><!--[-->`;
  for (let index = 0; index < each_array.length; index++) {
    const item = each_array[index];
    $$payload.out += "<!--[-->";
    const iconProps = {
      focusable: "false",
      "aria-hidden": true,
      color: "var(--text-color)",
      size: 26,
      strokeWidth: 2
    };
    $$payload.out += `<li${attr(
      "class",
      `svelte-sbq14w ${stringify([
        item.path === store_get($$store_subs ??= {}, "$page", page).url.pathname ? "active" : ""
      ].filter(Boolean).join(" "))}`,
      false
    )}><!--[-->`;
    if (menuItems.length === index + 1) {
      $$payload.out += `<a${attr("href", item.path, false)} class="svelte-sbq14w"><!--[-->`;
      item.icon?.($$payload, spread_props([iconProps]));
      $$payload.out += `<!--]--> ${escape_html(item.label)}</a>`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<a${attr("href", item.path, false)} class="svelte-sbq14w"><!--[-->`;
      item.icon?.($$payload, spread_props([iconProps]));
      $$payload.out += `<!--]--> ${escape_html(item.label)}</a>`;
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</li>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</ul></div> <!--[-->`;
  if (userAllPlaylists && userAllPlaylists.length > 0) {
    const each_array_1 = ensure_array_like(userAllPlaylists);
    $$payload.out += `<div class="all-playlists svelte-sbq14w"><ul class="svelte-sbq14w"><!--[-->`;
    for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
      const playlist = each_array_1[$$index_1];
      $$payload.out += "<!--[-->";
      $$payload.out += `<li${attr(
        "class",
        `svelte-sbq14w ${stringify([
          store_get($$store_subs ??= {}, "$page", page).url.pathname === `/playlist/${playlist.id}` ? "active" : ""
        ].filter(Boolean).join(" "))}`,
        false
      )}><a${attr("href", `/playlist/${stringify(playlist.id)}`, false)} class="svelte-sbq14w">${escape_html(playlist.name)}</a></li>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</ul></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div></nav></div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { desktop, userAllPlaylists });
  pop();
}
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  let user;
  let userAllPlaylists = $$props["userAllPlaylists"];
  user = store_get($$store_subs ??= {}, "$page", page).data.user;
  $$payload.out += `<div class="content svelte-1c1gesq"><div class="left svelte-1c1gesq"><!--[-->`;
  {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  HeaderNav($$payload);
  $$payload.out += `<!--]--> <!--[-->`;
  if (store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/search")) {
    $$payload.out += `<div class="search-form svelte-1c1gesq"><!--[-->`;
    SearchForm($$payload);
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += `</div> <div class="right"><div id="profile-button"><button class="profile-button svelte-1c1gesq"><!--[-->`;
  if (user?.images && user.images.length > 0) {
    $$payload.out += `<img${attr("src", user.images[0].url, false)} alt="" class="svelte-1c1gesq">`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` ${escape_html(user?.display_name)} <span class="visually-hidden">Profile menu</span> <!--[-->`;
  Chevron_down($$payload, { class: "profile-arrow", size: 22 });
  $$payload.out += `<!--]--></button></div> <div id="profile-menu" style="display: none;" class="svelte-1c1gesq"><div class="profile-menu-content svelte-1c1gesq"><ul class="svelte-1c1gesq"><li class="svelte-1c1gesq"><a${attr("href", user?.external_urls.spotify, false)} target="_blank" rel="noopener noreferrer" class="svelte-1c1gesq">View on Spotify <!--[-->`;
  External_link($$payload, {
    focusable: "false",
    "aria-hidden": true,
    size: 20
  });
  $$payload.out += `<!--]--></a></li> <li class="svelte-1c1gesq"><a href="/profile" class="svelte-1c1gesq">View Profile</a></li> <li class="svelte-1c1gesq"><!--[-->`;
  LogoutButton($$payload);
  $$payload.out += `<!--]--></li></ul></div></div></div></div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { userAllPlaylists });
  pop();
}
function IconButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["getButton", "icon", "label"]);
  push();
  let icon = $$props["icon"];
  let label = $$props["label"];
  let button;
  function getButton() {
    return button;
  }
  $$payload.out += `<button${spread_attributes([$$restProps], true, true, "svelte-1m8k0ey")}><!--[-->`;
  icon?.($$payload, {
    color: "var(--text-color)",
    "aria-hidden": "true",
    focusable: "false"
  });
  $$payload.out += `<!--]--> <span class="visually-hidden">${escape_html(label)}</span></button>`;
  bind_props($$props, { icon, label, getButton });
  pop();
}
function createToastsStore() {
  const { subscribe, update } = writable([]);
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
    subscribe,
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
function Toasts($$payload, $$props) {
  push();
  var $$store_subs;
  $$payload.out += `<!--[-->`;
  if (store_get($$store_subs ??= {}, "$toasts", toasts).length > 0) {
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$toasts", toasts));
    $$payload.out += `<div class="toasts svelte-qupmqz"><!--[-->`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const toast = each_array[$$index];
      $$payload.out += "<!--[-->";
      $$payload.out += `<div${attr("class", `toast ${stringify(toast.type)} svelte-qupmqz`, false)}><div class="content" role="status">${escape_html(toast.message)}</div> <button class="close svelte-qupmqz" aria-label="Close toast"><!--[-->`;
      X($$payload, {
        focusable: "false",
        "aria-hidden": true,
        color: "var(--text-color)"
      });
      $$payload.out += `<!--]--></button></div>`;
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
function SearchForm($$payload, $$props) {
  push();
  var $$store_subs;
  let searchQuery;
  searchQuery = store_get($$store_subs ??= {}, "$page", page).params.query || "";
  $$payload.out += `<form action="/search" method="GET" role="search"><div class="search-input-wrapper svelte-bvut78"><!--[-->`;
  Search($$payload, { "aria-hidden": true, focusable: "false" });
  $$payload.out += `<!--]--> <input${attr("value", searchQuery, false)} name="q" class="search-input svelte-bvut78" type="search" size="30" placeholder="Search for albums, artists or playlists." aria-label="Search for albums, artists or playlists."></div></form>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  pop();
}
function HeaderNav($$payload, $$props) {
  push();
  let backStack = [];
  let forwardStack = [];
  $$payload.out += `<!--[-->`;
  IconButton($$payload, {
    label: "Go Back",
    disabled: backStack.length === 0,
    icon: Chevron_left,
    class: "nav-button"
  });
  $$payload.out += `<!--]--> <!--[-->`;
  IconButton($$payload, {
    label: "Go Forward",
    disabled: forwardStack.length === 0,
    icon: Chevron_right,
    class: "nav-button"
  });
  $$payload.out += `<!--]-->`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  var $$store_subs;
  let hasError, hasSuccess, user, userAllPlaylists;
  NProgress.configure({ showSpinner: false });
  let headerOpacity = 0;
  let data = $$props["data"];
  hasError = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("error");
  hasSuccess = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("success");
  user = data.user;
  userAllPlaylists = data.userAllPlaylists;
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Studify${escape_html(store_get($$store_subs ??= {}, "$page", page).data.title ? ` - ${store_get($$store_subs ??= {}, "$page", page).data.title}` : "")}</title>`;
  });
  $$payload.out += `<!--[-->`;
  if (user) {
    $$payload.out += `<a href="#main-content" class="skip-link">Skip to Content</a>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  Toasts($$payload);
  $$payload.out += `<!--]--> <div id="main" class="svelte-scgxk5"><!--[-->`;
  if (user) {
    $$payload.out += `<div id="sidebar"><!--[-->`;
    Navigation($$payload, { desktop: true, userAllPlaylists });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <div id="content" class="svelte-scgxk5"><!--[-->`;
  if (hasError || hasSuccess) {
    $$payload.out += `<div${attr(
      "class",
      `message svelte-scgxk5 ${stringify([
        hasError ? "error" : "",
        hasSuccess ? "success" : ""
      ].filter(Boolean).join(" "))}`,
      false
    )} role="status">${escape_html(hasError ?? hasSuccess)} <a${attr("href", store_get($$store_subs ??= {}, "$page", page).url.pathname, false)} class="close svelte-scgxk5"><!--[-->`;
    X($$payload, { "aria-hidden": true, focusable: "false" });
    $$payload.out += `<!--]--> <span class="visually-hidden">Close message</span></a></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  if (user) {
    $$payload.out += `<div id="topbar" class="svelte-scgxk5"><div${add_styles({
      "background-color": store_get($$store_subs ??= {}, "$page", page).data.color ? store_get($$store_subs ??= {}, "$page", page).data.color : "var(--header-color)",
      opacity: `${headerOpacity}`
    })} class="topbar-bg svelte-scgxk5"></div> <!--[-->`;
    Header($$payload, { userAllPlaylists });
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <main id="main-content"${attr("class", `svelte-scgxk5 ${stringify([user ? "logged-in" : ""].filter(Boolean).join(" "))}`, false)}><!--[-->`;
  if (store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/search")) {
    $$payload.out += `<div class="search-form svelte-scgxk5"><!--[-->`;
    SearchForm($$payload);
    $$payload.out += `<!--]--></div>`;
    $$payload.out += "<!--]-->";
  } else {
    $$payload.out += "<!--]!-->";
  }
  $$payload.out += ` <!--[-->`;
  slot($$payload, $$props.children, {});
  $$payload.out += `<!--]--></main></div></div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { data });
  pop();
}
export {
  _layout as default
};
