import { c as spread_props, b as pop, d as slot, e as sanitize_props, p as push, v as value_or_fallback, f as ensure_array_like, g as attr, j as stringify, l as escape_html, k as store_get, u as unsubscribe_stores, m as bind_props } from "./index3.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import { p as page } from "./stores.js";
import "./index.js";
import "devalue";
import "uniqid";
import { I as Icon } from "./Icon.js";
async function tick() {
}
function Clock_8($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["polyline", { "points": "12 6 12 12 8 14" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "clock-8" },
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
function List_plus($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M11 12H3" }],
    ["path", { "d": "M16 6H3" }],
    ["path", { "d": "M16 18H3" }],
    ["path", { "d": "M18 9v6" }],
    ["path", { "d": "M21 12h-6" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "list-plus" },
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
function List_x($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    ["path", { "d": "M11 12H3" }],
    ["path", { "d": "M16 6H3" }],
    ["path", { "d": "M16 18H3" }],
    ["path", { "d": "m19 10-4 4" }],
    ["path", { "d": "m15 10 4 4" }]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "list-x" },
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
function Play($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "polygon",
      { "points": "6 3 20 12 6 21 6 3" }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "play" },
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
function msToTime(duration) {
  const seconds = Math.floor(duration / 1e3 % 60);
  const minutes = Math.floor(duration / (1e3 * 60) % 60);
  const hours = Math.floor(duration / (1e3 * 60 * 60) % 24);
  const paddedMinutes = minutes === 0 ? "00" : minutes;
  const paddedSeconds = seconds < 10 ? "0" + seconds : seconds;
  return `${hours > 0 ? `${hours}:` : ""}${paddedMinutes}:${paddedSeconds}`;
}
function navigate(grid, currentCell, totalItems) {
  return {
    down: () => {
      if (currentCell === null) {
        return [2, 1, 1];
      } else if (currentCell[0] < totalItems + 1) {
        return [currentCell[0] + 1, currentCell[1], 1];
      }
    },
    up: () => {
      if (currentCell === null) {
        return [2, 1, 1];
      } else if (currentCell[0] > 2) {
        return [currentCell[0] - 1, currentCell[1], 1];
      }
    },
    right: () => {
      if (currentCell === null) {
        return [2, 1, 1];
      }
    },
    left: () => {
      if (currentCell === null) {
        return [2, 1, 1];
      }
    },
    lastRow: () => {
      return [totalItems + 1, currentCell?.[1] || 1, 1];
    },
    firstRow: () => {
      return [2, currentCell?.[1] || 1, 1];
    },
    firstCell: () => {
      return [2, 1, 1];
    },
    lastCell: () => {
      return [totalItems + 1, 4, 1];
    },
    firstCellInCurrentRow: () => {
      return currentCell ? [currentCell[0], 1, 1] : [2, 1, 1];
    },
    lastCellInCurrentRow: () => {
      return currentCell ? [currentCell[0], 4, 1] : [2, 4, 1];
    }
  };
}
const playingGif = "data:image/gif;base64,R0lGODlhGAAYAPABAB25VP///yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDYuMC1jMDAyIDc5LjE2NDM1MiwgMjAyMC8wMS8zMC0xNTo1MDozOCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNDRDUyN0E0OTUwRDExRUE4NDY1QkYwRjJDNTZBRkY4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNDRDUyN0E1OTUwRDExRUE4NDY1QkYwRjJDNTZBRkY4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0NENTI3QTI5NTBEMTFFQTg0NjVCRjBGMkM1NkFGRjgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0NENTI3QTM5NTBEMTFFQTg0NjVCRjBGMkM1NkFGRjgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++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";
function TrackList($$payload, $$props) {
  push();
  var $$store_subs;
  let getSelectableTabIndex;
  let tracks = $$props["tracks"];
  let isOwner = value_or_fallback($$props["isOwner"], () => false);
  let userPlaylists = $$props["userPlaylists"];
  let title = $$props["title"];
  let total = $$props["total"];
  let currentlyPlaying = null;
  let isPaused = false;
  let isAddingToPlaylist = [];
  let isRemovingFromPlaylist = [];
  let prevTrackLength = tracks.length;
  let gridRef = null;
  let currentPosition = null;
  {
    if (prevTrackLength < tracks.length) {
      currentPosition = [prevTrackLength + 2, 1, 1];
    }
    prevTrackLength = tracks.length;
  }
  navigate(gridRef, currentPosition, tracks.length);
  getSelectableTabIndex = (row, column, index) => {
    return void 0;
  };
  {
    const focusCurrentSelectable = async () => {
      if (currentPosition && gridRef) {
        await tick();
        const column = gridRef.querySelector(`[data-row="${currentPosition[0]}"][data-column="${currentPosition[1]}"]`);
        const selectables = column?.querySelectorAll("a:not(.not-selectable),button:not(.not-selectable)");
        console.log(selectables);
        if (selectables) {
          selectables[currentPosition[2] - 1].focus();
        }
      }
    };
    focusCurrentSelectable();
  }
  const each_array = ensure_array_like(tracks);
  $$payload.out += `<div class="tracks svelte-boz81k" role="grid"${attr("aria-label", title, false)}${attr("aria-rowcount", total + 1, false)}${attr("aria-colcount", 5, false)}${attr("tabindex", void 0, false)}><div class="row header svelte-boz81k" role="row"${attr("aria-rowindex", 1, false)}><div class="number-column svelte-boz81k" role="columnheader"${attr("aria-colindex", 1, false)}${attr("data-row", 1, false)}><span class="number svelte-boz81k">#</span></div> <div class="info-column svelte-boz81k" role="columnheader"${attr("aria-colindex", 2, false)}${attr("data-row", 1, false)}><span class="track-title svelte-boz81k">Title</span></div> <div class="duration-column svelte-boz81k" role="columnheader"${attr("aria-colindex", 3, false)}${attr("data-row", 1, false)}><!--[-->`;
  Clock_8($$payload, {
    "aria-hidden": true,
    focusable: "false",
    color: "var(--light-gray)"
  });
  $$payload.out += `<!--]--></div> <div${attr("class", `actions-column svelte-boz81k ${stringify([isOwner ? "is-owner" : ""].filter(Boolean).join(" "))}`, false)} role="columnheader"${attr("aria-colindex", 4, false)}${attr("data-row", 1, false)}></div></div> <!--[-->`;
  for (let index = 0; index < each_array.length; index++) {
    const track = each_array[index];
    $$payload.out += "<!--[-->";
    const each_array_1 = ensure_array_like(track.artists);
    $$payload.out += `<div${attr(
      "class",
      `row svelte-boz81k ${stringify([
        currentlyPlaying === track.id ? "is-current" : ""
      ].filter(Boolean).join(" "))}`,
      false
    )} role="row"${attr("aria-rowindex", index + 2, false)}${attr("aria-selected", currentPosition && currentPosition[0] === index + 2 ? "true" : "false", false)}><div class="number-column svelte-boz81k" role="gridcell"${attr("aria-colindex", 1, false)}${attr("data-column", 1, false)}${attr("data-row", index + 2, false)}><!--[-->`;
    if (currentlyPlaying === track.id && !isPaused) {
      $$payload.out += `<img class="playing-gif svelte-boz81k"${attr("src", playingGif, false)} alt="">`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<span class="number svelte-boz81k">${escape_html(index + 1)}</span>`;
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += ` <div class="player svelte-boz81k"><!--[-->`;
    Player($$payload, {
      tabIndex: getSelectableTabIndex(index + 2, 1, 1),
      track
    });
    $$payload.out += `<!--]--></div></div> <div class="info-column svelte-boz81k" role="gridcell"${attr("aria-colindex", 2, false)}${attr("data-column", 2, false)}${attr("data-row", index + 2, false)}><div class="track-title svelte-boz81k"><h4 class="svelte-boz81k">${escape_html(track.name)}</h4> <!--[-->`;
    if (track.explicit) {
      $$payload.out += `<span class="explicit svelte-boz81k">Explicit</span>`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</div> <p class="artists svelte-boz81k"><!--[-->`;
    for (let artistIndex = 0; artistIndex < each_array_1.length; artistIndex++) {
      const artist = each_array_1[artistIndex];
      $$payload.out += "<!--[-->";
      $$payload.out += `<a${attr("href", `/artist/${stringify(artist.id)}`, false)}${attr("tabindex", getSelectableTabIndex(index + 2, 2, artistIndex + 1), false)} class="svelte-boz81k">${escape_html(artist.name)}</a><!--[-->`;
      if (artistIndex < track.artists.length - 1) {
        $$payload.out += `${escape_html(", ")}`;
        $$payload.out += "<!--]-->";
      } else {
        $$payload.out += "<!--]!-->";
      }
      $$payload.out += "<!--]-->";
    }
    $$payload.out += "<!--]-->";
    $$payload.out += `</p></div> <div class="duration-column svelte-boz81k" role="gridcell"${attr("aria-colindex", 3, false)}${attr("data-column", 3, false)}${attr("data-row", index + 2, false)}><span class="duration svelte-boz81k">${escape_html(msToTime(track.duration_ms))}</span></div> <div${attr("class", `actions-column svelte-boz81k ${stringify([isOwner ? "is-owner" : ""].filter(Boolean).join(" "))}`, false)} role="gridcell"${attr("aria-colindex", 4, false)}${attr("data-column", 4, false)}${attr("data-row", index + 2, false)}><!--[-->`;
    if (isOwner) {
      $$payload.out += `<form method="POST"${attr("action", `/playlist/${stringify(store_get($$store_subs ??= {}, "$page", page).params.id)}?/removeItem`, false)}><input hidden name="track"${attr("value", track.id, false)}> <button${attr("tabindex", getSelectableTabIndex(index + 2, 4, 1), false)} type="submit"${attr("title", `Remove ${stringify(track.name)} from playlist`, false)}${attr("aria-label", `Remove ${stringify(track.name)} from playlist`, false)} class="remove-pl-button svelte-boz81k"${attr("disabled", isRemovingFromPlaylist.includes(track.id), true)}><!--[-->`;
      List_x($$payload, { "aria-hidden": true, focusable: "false" });
      $$payload.out += `<!--]--></button></form>`;
      $$payload.out += "<!--]-->";
    } else {
      $$payload.out += `<button${attr("tabindex", getSelectableTabIndex(index + 2, 4, 1), false)}${attr("title", `Add ${stringify(track.name)} to a playlist`, false)}${attr("aria-label", `Add ${stringify(track.name)} to a playlist`, false)} class="add-pl-button svelte-boz81k"${attr("disabled", !userPlaylists, true)}><!--[-->`;
      List_plus($$payload, { "aria-hidden": true, focusable: "false" });
      $$payload.out += `<!--]--></button> <!--[-->`;
      if (userPlaylists) {
        const each_array_2 = ensure_array_like(userPlaylists);
        $$payload.out += `<div class="playlists-menu svelte-boz81k"${attr("id", `${stringify(track.id)}-playlists-menu`, false)} style="display: none;"><div class="playlists-menu-content svelte-boz81k"><form method="POST"${attr("action", `/playlist?/addItem&redirect=${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname)}`, false)} class="svelte-boz81k"><input hidden${attr("value", track.id, false)} name="track"> <div class="field svelte-boz81k"><select aria-label="Playlist" name="playlist" class="svelte-boz81k"><!--[-->`;
        for (let $$index_1 = 0; $$index_1 < each_array_2.length; $$index_1++) {
          const playlist = each_array_2[$$index_1];
          $$payload.out += "<!--[-->";
          $$payload.out += `<option${attr("value", playlist.id, false)}>${escape_html(playlist.name)}</option>`;
          $$payload.out += "<!--]-->";
        }
        $$payload.out += "<!--]-->";
        $$payload.out += `</select></div> <div class="submit-button svelte-boz81k"><!--[-->`;
        Button($$payload, {
          disabled: isAddingToPlaylist.includes(track.id),
          element: "button",
          type: "submit",
          className: "not-selectable",
          children: ($$payload2, $$slotProps) => {
            $$payload2.out += `Add <span class="visually-hidden">${escape_html(track.name)} to selected playlist.</span>`;
          }
        });
        $$payload.out += `<!--]--></div></form></div></div>`;
        $$payload.out += "<!--]-->";
      } else {
        $$payload.out += "<!--]!-->";
      }
      $$payload.out += "<!--]!-->";
    }
    $$payload.out += `</div></div>`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += "<!--]-->";
  $$payload.out += `</div>`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, {
    tracks,
    isOwner,
    userPlaylists,
    title,
    total
  });
  pop();
}
function Player($$payload, $$props) {
  push();
  let track = $$props["track"];
  let tabIndex = value_or_fallback($$props["tabIndex"], () => void 0);
  $$payload.out += `<div class="player svelte-m4cq80"><audio controls${attr("src", track.preview_url, false)} preload="none" class="svelte-m4cq80"></audio> <button${attr("tabindex", tabIndex, false)}${attr("aria-label", `Play ${track.name}`, false)} class="svelte-m4cq80"><!--[-->`;
  {
    $$payload.out += `<!--[-->`;
    Play($$payload, {
      color: "var(--text-color)",
      focusable: "false",
      "aria-hidden": true
    });
    $$payload.out += `<!--]-->`;
    $$payload.out += "<!--]-->";
  }
  $$payload.out += `</button></div>`;
  bind_props($$props, { track, tabIndex });
  pop();
}
export {
  TrackList as T
};
