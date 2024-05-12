import { c as spread_props, b as pop, d as slot, e as sanitize_props, p as push, k as store_get, j as stringify, g as attr, l as escape_html, u as unsubscribe_stores, m as bind_props } from "../../../../chunks/index3.js";
import "devalue";
import "../../../../chunks/HeaderNav.svelte_svelte_type_style_lang.js";
import { p as page } from "../../../../chunks/stores.js";
import { B as Button } from "../../../../chunks/Button.js";
import { I as ItemPage } from "../../../../chunks/ItemPage.js";
import { T as TrackList } from "../../../../chunks/Player.js";
import "uniqid";
import { P as PlaylistForm } from "../../../../chunks/PlaylistForm.js";
import { M as Modal } from "../../../../chunks/Modal.js";
import "micromodal";
import { I as Icon } from "../../../../chunks/Icon.js";
function Heart($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push();
  const iconNode = [
    [
      "path",
      {
        "d": "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
      }
    ]
  ];
  $$payload.out += `<!--[-->`;
  Icon($$payload, spread_props([
    { name: "heart" },
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
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let color, playlist, tracks, isFollowing, currentPage;
  let data = $$props["data"];
  let form = $$props["form"];
  let isLoading = false;
  let isLoadingFollow = false;
  let filteredTracks;
  const followersFormat = Intl.NumberFormat("en", { notation: "compact" });
  color = data.color;
  playlist = data.playlist;
  tracks = data.playlist.tracks;
  isFollowing = data.isFollowing;
  currentPage = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("page") || 1;
  {
    filteredTracks = [];
    tracks.items.forEach((item) => {
      if (item.track)
        filteredTracks = [...filteredTracks, item.track];
    });
  }
  $$payload.out += `<!--[-->`;
  ItemPage($$payload, {
    title: playlist.name,
    image: playlist.images.length > 0 ? playlist.images[0].url : void 0,
    color,
    type: playlist.type,
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<div class="playlist-actions svelte-1q4ivft"><!--[-->`;
      if (data.user?.id === playlist.owner.id) {
        $$payload2.out += `<!--[-->`;
        Button($$payload2, {
          element: "a",
          variant: "outline",
          href: `/playlist/${stringify(playlist.id)}/edit`,
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `Edit Playlist`;
          }
        });
        $$payload2.out += `<!--]-->`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += `<!--[-->`;
        if (isFollowing !== null) {
          $$payload2.out += `<form class="follow-form svelte-1q4ivft" method="POST"${attr("action", `?/${isFollowing ? "unFollowPlaylist" : "followPlaylist"}`, false)}><!--[-->`;
          Button($$payload2, {
            element: "button",
            type: "submit",
            variant: "outline",
            disabled: isLoadingFollow,
            children: ($$payload3, $$slotProps2) => {
              $$payload3.out += `<!--[-->`;
              Heart($$payload3, {
                "aria-hidden": true,
                focusable: "false",
                fill: isFollowing ? "var(--text-color)" : "none"
              });
              $$payload3.out += `<!--]--> ${escape_html(isFollowing ? "Unfollow" : "Follow")} <span class="visually-hidden">${escape_html(playlist.name)} playlist</span>`;
            }
          });
          $$payload2.out += `<!--]--> <!--[-->`;
          if (form && "followForm" in form && form?.followError) {
            $$payload2.out += `<p class="error svelte-1q4ivft">${escape_html(form.followError)}</p>`;
            $$payload2.out += "<!--]-->";
          } else {
            $$payload2.out += "<!--]!-->";
          }
          $$payload2.out += `</form>`;
          $$payload2.out += "<!--]-->";
        } else {
          $$payload2.out += "<!--]!-->";
        }
        $$payload2.out += "<!--]!-->";
      }
      $$payload2.out += `</div> <!--[-->`;
      if (playlist.tracks.items.length > 0) {
        $$payload2.out += `<!--[-->`;
        TrackList($$payload2, {
          tracks: filteredTracks,
          isOwner: data.user?.id === playlist.owner.id,
          userPlaylists: data.userAllPlaylists?.filter((pl) => pl.owner.id === data.user?.id),
          title: playlist.name,
          total: playlist.tracks.total
        });
        $$payload2.out += `<!--]--> <!--[-->`;
        if (tracks.next) {
          $$payload2.out += `<div class="load-more svelte-1q4ivft"><!--[-->`;
          Button($$payload2, {
            element: "button",
            variant: "outline",
            disabled: isLoading,
            children: ($$payload3, $$slotProps2) => {
              $$payload3.out += `Load More <span class="visually-hidden">Tracks</span>`;
            }
          });
          $$payload2.out += `<!--]--></div>`;
          $$payload2.out += "<!--]-->";
        } else {
          $$payload2.out += "<!--]!-->";
        }
        $$payload2.out += ` <div class="pagination svelte-1q4ivft"><div class="previous"><!--[-->`;
        if (tracks.previous) {
          $$payload2.out += `<!--[-->`;
          Button($$payload2, {
            variant: "outline",
            element: "a",
            href: `${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname)}?${stringify(new URLSearchParams({ page: `${Number(currentPage) - 1}` }).toString())}`,
            children: ($$payload3, $$slotProps2) => {
              $$payload3.out += `← Previous Page`;
            }
          });
          $$payload2.out += `<!--]-->`;
          $$payload2.out += "<!--]-->";
        } else {
          $$payload2.out += "<!--]!-->";
        }
        $$payload2.out += `</div> <div class="next"><!--[-->`;
        if (tracks.next) {
          $$payload2.out += `<!--[-->`;
          Button($$payload2, {
            variant: "outline",
            element: "a",
            href: `${stringify(store_get($$store_subs ??= {}, "$page", page).url.pathname)}?${stringify(new URLSearchParams({ page: `${Number(currentPage) + 1}` }).toString())}`,
            children: ($$payload3, $$slotProps2) => {
              $$payload3.out += `Next Page →`;
            }
          });
          $$payload2.out += `<!--]-->`;
          $$payload2.out += "<!--]-->";
        } else {
          $$payload2.out += "<!--]!-->";
        }
        $$payload2.out += `</div></div>`;
        $$payload2.out += "<!--]-->";
      } else {
        $$payload2.out += `<div class="empty-playlist svelte-1q4ivft"><p class="svelte-1q4ivft">No items added to this playlist yet.</p> <!--[-->`;
        Button($$payload2, {
          element: "a",
          href: "/search",
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `Search for Content`;
          }
        });
        $$payload2.out += `<!--]--> <!--[-->`;
        Button($$payload2, {
          element: "a",
          href: "/playlists",
          children: ($$payload3, $$slotProps2) => {
            $$payload3.out += `View all Playlists`;
          }
        });
        $$payload2.out += `<!--]--></div>`;
        $$payload2.out += "<!--]!-->";
      }
    },
    $$slots: {
      "meta": ($$payload2, $$slotProps) => {
        $$payload2.out += `<div slot="meta"><p class="playlist-description svelte-1q4ivft"><!--[-->${playlist.description}<!--]--></p> <p class="meta svelte-1q4ivft"><span class="svelte-1q4ivft">${escape_html(playlist.owner.display_name)}</span> <span class="svelte-1q4ivft">${escape_html(followersFormat.format(playlist.followers.total))} Followers</span> <span class="svelte-1q4ivft">${escape_html(playlist.tracks.total)} Tracks</span></p></div>`;
      }
    }
  });
  $$payload.out += `<!--]--> <!--[-->`;
  Modal($$payload, {
    id: "edit-playlist-modal",
    title: `Edit ${stringify(playlist.name)}`,
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `<!--[-->`;
      PlaylistForm($$payload2, {
        action: `/playlist/${stringify(playlist.id)}/edit`,
        playlist,
        form: form && "editForm" in form ? form : null
      });
      $$payload2.out += `<!--]-->`;
    }
  });
  $$payload.out += `<!--]-->`;
  if ($$store_subs)
    unsubscribe_stores($$store_subs);
  bind_props($$props, { data, form });
  pop();
}
export {
  _page as default
};
