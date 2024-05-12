import { k as set_current_component, r as run_all, l as current_component, c as create_ssr_component, v as validate_component, a as subscribe, d as add_attribute, e as each, f as escape, o as createEventDispatcher } from "./ssr.js";
import "./HeaderNav.svelte_svelte_type_style_lang.js";
import { B as Button } from "./Button.js";
import { p as page } from "./stores.js";
import "./index.js";
import "devalue";
import "uniqid";
import { I as Icon } from "./Icon.js";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length)
      binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const Clock_8 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["polyline", { "points": "12 6 12 12 8 14" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "clock-8" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const List_plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M11 12H3" }],
    ["path", { "d": "M16 6H3" }],
    ["path", { "d": "M16 18H3" }],
    ["path", { "d": "M18 9v6" }],
    ["path", { "d": "M21 12h-6" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "list-plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const List_x = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    ["path", { "d": "M11 12H3" }],
    ["path", { "d": "M16 6H3" }],
    ["path", { "d": "M16 18H3" }],
    ["path", { "d": "m19 10-4 4" }],
    ["path", { "d": "m15 10 4 4" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "list-x" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Play = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["polygon", { "points": "6 3 20 12 6 21 6 3" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "play" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
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
const css$1 = {
  code: ".tracks.svelte-boz81k.svelte-boz81k:focus{outline:2px solid var(--accent-color)}.tracks.svelte-boz81k .row.svelte-boz81k{display:flex;align-items:center;padding:7px 5px;border-radius:4px}.tracks.svelte-boz81k .row[aria-selected=true].svelte-boz81k{background-color:rgba(255, 255, 255, 0.3);outline:1px solid #fff}@media(max-width: 767px){.no-js .tracks.svelte-boz81k .row.svelte-boz81k{flex-direction:column;background-color:rgba(255, 255, 255, 0.03);padding:20px;margin-bottom:20px}}.tracks.svelte-boz81k .row.is-current .info-column .track-title h4.svelte-boz81k,.tracks.svelte-boz81k .row.is-current .number-column span.number.svelte-boz81k{color:var(--accent-color)}.tracks.svelte-boz81k .row.header.svelte-boz81k{border-bottom:1px solid var(--border);border-radius:0px;padding:5px;margin-bottom:15px}@media(max-width: 767px){.no-js .tracks.svelte-boz81k .row.header.svelte-boz81k{display:none}}.tracks.svelte-boz81k .row.header .track-title.svelte-boz81k{color:var(--light-gray);font-size:0.75rem;text-transform:uppercase}.tracks.svelte-boz81k .row.header .duration-column.svelte-boz81k svg{width:16px;height:16px}.tracks.svelte-boz81k .row.svelte-boz81k:not(.header):not([aria-selected=true]):hover{background-color:rgba(255, 255, 255, 0.05)}.tracks.svelte-boz81k .row.svelte-boz81k:not(.header):hover,.tracks.svelte-boz81k .row:not(.header)[aria-selected=true].svelte-boz81k{background-color:rgba(255, 255, 255, 0.05)}.tracks.svelte-boz81k .row:not(.header):hover .number-column .player.svelte-boz81k,.tracks.svelte-boz81k .row:not(.header)[aria-selected=true] .number-column .player.svelte-boz81k{display:block}.tracks.svelte-boz81k .row:not(.header):hover .number-column span.number.svelte-boz81k,.tracks.svelte-boz81k .row:not(.header)[aria-selected=true] .number-column span.number.svelte-boz81k{display:none}.no-js .tracks.svelte-boz81k .row:not(.header):hover .number-column span.number.svelte-boz81k,.no-js .tracks.svelte-boz81k .row:not(.header)[aria-selected=true] .number-column span.number.svelte-boz81k{display:block}.tracks.svelte-boz81k .row:not(.header):hover .number-column .playing-gif.svelte-boz81k,.tracks.svelte-boz81k .row:not(.header)[aria-selected=true] .number-column .playing-gif.svelte-boz81k{display:none}.tracks.svelte-boz81k .row .number-column.svelte-boz81k{width:30px;display:flex;justify-content:flex-end;margin-right:15px}.tracks.svelte-boz81k .row .number-column span.number.svelte-boz81k{color:var(--light-gray);font-size:0.875rem}.tracks.svelte-boz81k .row .number-column .playing-gif.svelte-boz81k{width:12px}.tracks.svelte-boz81k .row .number-column .player.svelte-boz81k{display:none}html.no-js .tracks.svelte-boz81k .row .number-column.svelte-boz81k{width:200px;display:flex;align-items:center}@media(max-width: 767px){html.no-js .tracks.svelte-boz81k .row .number-column.svelte-boz81k{width:100%;margin-right:0;margin-bottom:15px}}html.no-js .tracks.svelte-boz81k .row .number-column .player.svelte-boz81k{display:block;width:100%;margin-left:10px}.tracks.svelte-boz81k .row .info-column.svelte-boz81k{flex:1}@media(max-width: 767px){.no-js .tracks.svelte-boz81k .row .info-column.svelte-boz81k{width:100%}}.tracks.svelte-boz81k .row .info-column .track-title.svelte-boz81k{display:flex;align-items:center}.tracks.svelte-boz81k .row .info-column .track-title h4.svelte-boz81k{margin:0;font-size:0.9375rem;font-weight:400;line-height:1}.tracks.svelte-boz81k .row .info-column .track-title span.explicit.svelte-boz81k{text-transform:uppercase;font-size:0.5rem;margin-left:10px;border:1px solid;padding:2px 3px;border-radius:2px;line-height:0.625rem;color:var(--light-gray)}.tracks.svelte-boz81k .row .info-column .artists.svelte-boz81k{color:var(--light-gray);font-size:0.8125rem;margin:7px 0 0;line-height:1}.tracks.svelte-boz81k .row .info-column .artists a.svelte-boz81k{color:inherit;text-decoration:none}.tracks.svelte-boz81k .row .duration-column span.duration.svelte-boz81k{color:var(--light-gray);font-size:0.875rem}@media(max-width: 767px){.no-js .tracks.svelte-boz81k .row .duration-column.svelte-boz81k{width:100%;margin:10px 0}}.tracks.svelte-boz81k .row .actions-column.svelte-boz81k{width:30px;margin-left:15px}html.no-js .tracks.svelte-boz81k .row .actions-column.svelte-boz81k:not(.is-owner){width:200px}@media(max-width: 767px){html.no-js .tracks.svelte-boz81k .row .actions-column.svelte-boz81k:not(.is-owner){margin-left:0;width:100%}}html.no-js .tracks.svelte-boz81k .row .actions-column .add-pl-button.svelte-boz81k{display:none}html.no-js .tracks.svelte-boz81k .row .actions-column .playlists-menu.svelte-boz81k{display:block !important}.tracks.svelte-boz81k .row .actions-column .add-pl-button.svelte-boz81k,.tracks.svelte-boz81k .row .actions-column .remove-pl-button.svelte-boz81k{background:none;border:none;padding:5px;cursor:pointer}.tracks.svelte-boz81k .row .actions-column .add-pl-button.svelte-boz81k svg,.tracks.svelte-boz81k .row .actions-column .remove-pl-button.svelte-boz81k svg{stroke:var(--text-color);vertical-align:middle;width:22px;height:22px}.tracks.svelte-boz81k .row .actions-column .add-pl-button.svelte-boz81k:disabled,.tracks.svelte-boz81k .row .actions-column .remove-pl-button.svelte-boz81k:disabled{opacity:0.8;cursor:not-allowed}.tracks.svelte-boz81k .row .actions-column .playlists-menu-content.svelte-boz81k{padding:15px}html.no-js .tracks.svelte-boz81k .row .actions-column .playlists-menu-content.svelte-boz81k{padding:0}html.no-js .tracks.svelte-boz81k .row .actions-column .playlists-menu-content form.svelte-boz81k{display:flex;align-items:center}html.no-js .tracks.svelte-boz81k .row .actions-column .playlists-menu-content .field.svelte-boz81k{flex:1}.tracks.svelte-boz81k .row .actions-column .playlists-menu-content .field select.svelte-boz81k{width:100%;height:35px;border-radius:4px}.tracks.svelte-boz81k .row .actions-column .playlists-menu-content .submit-button.svelte-boz81k{margin-top:10px;text-align:right}html.no-js .tracks.svelte-boz81k .row .actions-column .playlists-menu-content .submit-button.svelte-boz81k{margin-top:0;margin-left:10px}",
  map: `{"version":3,"file":"TrackList.svelte","sources":["TrackList.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Button, Player } from '$components';\\nimport { getGridPosition, gridNavigation, msToTime } from '$helpers';\\nimport { Clock8, ListPlus, ListX } from 'lucide-svelte';\\nimport playingGif from '$assets/playing.gif';\\nimport { tippy } from '$actions';\\nimport { page } from '$app/stores';\\nimport { enhance } from '$app/forms';\\nimport { toasts } from '$stores';\\nimport { hideAll } from 'tippy.js';\\nimport { invalidate } from '$app/navigation';\\nimport { onMount, tick } from 'svelte';\\nexport let tracks;\\nexport let isOwner = false;\\nexport let userPlaylists;\\nexport let title;\\nexport let total;\\nlet currentlyPlaying = null;\\nlet isPaused = false;\\nlet isAddingToPlaylist = [];\\nlet isRemovingFromPlaylist = [];\\nlet js = false;\\nlet prevTrackLength = tracks.length;\\nlet gridRef = null;\\nlet currentPosition = null;\\n$: gridNavigate = gridNavigation(gridRef, currentPosition, tracks.length);\\n$: {\\n    // if more tracks are loaded, focus back on tracks\\n    if (prevTrackLength < tracks.length) {\\n        // focus on first item in the new page\\n        currentPosition = [prevTrackLength + 2, 1, 1];\\n    }\\n    prevTrackLength = tracks.length;\\n}\\nfunction handleKeyDown(e) {\\n    const newPosition = getGridPosition(e, gridNavigate, currentPosition);\\n    if (newPosition)\\n        currentPosition = newPosition;\\n}\\n$: getSelectableTabIndex = (row, column, index) => {\\n    if (!js)\\n        return undefined;\\n    if (currentPosition &&\\n        currentPosition[0] === row &&\\n        currentPosition[1] === column &&\\n        currentPosition[2] === index) {\\n        return 0;\\n    }\\n    return -1;\\n};\\n$: {\\n    const focusCurrentSelectable = async () => {\\n        if (currentPosition && gridRef) {\\n            await tick();\\n            const column = gridRef.querySelector(\`[data-row=\\"\${currentPosition[0]}\\"][data-column=\\"\${currentPosition[1]}\\"]\`);\\n            const selectables = column?.querySelectorAll('a:not(.not-selectable),button:not(.not-selectable)');\\n            console.log(selectables);\\n            if (selectables) {\\n                selectables[currentPosition[2] - 1].focus();\\n            }\\n        }\\n    };\\n    focusCurrentSelectable();\\n}\\nonMount(() => {\\n    js = true;\\n});\\n<\/script>\\n\\n<div\\n\\tclass=\\"tracks\\"\\n\\trole=\\"grid\\"\\n\\taria-label={title}\\n\\taria-rowcount={total + 1}\\n\\taria-colcount={5}\\n\\ttabindex={js ? 0 : undefined}\\n\\tbind:this={gridRef}\\n\\ton:keydown={handleKeyDown}\\n>\\n\\t<div class=\\"row header\\" role=\\"row\\" aria-rowindex={1}>\\n\\t\\t<div class=\\"number-column\\" role=\\"columnheader\\" aria-colindex={1} data-row={1}>\\n\\t\\t\\t<span class=\\"number\\">#</span>\\n\\t\\t</div>\\n\\t\\t<div class=\\"info-column\\" role=\\"columnheader\\" aria-colindex={2} data-row={1}>\\n\\t\\t\\t<span class=\\"track-title\\">Title</span>\\n\\t\\t</div>\\n\\t\\t<div class=\\"duration-column\\" role=\\"columnheader\\" aria-colindex={3} data-row={1}>\\n\\t\\t\\t<Clock8 aria-hidden focusable=\\"false\\" color=\\"var(--light-gray)\\" />\\n\\t\\t</div>\\n\\t\\t<div\\n\\t\\t\\tclass=\\"actions-column\\"\\n\\t\\t\\tclass:is-owner={isOwner}\\n\\t\\t\\trole=\\"columnheader\\"\\n\\t\\t\\taria-colindex={4}\\n\\t\\t\\tdata-row={1}\\n\\t\\t/>\\n\\t</div>\\n\\t{#each tracks as track, index}\\n\\t\\t<div\\n\\t\\t\\tclass=\\"row\\"\\n\\t\\t\\tclass:is-current={currentlyPlaying === track.id}\\n\\t\\t\\trole=\\"row\\"\\n\\t\\t\\taria-rowindex={index + 2}\\n\\t\\t\\taria-selected={currentPosition && currentPosition[0] === index + 2 ? 'true' : 'false'}\\n\\t\\t>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"number-column\\"\\n\\t\\t\\t\\trole=\\"gridcell\\"\\n\\t\\t\\t\\taria-colindex={1}\\n\\t\\t\\t\\tdata-column={1}\\n\\t\\t\\t\\tdata-row={index + 2}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#if currentlyPlaying === track.id && !isPaused}\\n\\t\\t\\t\\t\\t<img class=\\"playing-gif\\" src={playingGif} alt=\\"\\" />\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<span class=\\"number\\">{index + 1}</span>\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t<div class=\\"player\\">\\n\\t\\t\\t\\t\\t<Player\\n\\t\\t\\t\\t\\t\\ttabIndex={getSelectableTabIndex(index + 2, 1, 1)}\\n\\t\\t\\t\\t\\t\\t{track}\\n\\t\\t\\t\\t\\t\\ton:play={(e) => {\\n\\t\\t\\t\\t\\t\\t\\tcurrentlyPlaying = e.detail.track.id;\\n\\t\\t\\t\\t\\t\\t\\tisPaused = false;\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\ton:pause={(e) => {\\n\\t\\t\\t\\t\\t\\t\\tisPaused = e.detail.track.id === currentlyPlaying;\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t/>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"info-column\\"\\n\\t\\t\\t\\trole=\\"gridcell\\"\\n\\t\\t\\t\\taria-colindex={2}\\n\\t\\t\\t\\tdata-column={2}\\n\\t\\t\\t\\tdata-row={index + 2}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<div class=\\"track-title\\">\\n\\t\\t\\t\\t\\t<h4>{track.name}</h4>\\n\\t\\t\\t\\t\\t{#if track.explicit}\\n\\t\\t\\t\\t\\t\\t<span class=\\"explicit\\">Explicit</span>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t<p class=\\"artists\\">\\n\\t\\t\\t\\t\\t{#each track.artists as artist, artistIndex}\\n\\t\\t\\t\\t\\t\\t<a\\n\\t\\t\\t\\t\\t\\t\\thref=\\"/artist/{artist.id}\\"\\n\\t\\t\\t\\t\\t\\t\\ttabindex={getSelectableTabIndex(index + 2, 2, artistIndex + 1)}>{artist.name}</a\\n\\t\\t\\t\\t\\t\\t>{#if artistIndex < track.artists.length - 1}{', '}{/if}\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t</p>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"duration-column\\"\\n\\t\\t\\t\\trole=\\"gridcell\\"\\n\\t\\t\\t\\taria-colindex={3}\\n\\t\\t\\t\\tdata-column={3}\\n\\t\\t\\t\\tdata-row={index + 2}\\n\\t\\t\\t>\\n\\t\\t\\t\\t<span class=\\"duration\\">{msToTime(track.duration_ms)}</span>\\n\\t\\t\\t</div>\\n\\t\\t\\t<div\\n\\t\\t\\t\\tclass=\\"actions-column\\"\\n\\t\\t\\t\\tclass:is-owner={isOwner}\\n\\t\\t\\t\\trole=\\"gridcell\\"\\n\\t\\t\\t\\taria-colindex={4}\\n\\t\\t\\t\\tdata-column={4}\\n\\t\\t\\t\\tdata-row={index + 2}\\n\\t\\t\\t>\\n\\t\\t\\t\\t{#if isOwner}\\n\\t\\t\\t\\t\\t<form\\n\\t\\t\\t\\t\\t\\tmethod=\\"POST\\"\\n\\t\\t\\t\\t\\t\\taction=\\"/playlist/{$page.params.id}?/removeItem\\"\\n\\t\\t\\t\\t\\t\\tuse:enhance={({ cancel }) => {\\n\\t\\t\\t\\t\\t\\t\\tif (isRemovingFromPlaylist.includes(track.id)) {\\n\\t\\t\\t\\t\\t\\t\\t\\tcancel();\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\tisRemovingFromPlaylist = [...isRemovingFromPlaylist, track.id];\\n\\t\\t\\t\\t\\t\\t\\treturn ({ result }) => {\\n\\t\\t\\t\\t\\t\\t\\t\\tif (result.type === 'error') {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttoasts.error(result.error.message);\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\tif (result.type === 'redirect') {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tconst url = new URL(\`\${$page.url.origin}\${result.location}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tconst error = url.searchParams.get('error');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tconst success = url.searchParams.get('success');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tif (error) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoasts.error(error);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tif (success) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoasts.success(success);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tinvalidate(\`/api/spotify/playlists/\${$page.params.id}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\tisRemovingFromPlaylist = isRemovingFromPlaylist.filter((t) => t !== track.id);\\n\\t\\t\\t\\t\\t\\t\\t};\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<input hidden name=\\"track\\" value={track.id} />\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\ttabindex={getSelectableTabIndex(index + 2, 4, 1)}\\n\\t\\t\\t\\t\\t\\t\\ttype=\\"submit\\"\\n\\t\\t\\t\\t\\t\\t\\ttitle=\\"Remove {track.name} from playlist\\"\\n\\t\\t\\t\\t\\t\\t\\taria-label=\\"Remove {track.name} from playlist\\"\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"remove-pl-button\\"\\n\\t\\t\\t\\t\\t\\t\\tdisabled={isRemovingFromPlaylist.includes(track.id)}\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t<ListX aria-hidden focusable=\\"false\\" />\\n\\t\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t</form>\\n\\t\\t\\t\\t{:else}\\n\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\ttabindex={getSelectableTabIndex(index + 2, 4, 1)}\\n\\t\\t\\t\\t\\t\\ttitle=\\"Add {track.name} to a playlist\\"\\n\\t\\t\\t\\t\\t\\taria-label=\\"Add {track.name} to a playlist\\"\\n\\t\\t\\t\\t\\t\\tclass=\\"add-pl-button\\"\\n\\t\\t\\t\\t\\t\\tdisabled={!userPlaylists}\\n\\t\\t\\t\\t\\t\\tuse:tippy={{\\n\\t\\t\\t\\t\\t\\t\\tcontent: document.getElementById(\`\${track.id}-playlists-menu\`) || undefined,\\n\\t\\t\\t\\t\\t\\t\\tallowHTML: true,\\n\\t\\t\\t\\t\\t\\t\\ttrigger: 'click',\\n\\t\\t\\t\\t\\t\\t\\tinteractive: true,\\n\\t\\t\\t\\t\\t\\t\\ttheme: 'menu',\\n\\t\\t\\t\\t\\t\\t\\tplacement: 'bottom-end',\\n\\t\\t\\t\\t\\t\\t\\tonMount: () => {\\n\\t\\t\\t\\t\\t\\t\\t\\tconst template = document.getElementById(\`\${track.id}-playlists-menu\`);\\n\\t\\t\\t\\t\\t\\t\\t\\tif (template) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\ttemplate.style.display = 'block';\\n\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t<ListPlus aria-hidden focusable=\\"false\\" />\\n\\t\\t\\t\\t\\t</button>\\n\\t\\t\\t\\t\\t{#if userPlaylists}\\n\\t\\t\\t\\t\\t\\t<div class=\\"playlists-menu\\" id=\\"{track.id}-playlists-menu\\" style=\\"display: none;\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\"playlists-menu-content\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<form\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tmethod=\\"POST\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\taction=\\"/playlist?/addItem&redirect={$page.url.pathname}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\tuse:enhance={({ cancel }) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (isAddingToPlaylist.includes(track.id)) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tcancel();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tisAddingToPlaylist = [...isAddingToPlaylist, track.id];\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\treturn ({ result }) => {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (result.type === 'error') {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoasts.error(result.error.message);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (result.type === 'redirect') {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst url = new URL(\`\${$page.url.origin}\${result.location}\`);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst error = url.searchParams.get('error');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tconst success = url.searchParams.get('success');\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (error) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoasts.error(error);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tif (success) {\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttoasts.success(success);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\thideAll();\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tisAddingToPlaylist = isAddingToPlaylist.filter((t) => t !== track.id);\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t};\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t}}\\n\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<input hidden value={track.id} name=\\"track\\" />\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"field\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<select aria-label=\\"Playlist\\" name=\\"playlist\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{#each userPlaylists as playlist}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<option value={playlist.id}>{playlist.name}</option>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</select>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t<div class=\\"submit-button\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t<Button\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tdisabled={isAddingToPlaylist.includes(track.id)}\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\telement=\\"button\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttype=\\"submit\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tclassName=\\"not-selectable\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tAdd <span class=\\"visually-hidden\\"> {track.name} to selected playlist.</span>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t</Button>\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t\\t\\t</form>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t\\t</div>\\n\\t\\t\\t\\t\\t{/if}\\n\\t\\t\\t\\t{/if}\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\t{/each}\\n</div>\\n\\n<style lang=\\"scss\\">.tracks:focus {\\n  outline: 2px solid var(--accent-color);\\n}\\n.tracks .row {\\n  display: flex;\\n  align-items: center;\\n  padding: 7px 5px;\\n  border-radius: 4px;\\n}\\n.tracks .row[aria-selected=true] {\\n  background-color: rgba(255, 255, 255, 0.3);\\n  outline: 1px solid #fff;\\n}\\n@media (max-width: 767px) {\\n  :global(.no-js) .tracks .row {\\n    flex-direction: column;\\n    background-color: rgba(255, 255, 255, 0.03);\\n    padding: 20px;\\n    margin-bottom: 20px;\\n  }\\n}\\n.tracks .row.is-current .info-column .track-title h4,\\n.tracks .row.is-current .number-column span.number {\\n  color: var(--accent-color);\\n}\\n.tracks .row.header {\\n  border-bottom: 1px solid var(--border);\\n  border-radius: 0px;\\n  padding: 5px;\\n  margin-bottom: 15px;\\n}\\n@media (max-width: 767px) {\\n  :global(.no-js) .tracks .row.header {\\n    display: none;\\n  }\\n}\\n.tracks .row.header .track-title {\\n  color: var(--light-gray);\\n  font-size: 0.75rem;\\n  text-transform: uppercase;\\n}\\n.tracks .row.header .duration-column :global(svg) {\\n  width: 16px;\\n  height: 16px;\\n}\\n.tracks .row:not(.header):not([aria-selected=true]):hover {\\n  background-color: rgba(255, 255, 255, 0.05);\\n}\\n.tracks .row:not(.header):hover, .tracks .row:not(.header)[aria-selected=true] {\\n  background-color: rgba(255, 255, 255, 0.05);\\n}\\n.tracks .row:not(.header):hover .number-column .player, .tracks .row:not(.header)[aria-selected=true] .number-column .player {\\n  display: block;\\n}\\n.tracks .row:not(.header):hover .number-column span.number, .tracks .row:not(.header)[aria-selected=true] .number-column span.number {\\n  display: none;\\n}\\n:global(.no-js) .tracks .row:not(.header):hover .number-column span.number, :global(.no-js) .tracks .row:not(.header)[aria-selected=true] .number-column span.number {\\n  display: block;\\n}\\n.tracks .row:not(.header):hover .number-column .playing-gif, .tracks .row:not(.header)[aria-selected=true] .number-column .playing-gif {\\n  display: none;\\n}\\n.tracks .row .number-column {\\n  width: 30px;\\n  display: flex;\\n  justify-content: flex-end;\\n  margin-right: 15px;\\n}\\n.tracks .row .number-column span.number {\\n  color: var(--light-gray);\\n  font-size: 0.875rem;\\n}\\n.tracks .row .number-column .playing-gif {\\n  width: 12px;\\n}\\n.tracks .row .number-column .player {\\n  display: none;\\n}\\n:global(html.no-js) .tracks .row .number-column {\\n  width: 200px;\\n  display: flex;\\n  align-items: center;\\n}\\n@media (max-width: 767px) {\\n  :global(html.no-js) .tracks .row .number-column {\\n    width: 100%;\\n    margin-right: 0;\\n    margin-bottom: 15px;\\n  }\\n}\\n:global(html.no-js) .tracks .row .number-column .player {\\n  display: block;\\n  width: 100%;\\n  margin-left: 10px;\\n}\\n.tracks .row .info-column {\\n  flex: 1;\\n}\\n@media (max-width: 767px) {\\n  :global(.no-js) .tracks .row .info-column {\\n    width: 100%;\\n  }\\n}\\n.tracks .row .info-column .track-title {\\n  display: flex;\\n  align-items: center;\\n}\\n.tracks .row .info-column .track-title h4 {\\n  margin: 0;\\n  font-size: 0.9375rem;\\n  font-weight: 400;\\n  line-height: 1;\\n}\\n.tracks .row .info-column .track-title span.explicit {\\n  text-transform: uppercase;\\n  font-size: 0.5rem;\\n  margin-left: 10px;\\n  border: 1px solid;\\n  padding: 2px 3px;\\n  border-radius: 2px;\\n  line-height: 0.625rem;\\n  color: var(--light-gray);\\n}\\n.tracks .row .info-column .artists {\\n  color: var(--light-gray);\\n  font-size: 0.8125rem;\\n  margin: 7px 0 0;\\n  line-height: 1;\\n}\\n.tracks .row .info-column .artists a {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n.tracks .row .duration-column span.duration {\\n  color: var(--light-gray);\\n  font-size: 0.875rem;\\n}\\n@media (max-width: 767px) {\\n  :global(.no-js) .tracks .row .duration-column {\\n    width: 100%;\\n    margin: 10px 0;\\n  }\\n}\\n.tracks .row .actions-column {\\n  width: 30px;\\n  margin-left: 15px;\\n}\\n:global(html.no-js) .tracks .row .actions-column:not(.is-owner) {\\n  width: 200px;\\n}\\n@media (max-width: 767px) {\\n  :global(html.no-js) .tracks .row .actions-column:not(.is-owner) {\\n    margin-left: 0;\\n    width: 100%;\\n  }\\n}\\n:global(html.no-js) .tracks .row .actions-column .add-pl-button {\\n  display: none;\\n}\\n:global(html.no-js) .tracks .row .actions-column .playlists-menu {\\n  display: block !important;\\n}\\n.tracks .row .actions-column .add-pl-button,\\n.tracks .row .actions-column .remove-pl-button {\\n  background: none;\\n  border: none;\\n  padding: 5px;\\n  cursor: pointer;\\n}\\n.tracks .row .actions-column .add-pl-button :global(svg),\\n.tracks .row .actions-column .remove-pl-button :global(svg) {\\n  stroke: var(--text-color);\\n  vertical-align: middle;\\n  width: 22px;\\n  height: 22px;\\n}\\n.tracks .row .actions-column .add-pl-button:disabled,\\n.tracks .row .actions-column .remove-pl-button:disabled {\\n  opacity: 0.8;\\n  cursor: not-allowed;\\n}\\n.tracks .row .actions-column .playlists-menu-content {\\n  padding: 15px;\\n}\\n:global(html.no-js) .tracks .row .actions-column .playlists-menu-content {\\n  padding: 0;\\n}\\n:global(html.no-js) .tracks .row .actions-column .playlists-menu-content form {\\n  display: flex;\\n  align-items: center;\\n}\\n:global(html.no-js) .tracks .row .actions-column .playlists-menu-content .field {\\n  flex: 1;\\n}\\n.tracks .row .actions-column .playlists-menu-content .field select {\\n  width: 100%;\\n  height: 35px;\\n  border-radius: 4px;\\n}\\n.tracks .row .actions-column .playlists-menu-content .submit-button {\\n  margin-top: 10px;\\n  text-align: right;\\n}\\n:global(html.no-js) .tracks .row .actions-column .playlists-menu-content .submit-button {\\n  margin-top: 0;\\n  margin-left: 10px;\\n}</style>\\n"],"names":[],"mappings":"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"}`
};
const TrackList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getSelectableTabIndex;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { tracks } = $$props;
  let { isOwner = false } = $$props;
  let { userPlaylists } = $$props;
  let { title } = $$props;
  let { total } = $$props;
  let currentlyPlaying = null;
  let isPaused = false;
  let isAddingToPlaylist = [];
  let isRemovingFromPlaylist = [];
  let prevTrackLength = tracks.length;
  let gridRef = null;
  let currentPosition = null;
  if ($$props.tracks === void 0 && $$bindings.tracks && tracks !== void 0)
    $$bindings.tracks(tracks);
  if ($$props.isOwner === void 0 && $$bindings.isOwner && isOwner !== void 0)
    $$bindings.isOwner(isOwner);
  if ($$props.userPlaylists === void 0 && $$bindings.userPlaylists && userPlaylists !== void 0)
    $$bindings.userPlaylists(userPlaylists);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  $$result.css.add(css$1);
  {
    {
      if (prevTrackLength < tracks.length) {
        currentPosition = [prevTrackLength + 2, 1, 1];
      }
      prevTrackLength = tracks.length;
    }
  }
  navigate(gridRef, currentPosition, tracks.length);
  getSelectableTabIndex = (row, column, index) => {
    return void 0;
  };
  {
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
  }
  $$unsubscribe_page();
  return `<div class="tracks svelte-boz81k" role="grid"${add_attribute("aria-label", title, 0)}${add_attribute("aria-rowcount", total + 1, 0)}${add_attribute("aria-colcount", 5, 0)}${add_attribute("tabindex", void 0, 0)}${add_attribute("this", gridRef, 0)}><div class="row header svelte-boz81k" role="row"${add_attribute("aria-rowindex", 1, 0)}><div class="number-column svelte-boz81k" role="columnheader"${add_attribute("aria-colindex", 1, 0)}${add_attribute("data-row", 1, 0)} data-svelte-h="svelte-esl2z5"><span class="number svelte-boz81k">#</span></div> <div class="info-column svelte-boz81k" role="columnheader"${add_attribute("aria-colindex", 2, 0)}${add_attribute("data-row", 1, 0)} data-svelte-h="svelte-181kin7"><span class="track-title svelte-boz81k">Title</span></div> <div class="duration-column svelte-boz81k" role="columnheader"${add_attribute("aria-colindex", 3, 0)}${add_attribute("data-row", 1, 0)}>${validate_component(Clock_8, "Clock8").$$render(
    $$result,
    {
      "aria-hidden": true,
      focusable: "false",
      color: "var(--light-gray)"
    },
    {},
    {}
  )}</div> <div class="${["actions-column svelte-boz81k", isOwner ? "is-owner" : ""].join(" ").trim()}" role="columnheader"${add_attribute("aria-colindex", 4, 0)}${add_attribute("data-row", 1, 0)}></div></div> ${each(tracks, (track, index) => {
    return `<div class="${["row svelte-boz81k", currentlyPlaying === track.id ? "is-current" : ""].join(" ").trim()}" role="row"${add_attribute("aria-rowindex", index + 2, 0)}${add_attribute(
      "aria-selected",
      currentPosition && currentPosition[0] === index + 2 ? "true" : "false",
      0
    )}><div class="number-column svelte-boz81k" role="gridcell"${add_attribute("aria-colindex", 1, 0)}${add_attribute("data-column", 1, 0)}${add_attribute("data-row", index + 2, 0)}>${currentlyPlaying === track.id && !isPaused ? `<img class="playing-gif svelte-boz81k"${add_attribute("src", playingGif, 0)} alt="">` : `<span class="number svelte-boz81k">${escape(index + 1)}</span>`} <div class="player svelte-boz81k">${validate_component(Player, "Player").$$render(
      $$result,
      {
        tabIndex: getSelectableTabIndex(index + 2, 1, 1),
        track
      },
      {},
      {}
    )} </div></div> <div class="info-column svelte-boz81k" role="gridcell"${add_attribute("aria-colindex", 2, 0)}${add_attribute("data-column", 2, 0)}${add_attribute("data-row", index + 2, 0)}><div class="track-title svelte-boz81k"><h4 class="svelte-boz81k">${escape(track.name)}</h4> ${track.explicit ? `<span class="explicit svelte-boz81k" data-svelte-h="svelte-6jyi5x">Explicit</span>` : ``}</div> <p class="artists svelte-boz81k">${each(track.artists, (artist, artistIndex) => {
      return `<a href="${"/artist/" + escape(artist.id, true)}"${add_attribute("tabindex", getSelectableTabIndex(index + 2, 2, artistIndex + 1), 0)} class="svelte-boz81k">${escape(artist.name)}</a>${artistIndex < track.artists.length - 1 ? `${escape(", ")}` : ``}`;
    })} </p></div> <div class="duration-column svelte-boz81k" role="gridcell"${add_attribute("aria-colindex", 3, 0)}${add_attribute("data-column", 3, 0)}${add_attribute("data-row", index + 2, 0)}><span class="duration svelte-boz81k">${escape(msToTime(track.duration_ms))}</span></div> <div class="${["actions-column svelte-boz81k", isOwner ? "is-owner" : ""].join(" ").trim()}" role="gridcell"${add_attribute("aria-colindex", 4, 0)}${add_attribute("data-column", 4, 0)}${add_attribute("data-row", index + 2, 0)}>${isOwner ? `<form method="POST" action="${"/playlist/" + escape($page.params.id, true) + "?/removeItem"}" class="svelte-boz81k"><input hidden name="track"${add_attribute("value", track.id, 0)}> <button${add_attribute("tabindex", getSelectableTabIndex(index + 2, 4, 1), 0)} type="submit" title="${"Remove " + escape(track.name, true) + " from playlist"}" aria-label="${"Remove " + escape(track.name, true) + " from playlist"}" class="remove-pl-button svelte-boz81k" ${isRemovingFromPlaylist.includes(track.id) ? "disabled" : ""}>${validate_component(List_x, "ListX").$$render($$result, { "aria-hidden": true, focusable: "false" }, {}, {})}</button> </form>` : `<button${add_attribute("tabindex", getSelectableTabIndex(index + 2, 4, 1), 0)} title="${"Add " + escape(track.name, true) + " to a playlist"}" aria-label="${"Add " + escape(track.name, true) + " to a playlist"}" class="add-pl-button svelte-boz81k" ${!userPlaylists ? "disabled" : ""}>${validate_component(List_plus, "ListPlus").$$render($$result, { "aria-hidden": true, focusable: "false" }, {}, {})}</button> ${userPlaylists ? `<div class="playlists-menu svelte-boz81k" id="${escape(track.id, true) + "-playlists-menu"}" style="display: none;"><div class="playlists-menu-content svelte-boz81k"><form method="POST" action="${"/playlist?/addItem&redirect=" + escape($page.url.pathname, true)}" class="svelte-boz81k"><input hidden${add_attribute("value", track.id, 0)} name="track"> <div class="field svelte-boz81k"><select aria-label="Playlist" name="playlist" class="svelte-boz81k">${each(userPlaylists, (playlist) => {
      return `<option${add_attribute("value", playlist.id, 0)}>${escape(playlist.name)}</option>`;
    })}</select></div> <div class="submit-button svelte-boz81k">${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: isAddingToPlaylist.includes(track.id),
        element: "button",
        type: "submit",
        className: "not-selectable"
      },
      {},
      {
        default: () => {
          return `Add <span class="visually-hidden">${escape(track.name)} to selected playlist.</span> `;
        }
      }
    )}</div> </form></div> </div>` : ``}`}</div> </div>`;
  })} </div>`;
});
const css = {
  code: ".player.svelte-m4cq80 audio.svelte-m4cq80{display:none}html.no-js .player.svelte-m4cq80 audio.svelte-m4cq80{display:block;width:100%}.player.svelte-m4cq80 button.svelte-m4cq80{width:12px;height:12px;padding:0;background:none;border:none;cursor:pointer}.player.svelte-m4cq80 button.svelte-m4cq80 svg{fill:var(--text-color);width:12px;height:12px;vertical-align:middle}html.no-js .player.svelte-m4cq80 button.svelte-m4cq80{display:none}",
  map: `{"version":3,"file":"Player.svelte","sources":["Player.svelte"],"sourcesContent":["<script lang=\\"ts\\" context=\\"module\\">\\"use strict\\";\\nlet current;\\n<\/script>\\n\\n<script lang=\\"ts\\">import { Pause, Play } from 'lucide-svelte';\\nimport { createEventDispatcher } from 'svelte';\\nexport let track;\\nexport let tabIndex = undefined;\\nconst dispatch = createEventDispatcher();\\nlet audio;\\nlet paused = true;\\nfunction onPlay() {\\n    if (current && current !== audio) {\\n        current.currentTime = 0;\\n        current.pause();\\n    }\\n    current = audio;\\n    dispatch('play', { track });\\n}\\nfunction onPause() {\\n    dispatch('pause', { track });\\n}\\n<\/script>\\n\\n<div class=\\"player\\">\\n\\t<audio\\n\\t\\ton:play={onPlay}\\n\\t\\ton:pause={onPause}\\n\\t\\tbind:this={audio}\\n\\t\\tbind:paused\\n\\t\\tcontrols\\n\\t\\tsrc={track.preview_url}\\n\\t\\tpreload=\\"none\\"\\n\\t/>\\n\\t<button\\n\\t\\ttabindex={tabIndex}\\n\\t\\taria-label={paused ? \`Play \${track.name}\` : \`Pause \${track.name}\`}\\n\\t\\ton:click={() => {\\n\\t\\t\\tif (paused) {\\n\\t\\t\\t\\taudio.play();\\n\\t\\t\\t} else {\\n\\t\\t\\t\\taudio.pause();\\n\\t\\t\\t}\\n\\t\\t}}\\n\\t>\\n\\t\\t{#if paused}\\n\\t\\t\\t<Play color=\\"var(--text-color)\\" focusable=\\"false\\" aria-hidden />\\n\\t\\t{:else}\\n\\t\\t\\t<Pause color=\\"var(--text-color)\\" focusable=\\"false\\" aria-hidden />\\n\\t\\t{/if}\\n\\t</button>\\n</div>\\n\\n<style lang=\\"scss\\">.player audio {\\n  display: none;\\n}\\n:global(html.no-js) .player audio {\\n  display: block;\\n  width: 100%;\\n}\\n.player button {\\n  width: 12px;\\n  height: 12px;\\n  padding: 0;\\n  background: none;\\n  border: none;\\n  cursor: pointer;\\n}\\n.player button :global(svg) {\\n  fill: var(--text-color);\\n  width: 12px;\\n  height: 12px;\\n  vertical-align: middle;\\n}\\n:global(html.no-js) .player button {\\n  display: none;\\n}</style>\\n"],"names":[],"mappings":"AAqDmB,qBAAO,CAAC,mBAAM,CAC/B,OAAO,CAAE,IACX,CACQ,UAAW,CAAC,qBAAO,CAAC,mBAAM,CAChC,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IACT,CACA,qBAAO,CAAC,oBAAO,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OACV,CACA,qBAAO,CAAC,oBAAM,CAAS,GAAK,CAC1B,IAAI,CAAE,IAAI,YAAY,CAAC,CACvB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,cAAc,CAAE,MAClB,CACQ,UAAW,CAAC,qBAAO,CAAC,oBAAO,CACjC,OAAO,CAAE,IACX"}`
};
const Player = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { track } = $$props;
  let { tabIndex = void 0 } = $$props;
  createEventDispatcher();
  let audio;
  let paused = true;
  if ($$props.track === void 0 && $$bindings.track && track !== void 0)
    $$bindings.track(track);
  if ($$props.tabIndex === void 0 && $$bindings.tabIndex && tabIndex !== void 0)
    $$bindings.tabIndex(tabIndex);
  $$result.css.add(css);
  return `<div class="player svelte-m4cq80"><audio controls${add_attribute("src", track.preview_url, 0)} preload="none" class="svelte-m4cq80"${add_attribute("this", audio, 0)}${add_attribute("paused", paused, 0)}></audio> <button${add_attribute("tabindex", tabIndex, 0)}${add_attribute("aria-label", `Play ${track.name}`, 0)} class="svelte-m4cq80">${`${validate_component(Play, "Play").$$render(
    $$result,
    {
      color: "var(--text-color)",
      focusable: "false",
      "aria-hidden": true
    },
    {},
    {}
  )}`}</button> </div>`;
});
export {
  TrackList as T
};
