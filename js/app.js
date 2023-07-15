function mobilecheck() {
  var e = !1;
  return (
    (function (t) {
      (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        t
      ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          t.substr(0, 4)
        )) &&
        (e = !0);
    })(navigator.userAgent || navigator.vendor || window.opera),
    e
  );
}
function debounce(e, t, n) {
  var a;
  return function () {
    var i = this,
      o = arguments,
      r = function () {
        (a = null), n || e.apply(i, o);
      },
      s = n && !a;
    clearTimeout(a), (a = setTimeout(r, t)), s && e.apply(i, o);
  };
}
jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.about = {
    config: function (e) {
      t.about.init();
    },
    init: function () {
      function t(t) {
        (this.dd = t),
          (this.slideTarget = e(this.dd).attr("data-target")),
          (this.outerTargetHeight = e(this.slideTarget).height()),
          this.properHeight,
          (this.innerTargetnHeight = e(this.slideTarget)
            .find(".vslide-inner")
            .height()),
          this.initEvents();
      }
      var n = new Swiper("#testimonial-slider", {
          direction: "vertical",
          autoplay: { delay: 15e3 },
          autoplayDisableOnInteraction: !1,
          speed: 1200,
          effect: "coverflow",
          breakpoints: { 767: { effect: "fade", direction: "horizontal" } },
          onInit: function () {
            setTimeout(function () {
              n.autoplay.start();
            }, 1e3);
          },
        }),
        a = new ScrollMagic.Controller(),
        i = [];
      i.push(
        new ScrollMagic.Scene({
          triggerElement: "#testimonial-slider",
          triggerHook: 1,
        })
          .on("enter", function (e) {})
          .on("leave", function (e) {})
      ),
        a.addScene(i);
      var o = e("#testimonial-slider").find(".custom-bullets");
      o.on("click", "a", function () {
        console.log();
        var t = parseInt(e(this).attr("href"));
        return n.slideTo(t), !1;
      }),
        n.on("slideChange", function () {
          var t = n.activeIndex;
          o.each(function (n) {
            var a = e(this).find("li");
            a.removeClass("pagination-item-active"),
              e(a[t]).addClass("pagination-item-active");
          });
        }),
        (t.prototype = {
          initEvents: function () {
            var t = this;
            e(this.dd).on("click", function () {
              e(this).toggleClass("open"),
                e(this).hasClass("open")
                  ? ((t.properHeight = t.innerTargetnHeight),
                    e(t.slideTarget).animate({ height: t.properHeight }, 200),
                    e(this).text("read less"))
                  : ((t.properHeight = t.outerTargetHeight),
                    e(t.slideTarget).animate({ height: t.properHeight }, 200),
                    e(this).text("read more"));
            });
          },
        });
      new t(e(".slide-more-btn"));
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.Animations = {
    config: function (e) {
      t.Animations.smAnimation(), t.Animations.drawingAnimation();
    },
    smAnimation: function () {
      var t = new ScrollMagic.Controller(),
        n = [];
      e(".sm-animation").each(function (t, a) {
        var i = e(this),
          o = {};
        (o.triggerHook = i.attr("data-sm-trigger-hook") || 0.8),
          (o.offset = i.attr("data-sm-offset") || 0),
          (o.delay = i.attr("data-sm-delay") || 0),
          (o.time = i.attr("data-sm-time") || 0.8),
          (o.reverse = i.attr("data-sm-reverse") || !1),
          (o.triggerContainer = i.attr("data-sm-container") || i[0]),
          n.push(
            new ScrollMagic.Scene({
              triggerElement: o.triggerContainer,
              triggerHook: o.triggerHook,
              offset: o.offset,
              reverse: o.reverse,
            }).setClassToggle(i[0], "animate")
          );
      }),
        t.addScene(n);
    },
    drawingAnimation: function () {
      var t = new ScrollMagic.Controller(),
        n = [];
      e(".sm-drawing")
        .find("svg")
        .each(function () {
          var t = e(this),
            a = {};
          (a.triggerHook = t.attr("data-sm-trigger-hook") || 0.8),
            (a.offset = t.attr("data-sm-offset") || 0),
            (a.delay = t.attr("data-sm-delay") || 0),
            (a.time = t.attr("data-sm-time") || 0.8),
            (a.reverse = t.attr("data-sm-reverse") || !1),
            (a.triggerContainer = t.attr("data-sm-container") || t[0]),
            e(this)
              .find(".path")
              .each(function (t, i) {
                var o = e(this),
                  r = Math.floor(o.get(0).getTotalLength()) + 1;
                TweenMax.set(o, { "stroke-dasharray": r, strokeDashoffset: r }),
                  n.push(
                    new ScrollMagic.Scene({
                      triggerElement: a.triggerContainer,
                      triggerHook: a.triggerHook,
                      offset: a.offset,
                      reverse: a.reverse,
                    }).on("enter", function () {
                      TweenMax.to(o, 1, { "stroke-dashoffset": 0, delay: 0.6 });
                    })
                  );
              });
        }),
        t.addScene(n);
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.barba = {
    config: function (e) {
      t.barba.init();
    },
    init: function () {
      for (
        var n = !0,
          a = Barba.Pjax.Dom.parseResponse,
          i = document.querySelectorAll("a[href]"),
          o = function (e) {
            (e.currentTarget.href !== window.location.href &&
              e.currentTarget.href + "/" !== window.location.href) ||
              (e.preventDefault(), e.stopPropagation());
          },
          r = 0;
        r < i.length;
        r++
      )
        i[r].addEventListener("click", o);
      (Barba.Pjax.Dom.wrapperId = "site-main"),
        (Barba.Pjax.Dom.containerClass = "ajax"),
        (Barba.Pjax.Dom.parseResponse = function (t) {
          return (
            (t = t.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", t)),
            (bodyClasses = e(t).filter("notbody").attr("class")),
            a.apply(Barba.Pjax.Dom, arguments)
          );
        }),
        (Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck),
        (Barba.Pjax.preventCheck = function (e, t) {
          return !!Barba.Pjax.originalPreventCheck(e, t);
        });
      var s = Barba.BaseTransition.extend({
        start: function () {
          var e = this,
            n = new Date();
          (t.time = n.getTime()),
            Promise.all([e.showPreloader()]).then(e.newContainer.bind(e));
        },
        showPreloader: function () {
          var e = Barba.Utils.deferred();
          return t.common.preloader(!0, e);
        },
        newContainer: function () {
          var e = this;
          setTimeout(function () {
            Promise.all([e.newContainerLoading]).then(e.fadeIn.bind(e));
          }, 600);
        },
        fadeIn: function () {
          var n = this,
            a = e(this.newContainer),
            i = a.attr("data-namespace");
          $body.attr("class", bodyClasses),
            t.barba.loadScripts(i),
            t.barba.preloadImages(a, n),
            fbq("track", "PageView");
        },
      });
      (Barba.Pjax.getTransition = function () {
        return s;
      }),
        Barba.Dispatcher.on("newPageReady", function (a, i, o) {
          n && (t.barba.loadScripts(e(o).attr("data-namespace")), (n = !1));
        }),
        Barba.Dispatcher.on("transitionCompleted", function (t) {
          e("div.wpcf7 > form").each(function () {
            var t = e(this);
            wpcf7.init(t[0]);
          });
        }),
        (Barba.Pjax.cacheEnabled = !1),
        (Barba.Utils.xhrTimeout = 2e4),
        Barba.Pjax.start();
    },
    preloadImages: function (e, n) {
      e.imagesLoaded({ background: "*" }).always(function (e) {
        n.done(), t.common.preloader(!1);
      });
    },
    loadScripts: function (e) {
      t.common.config(),
        t.UI.scrollToPageContent(),
        "homepage" == e
          ? t.home.config(e)
          : "projects" == e
          ? t.project.config(e)
          : "about-eha-group" == e
          ? t.about.config(e)
          : "careers" == e
          ? t.careers.config(e)
          : "news" == e || "projects" == e
          ? t.news.config(e)
          : "contact" == e
          ? t.contact.config(e)
          : "project-archive" == e && t.projectarchive.config(e);
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.careers = {
    config: function (e) {
      t.careers.init(e);
    },
    init: function (e) {
      t.common.loadMore(e), t.careers.masonry();
    },
    masonry: function () {
      e(".careers-list").length &&
        ((t.masonryGrid = e(".careers-list").masonry({
          itemSelector: ".careers-list-item",
          transitionDuration: 0,
        })),
        t.masonryGrid.on("layoutComplete", function (t, n) {
          for (var a = 0; a < n.length; a++) {
            if (0 == n[a].position.x) var i = 0;
            else var i = -200;
            viewportSize.getWidth() < 768 && (i = 0),
              TweenMax.set(e(n[a].element), { y: i });
          }
        }),
        t.masonryGrid.masonry("layout"));
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.common = {
    config: function (e) {
      function n() {
        switch (window.orientation) {
          case -90:
          case 90:
          default:
            setTimeout(function () {
              t.common.fullVh(), t.common.leadVh();
            }, 100);
        }
      }
      $html.addClass("loading"),
        t.common.init(),
        t.common.contactForm(),
        t.common.loadMore(),
        t.isMobile &&
          (t.common.fullVh(), t.common.leadUpVh(), t.common.leadVh()),
        window.addEventListener("orientationchange", n);
    },
    init: function () {
      function t(t, n) {
console.log("1");
        var images = ['IMG_0405.JPG', 'IMG_0412.JPG', 'IMG_0414.JPG' , 'IMG_0408.JPG']; 
        var currentIndex = 0;
        var slideshowContainer = document.querySelector('.slideshow');
    
        function changeBackground() {
          slideshowContainer.style.backgroundImage = "url('" + images[currentIndex] + "')";
    
          currentIndex++;
          if (currentIndex >= images.length) {
            currentIndex = 0;
          }
    
          setTimeout(changeBackground, 1000); }
    
        changeBackground();

        var a = e(t),
          i = a.find(".animated-btn-normal"),
          o = i.find("span"),
          r = a.find(".animated-btn-hover"),
          s = r.find("span"),
          l = a.outerHeight(),
          c = Power3.easeInOut,
          d = Power3.easeOut;
        if ("mouseenter" == n) {
          var m = new TimelineMax();
          return (
            m
              .add("mouseenter")
              .set(o, { y: 0 })
              .set(s, { y: -25 })
              .set(i, { y: 0, autoAlpha: 1 })
              .set(r, { y: l, autoAlpha: 0 })
              .to(o, 0.4, { y: 25, ease: c }, "mouseenter")
              .to(s, 0.4, { y: 0, ease: c }, "mouseenter")
              .to(i, 0.4, { y: -l, autoAlpha: 0, ease: c }, "mouseenter")
              .to(r, 0.4, { y: 0, autoAlpha: 1, ease: c }, "mouseenter"),
            m
          );
        }
        var p = new TimelineMax();
        return (
          p
            .add("mouseleave")
            .set(o, { y: -25 })
            .set(s, { y: 0 })
            .set(i, { y: l, autoAlpha: 0 })
            .set(r, { y: 0, autoAlpha: 1 })
            .to(o, 0.4, { y: 0, ease: d }, "mouseleave")
            .to(s, 0.4, { y: 25, ease: d }, "mouseleave")
            .to(i, 0.4, { y: 0, autoAlpha: 1, ease: d }, "mouseleave")
            .to(r, 0.4, { y: -l, autoAlpha: 0, ease: d }, "mouseleave"),
          p
        );
      }
      function n() {
        this.animationEnter
          ? (this.animationLeave.pause(), this.animationEnter.play(0))
          : (this.animationEnter = t(this, "mouseenter"));
      }
      function a() {
        this.animationLeave
          ? (this.animationEnter.pause(), this.animationLeave.play(0))
          : (this.animationLeave = t(this, "mouseleave"));
      }
      var i = e(".animated-btn");
      (i.animationEnter = void 0),
        (i.animationLeave = void 0),
        i.hover(n, a),
        $body.find("#menu-main-menu a").each(function (t, n) {
          var a = e(this);
          window.location.href == a.attr("href") &&
            a.closest(".menu-item").addClass("active");
        }),
        $body.on("click", "#menu-main-menu a", function (t) {
          var n = e(this);
          n.closest(".nav-list").find("> .menu-item").removeClass("active"),
            n.closest(".menu-item").addClass("active");
        });
    },
    fullVh: function () {
      var t = window.innerHeight,
        n = e("#lead-view.full-vh");
      n.length && (t > 320 ? n.height(t) : n.height(320));
    },
    leadVh: function () {
      var t = parseInt(0.7 * window.innerHeight),
        n = e("#lead-view.lead-vh");
      n.length && (t > 320 ? n.height(t) : n.height(320));
    },
    leadUpVh: function () {
      var t = parseInt(0.8 * window.innerHeight),
        n = e("#lead-view.lead-up-vh");
      n.length && (t > 320 ? n.height(t) : n.height(320));
    },
    contactForm: function () {},
    loadMore: function (n) {
      function a(o) {
        void 0 === o && (o = 1),
          e.get(
            t.url +
              "/wp-json/wp/v2/" +
              ("project-archive" == n ? "projects" : n) +
              "/?page=" +
              o +
              "&per_page=" +
              i,
            function (r) {
              if (((t.json[n] = t.json[n].concat(r)), r.length == i)) a(o + 1);
              else {
                var s = parseInt(
                  e(".filters-list").find(".active > a").attr("data-group-id")
                );
                t.common.generateContent(
                  n,
                  parseInt(e(".load-more-btn").attr("data-max")),
                  s,
                  void 0,
                  !1
                ),
                  t.common.preloader(!1, null, !0);
              }
            }
          );
      }
      if (void 0 === n) return !1;
      var i = 100;
      (t.json[n] = []),
        a(),
        void 0 === t.json.custom_category &&
          e.get(t.url + "/wp-json/wp/v2/custom_category", function (e) {
            t.json.custom_category = e;
          }),
        e(".load-more-btn").on("click", function (a) {
          a.preventDefault(), a.stopPropagation();
          var i = parseInt(
            e(".filters-list").find(".active > a").attr("data-group-id")
          );
          return (
            t.common.generateContent(
              n,
              e(this).attr("data-max"),
              i,
              void 0,
              !0
            ),
            !1
          );
        });
    },
    generateContent: function (n, a, i, o, r) {
      function s(e) {
        var a = e;
        if ("careers" == n) {
          var o = t.json[n][e].acf.summary ? t.json[n][e].acf.summary : "";
          return (
            '<li class="col-sm-6 col-xs-12 sm-animation careers-list-item"><div class="careers-item sm-fup"><h2 class="careers-title section-title">' +
            t.json[n][e].title.rendered +
            '</h2><div class="careers-description">' +
            o +
            '</div><a href="' +
            t.json[n][e].link +
            '" class="read-more slide-more-btn" data-target="#about-lead-info">more details</a></div></li>'
          );
        }
        if ("news" == n) {
          for (
            var r = t.json[n][a].custom_category, s = "", l = "", c = !1, d = 0;
            d < r.length;
            d++
          ) {
            var m = r[d];
            if ((m === i || -1 === i) && void 0 === t.json[n][a].loaded)
              for (var u = 0; u < t.json.custom_category.length; u++) {
                if (m == t.json.custom_category[u].id) {
                  (t.json[n][a].loaded = !0),
                    (s += t.json.custom_category[u].slug),
                    (l +=
                      '<li class="category-item">' +
                      t.json.custom_category[u].name +
                      "</li>"),
                    (c = !0);
                  break;
                }
                if (c) break;
              }
          }
          if (c) {
            var g = t.json[n][a].acf.list_featured_image.sizes.large
              ? t.json[n][a].acf.list_featured_image.sizes.large
              : t.json[n][a].better_featured_image.source_url;
            p +=
              '<li class="js-item shuffle-item sm-animation" data-groups="[' +
              s +
              ']"><a  href="' +
              t.json[n][a].link +
              '" class="news-item"><div class="sma-revealer smr-l st-2"><div class="news-inner rev-content"><div class="news-thumb" style="background-image: url(' +
              g +
              ');"></div><div class="text-holder"><ul class="category-list">' +
              l +
              '</ul><h3 class="title">' +
              t.json[n][a].title.rendered +
              "</h3></div></div></div></a></li>";
          }
          return c;
        }
      }
      if (void 0 === n) return !1;
      (a = parseInt(a)), (i = parseInt(i));
      var l = e(".load-more-list"),
        c = parseInt(l.find("> li").length),
        d = parseInt(t.json[n].length),
        m = 0,
        p = "";
      if (
        (c + a >= d
          ? e(".load-more-btn").addClass("hide")
          : e(".load-more-btn").removeClass("hide"),
        "careers" == n)
      ) {
        for (var u = 0; u < a; u++) {
          var g = c + u;
          if (!(g < d)) break;
          p += s(g);
        }
        var f = e(p);
        if (f)
          try {
            t.masonryGrid.append(f).masonry("appended", f),
              setTimeout(function () {
                t.masonryGrid.masonry("layout"), f.addClass("animate");
              }, 10);
          } catch (e) {
            console.log(e);
          }
      } else if ("news" == n && $body.hasClass("page-template-temp-news")) {
        var m = 0,
          h = e(".filters-list").find(".active > a");
        if (
          (void 0 === t.ns &&
            (t.ns = new Shuffle(document.getElementById("grid"), {
              group: Shuffle.ALL_ITEMS,
              itemSelector: ".js-item",
              sizer: ".news-sizer-element",
              speed: 0,
            })),
          "#all" != h.attr("href"))
        )
          var v = h.attr("data-group");
        else var v = "";
        if (o)
          for (var u = 0; u < t.json[n].length; u++)
            t.json[n][u].loaded = void 0;
        for (var u = 0; u < t.json[n].length && !(s(u) && ++m >= a); u++);
        m < a || c + a >= d
          ? e(".load-more-btn").addClass("hide")
          : e(".load-more-btn").removeClass("hide");
        var c = e(p),
          i = "";
        l.append(c), t.ns.add(c);
        var w,
          y = r;
        t.ns.filter(function (t) {
          var n = t.getAttribute("data-groups");
          return (
            -1 !== n.indexOf(v) &&
              y &&
              (clearTimeout(w),
              (w = setTimeout(function () {
                e(".load-more-list")
                  .find(".shuffle-item--visible")
                  .addClass("animate");
              }, 100))),
            -1 !== n.indexOf(v)
          );
        });
      } else l.append(p);
    },
    preloader: function (n, a, i) {
      var o = e("#preloader");
      if (n) {
        $html.addClass("loading");
        var r = new Date();
        (t.time = r.getTime()),
          (t.loading = !0),
          t.preloaderAnimation.play(0),
          setTimeout(function () {
            TweenMax.to(o, 0.5, {
              autoAlpha: 1,
              visibility: "visible",
              onComplete: function () {
                if (a) return a.resolve(), t.menu.closeNav(), a.promise;
              },
            });
          }, 0);
      } else if (
        !$body.hasClass("page-template-temp-news") ||
        ($body.hasClass("page-template-temp-news") && void 0 !== i)
      ) {
        var r = new Date(),
          s = r.getTime() - t.time > 1500 ? 0 : r.getTime() - t.time;
        s <= 900 && (s = 900),
          setTimeout(function () {
            e(window).scrollTop(0),
              TweenMax.to(o, 0.5, {
                autoAlpha: 0,
                visibility: "hidden",
                onComplete: function () {
                  $html.removeClass("loading"),
                    (t.loading = !1),
                    classie.add(t.UI.pageWrapper, "site-loaded"),
                    t.Animations.config();
                },
              });
          }, s);
      }
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.contact = {
    config: function (e) {
      t.contact.init(e);
    },
    init: function (e) {
      function n() {
        "undefined" == typeof google
          ? setTimeout(function () {
              n();
            }, 100)
          : t.contact.initMap();
      }
      n();
    },
    initMap: function () {
      function n() {
        var e,
          n = {
            zoom: t.json.google_map.zoom,
            center: new google.maps.LatLng(53.539552, -3.395625),
            styles: t.json.google_map.theme,
            scrollwheel: !1,
          },
          i = document.getElementById("map"),
          o = new google.maps.Map(i, n);
        for (e = 0; e < a.length; e++)
          new google.maps.Marker({
            position: new google.maps.LatLng(a[e][1], a[e][2]),
            map: o,
          });
      }
      for (
        var a = [],
          i = $body.find("#map").attr("data-markers"),
          o = i.split("|"),
          r = 0;
        r < o.length;
        r++
      ) {
        var s = o[r].split(",");
        a.push(s);
      }
      void 0 === t.json.google_map
        ? e.get(t.url + "/wp-json/wp/v2/pages/21", function (e) {
            (t.json.google_map = {}),
              (t.json.google_map.zoom = parseInt(e.acf.zoom)),
              (t.json.google_map.theme = JSON.parse(e.acf.theme)),
              n();
          })
        : n();
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.home = {
    config: function (e) {
      t.home.init(e);
    },
    init: function () {
      t.home.video(), t.home.testimonials(), t.home.wecare();
    },
    video: function () {
      e(".lead-view__video-play").click(function () {
        e(".lead-view__main-video").toggleClass("open"),
          e("#site-header").toggleClass("video-open"),
          e(".lead-view__main-video video").trigger("play");
      }),
        e(".close-video").click(function () {
          e(".lead-view__main-video").toggleClass("open"),
            e("#site-header").toggleClass("video-open"),
            e(".lead-view__main-video video").trigger("pause");
        });
    },
    testimonials: function () {
      new Swiper(".home-testimonials", {
        autoplay: 4e3,
        loop: !0,
        speed: 1e3,
        mousewheel: !1,
        effect: "fade",
        autoHeight: !0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    },
    wecare: function () {
      function t(t) {
        (this.dd = t),
          (this.slideTarget = e(this.dd).attr("data-target")),
          (this.outerTargetHeight = e(this.slideTarget).height()),
          this.properHeight,
          (this.innerTargetnHeight = e(this.slideTarget)
            .find(".vslide-inner")
            .height()),
          this.initEvents();
      }
      var n = new Swiper("#testimonial-slider", {
          direction: "vertical",
          autoplay: { delay: 3e3 },
          autoplayDisableOnInteraction: !1,
          speed: 1e3,
          effect: "coverflow",
          breakpoints: { 767: { effect: "fade", direction: "horizontal" } },
          onInit: function () {},
        }),
        a = new ScrollMagic.Controller(),
        i = [];
      i.push(
        new ScrollMagic.Scene({
          triggerElement: "#testimonial-slider",
          triggerHook: 1,
        })
          .on("enter", function (e) {})
          .on("leave", function (e) {})
      ),
        a.addScene(i),
        e(".swiper-container .inner-content").on("mouseenter", function () {}),
        e(".swiper-container .inner-content").on("mouseleave", function () {});
      var o = e("#testimonial-slider").find(".custom-bullets");
      o.on("click", "a", function () {
        console.log();
        var t = parseInt(e(this).attr("href"));
        return n.slideTo(t), !1;
      }),
        n.on("slideChange", function () {
          var t = n.activeIndex;
          o.each(function (n) {
            var a = e(this).find("li");
            a.removeClass("pagination-item-active"),
              e(a[t]).addClass("pagination-item-active");
          });
        }),
        (t.prototype = {
          initEvents: function () {
            var t = this;
            e(this.dd).on("click", function () {
              e(this).toggleClass("open"),
                e(this).hasClass("open")
                  ? ((t.properHeight = t.innerTargetnHeight),
                    e(t.slideTarget).animate({ height: t.properHeight }, 200),
                    e(this).text("read less"))
                  : ((t.properHeight = t.outerTargetHeight),
                    e(t.slideTarget).animate({ height: t.properHeight }, 200),
                    e(this).text("read more"));
            });
          },
        });
      new t(e(".slide-more-btn"));
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  function n(e) {
    (this.dd = e),
      (this.placeholder = this.dd.children("span")),
      (this.opts = this.dd.find("ul.dropdown > li")),
      (this.val = ""),
      (this.index = -1),
      this.initEvents();
  }
  (n.prototype = {
    initEvents: function () {
      var t = this;
      t.dd.on("click", function (t) {
        e(this).toggleClass("active");
      }),
        t.opts.on("click", function () {
          var n = e(this);
          (t.val = n.text()),
            (t.index = n.index()),
            t.placeholder.text("Show: " + t.val);
        });
    },
    getValue: function () {
      return this.val;
    },
    getIndex: function () {
      return this.index;
    },
  }),
    (t.news = {
      config: function (n) {
        t.news.init(n),
          e("body").hasClass("page-template-temp-news")
            ? (t.news.categoryNews(), t.news.bindingEvents())
            : t.news.singleNews();
      },
      init: function (e) {
        // console.log("news working"),
          $body.hasClass("page-template-temp-news") && t.common.loadMore(e);
      },
      bindingEvents: function () {
        e("#filter-btn").on("click", function () {
          e("#news-filter").toggleClass("active");
        });
      },
      singleNews: function () {
        e(".news-category").on("click", "a", function (t) {
          return Barba.Pjax.goTo(e(this)[0].href), !1;
        });
      },
      categoryNews: function (a) {
        var i = window.shuffle,
          o = e("#news-filter");
        if (
          ((t.ns = null),
          (t.ns = new i(document.getElementById("grid"), {
            group: i.ALL_ITEMS,
            itemSelector: ".js-item",
            sizer: ".news-sizer-element",
            speed: 0,
          })),
          window.location.hash)
        ) {
          var r = window.location.hash,
            s = r.replace("#", "");
          o.find("a").parent().removeClass("active"),
            "#all" == r || "#" == r
              ? ((s = ""), o.find('a[href="#all"]').parent().addClass("active"))
              : o
                  .find('a[href="' + r + '"]')
                  .parent()
                  .addClass("active"),
            t.ns.filter(function (e) {
              return -1 !== e.getAttribute("data-groups").indexOf(s);
            });
        }
        if (
          (o.on("click", "a", function (n) {
            var a = e(this);
            if (
              (o.find("a").parent().removeClass("active"),
              a.parent().addClass("active"),
              "#all" != a.attr("href"))
            ) {
              a.attr("data-group");
            } else;
            e(".load-more-list").find("li").remove(),
              t.common.generateContent(
                "news",
                parseInt(e(".load-more-btn").attr("data-max")),
                parseInt(a.attr("data-group-id")),
                !0,
                !0
              );
          }),
          window.innerWidth < 768)
        ) {
          new n(e("#fdd"));
        }
        e(".filter-menu").on("click", "a", function (e) {
          return !1;
        });
      },
    });
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.project = {
    config: function (e) {
      t.project.init(e), t.project.categoryVh();
    },
    init: function (n) {
      e("body").hasClass("tax-projects-category")
        ? t.project.grid(n)
        : e("body").hasClass("single-projects")
        ? t.project.single(n)
        : e("body").hasClass("page-template-temp-projects") &&
          t.project.category(n);
    },
    grid: function (t) {
      function n(e, t) {
        if (viewportSize.getWidth() > 1024) {
          void 0 !== f.animations[e] && f.animations[e].pause();
          var n = f.images[e],
            a = t ? 1 : f.scale,
            i = t ? 1 : 0;
          f.animations[e] = TweenMax.fromTo(
            n,
            f.time,
            { globalAlpha: n.globalAlpha, scale: n.scale },
            {
              globalAlpha: i,
              scale: a,
              ease: f.ease,
              onUpdate: function () {
                if (0 != e)
                  var t = c * n.scale,
                    a = d * n.scale,
                    i = (c - t) / 2 - (c - s) / 2,
                    o = (d - a) / 2 - (d - l) / 2;
                else
                  var t = m * n.scale,
                    a = p * n.scale,
                    i = (m - t) / 2 - (m - s) / 2,
                    o = (p - a) / 2 - (p - l) / 2;
                (h.globalAlpha = n.globalAlpha), h.drawImage(n, i, o, t, a);
              },
            }
          );
        }
      }
      function a() {
        (f.heroRatio[0] = parseInt(
          e("#projects-category-lead-view").attr("data-background-width")
        )),
          (f.heroRatio[1] = parseInt(
            e("#projects-category-lead-view").attr("data-background-height")
          )),
          i();
      }
      function i() {
        (s = f.container.outerWidth()),
          (l = f.container.outerHeight()),
          s / l < f.ratio[0] / f.ratio[1]
            ? ((d = l), (c = Math.floor(l * (f.ratio[0] / f.ratio[1])) + 1))
            : ((c = s), (d = Math.floor(s / (f.ratio[0] / f.ratio[1])) + 1)),
          s / l < f.heroRatio[0] / f.heroRatio[1]
            ? ((p = l),
              (m = Math.floor(l * (f.heroRatio[0] / f.heroRatio[1])) + 1))
            : ((m = s),
              (p = Math.floor(s / (f.heroRatio[0] / f.heroRatio[1])) + 1)),
          f.c.attr("width", s).attr("height", l),
          n(0, !0);
      }
      if (viewportSize.getWidth() <= 1024) {
        var o = parseInt(0.7 * viewportSize.getHeight()),
          r = e("#projects-category-lead-view");
        r.length && (o > 320 ? r.height(o) : r.height(320));
      }
      var s,
        l,
        c,
        d,
        m,
        p,
        u = e("#project-list"),
        g = e(window),
        f = {
          container: u,
          items: u.find(".cover-bg"),
          c: e("#bg"),
          images: [],
          animations: [],
          ratio: [1920, 1080],
          heroRatio: [800, 860],
          scale: 1.1,
          time: 1.35,
          ease: Power4.easeOut,
        },
        h = f.c[0].getContext("2d"),
        v = !1;
      (f.images[0] = new Image()),
        (f.images[0].src = e("#projects-category-lead-view").attr(
          "data-background"
        )),
        (f.images[0].globalAlpha = 0),
        (f.images[0].scale = f.scale),
        (f.images[0].onload = function () {
          a();
        }),
        f.items.each(function (t, n) {
          var a = parseInt(t + 1);
          (f.images[a] = new Image()),
            (f.images[a].src = e(this).attr("data-background")),
            (f.images[a].globalAlpha = 0),
            (f.images[a].scale = f.scale);
        }),
        f.items.on("mouseenter", function (t) {
          var a = parseInt(e(this).attr("data-item"));
          16 !== a ? n(a, !0) : n(0, !0), v || ((v = !0), n(0, !1));
        }),
        f.items.on("mouseleave", function (t) {
          var a = parseInt(e(this).attr("data-item"));
          16 !== a ? n(a, !1) : n(0, !1);
        }),
        u.on("mouseenter", function (e) {
          n(0, !1);
        }),
        u.on("mouseleave", function (e) {
          n(0, !0);
        });
      var w = debounce(function () {
        i();
      }, 50);
      g.resize(function (e) {
        w();
      });
    },
    single: function (t) {
      function n() {
        e("#project-lead-nav").length &&
          (clearInterval(o),
          i(),
          window.addEventListener("resize", i),
          (o = 0));
      }
      var a = parseInt($body.find("#images-slider .swiper-slide").length) > 1,
        i =
          (new Swiper("#images-slider", {
            autoplay: 4e3,
            loop: a,
            speed: 1e3,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          }),
          function () {
            if (window.innerWidth >= 1200) {
              var t = window.innerWidth,
                n = parseInt((t - 1170) / 2),
                a = parseInt(e("#details-thumb-holder").width()),
                i = t - n - a;
              setTimeout(function () {
                e("#project-lead-nav")
                  .find(".nav-list")
                  .css({ "max-width": i });
              }, 100);
            }
          }),
        o = setInterval(n, 5);
    },
    category: function (t) {
      e(
        '.projects-catetory-item[data-hash="' + window.location.hash + '"]'
      ).addClass("active"),
        e("#projects-wrapper").on(
          "mouseenter",
          ".projects-catetory-item:not(.active)",
          function (t) {
            e(".projects-catetory-item").removeClass("active");
          }
        );
    },
    categoryVh: function () {
      function n() {
        var t = viewportSize.getHeight(),
          n = viewportSize.getWidth();
        (n < 768 || n <= 1024) &&
          t > 400 &&
          e("#projects-wrapper").css({ height: t - 134 });
      }
      function a() {
        switch (window.orientation) {
          case -90:
          case 90:
          default:
            setTimeout(function () {
              n();
            }, 100);
        }
      }
      setTimeout(function () {
        e("#projects-wrapper").length &&
          (n(), window.addEventListener("orientationchange", a)),
          t.isMobile || window.addEventListener("resize", a);
      }, 300);
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.projectarchive = {
    config: function (e) {
      t.projectarchive.init(e);
    },
    init: function (e) {
      $body.hasClass("page-template-temp-project-archive") &&
        (console.log(e), t.common.loadMore(e));
    },
  };
})(jQuery, App),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  t.UI = {
    config: function (e) {
      t.UI.stickyHeader(),
        (t.UI.pageWrapper = document.getElementById("page-wrapper"));
    },
    scrollToPageContent: function () {
      e("#page-content").length &&
        e(".hero-scroll-down")
          .find(".scroll-down-icon")
          .on("click", function () {
            TweenMax.to(window, 1, {
              scrollTo: { y: "#page-content" },
              ease: new Ease(BezierEasing(0.82, 0.01, 0.17, 1)),
            });
          });
    },
    stickyHeader: function () {
      function n() {
        requestAnimationFrame(a);
      }
      function a() {
        var e = window.scrollY || window.pageYOffset;
        e > d
          ? d >= 0 && (e > l && i(), (c = !0))
          : e < d
          ? (o(e), (c = !1))
          : c
          ? i()
          : o(e),
          e < l + 100
            ? r.removeClass("scroll-position")
            : r.addClass("scroll-position"),
          (d = e);
      }
      function i() {
        classie.has(t.UI.pageWrapper, "show-menu") ||
          r.removeClass("nav-down").addClass("nav-up");
      }
      function o(t) {
        t + e(window).height() < e(document).height() &&
          r.removeClass("nav-up").addClass("nav-down");
      }
      var r = e("body"),
        s = e("#site-header"),
        l = s.height(),
        c = !1,
        d = -1;
      window.addEventListener("scroll", n, !1);
    },
  };
})(jQuery, App),
  (function (e) {
    "use strict";
    function t(e) {
      return new RegExp("(^|\\s+)" + e + "(\\s+|$)");
    }
    function n(e, t) {
      (a(e, t) ? o : i)(e, t);
    }
    var a, i, o;
    "classList" in document.documentElement
      ? ((a = function (e, t) {
          return e.classList.contains(t);
        }),
        (i = function (e, t) {
          e.classList.add(t);
        }),
        (o = function (e, t) {
          e.classList.remove(t);
        }))
      : ((a = function (e, n) {
          return t(n).test(e.className);
        }),
        (i = function (e, t) {
          a(e, t) || (e.className = e.className + " " + t);
        }),
        (o = function (e, n) {
          e.className = e.className.replace(t(n), " ");
        }));
    var r = {
      hasClass: a,
      addClass: i,
      removeClass: o,
      toggleClass: n,
      has: a,
      add: i,
      remove: o,
      toggle: n,
    };
    "function" == typeof define && define.amd ? define(r) : (e.classie = r);
  })(window),
  jQuery.noConflict();
var App = App || {};
!(function (e, t) {
  function n() {
    l.addEventListener("click", o),
      c && c.addEventListener("click", o),
      s.addEventListener("click", function (e) {
        var t = e.target;
        d && t !== l && o();
      });
  }
  function a() {
    classie.add(r, "menu-back"),
      classie.remove(l, "open"),
      classie.remove(r, "show-menu"),
      classie.remove(r, "menu-scrollable"),
      setTimeout(function () {
        e("body").removeClass("show-menu-z"),
          path.attr("d", initialPath),
          (isAnimating = !1);
      }, 500);
  }
  function i() {
    if (isAnimating) return !1;
    (isAnimating = !0), a(), (d = !1), classie.remove(r, "site-loaded");
  }
  function o() {
    if (isAnimating) return !1;
    (isAnimating = !0),
      d
        ? a()
        : (classie.add(r, "show-menu-z"),
          classie.remove(l, "menu-back"),
          classie.add(r, "show-menu"),
          classie.add(l, "open"),
          setTimeout(function () {
            classie.add(r, "menu-scrollable");
          }, 350),
          path.animate({ path: pathOpen }, 400, mina.easeinout, function () {
            isAnimating = !1;
          })),
      (d = !d);
  }
  var r = document.getElementById("page-wrapper"),
    s = document.querySelector(".content-wrapper"),
    l = document.getElementById("main-menu-btn"),
    c = document.getElementById("close-button"),
    d = !1,
    m = document.getElementById("morph-shape"),
    p = Snap(m.querySelector("svg"));
  (path = p.select("path")),
    (initialPath = this.path.attr("d")),
    (pathOpen = m.getAttribute("data-morph-open")),
    (isAnimating = !1),
    (function () {
      n();
    })(),
    (t.menu = { closeNav: i });
})(jQuery, App),
  jQuery.noConflict(),
  (function (e, t) {
    function n() {
      TweenMax.fromTo(
        o,
        0.75,
        { drawSVG: "0" },
        { drawSVG: "0 100%", ease: Power2.easeIn, onComplete: a }
      );
    }
    function a() {
      r < 1 &&
        TweenMax.to(o, 0.75, {
          drawSVG: "100% 100%",
          ease: Power1.easeOut,
          onComplete: n,
        }),
        r++;
    }
    ($window = e(window)),
      ($body = e("body")),
      ($html = e("html")),
      (t.Body = $body),
      (t.isMobile = mobilecheck()),
      (t.json = {}),
      (t.url = e("#site-logo").attr("href")),
      (t.loading = !0);
    var i = new Date();
    (t.time = i.getTime()),
      (e.browser.msedge || e.browser.msie) && e("html").addClass("msie"),
      (e.browser.ipad || e.browser.iphone) &&
        $html.addClass("mobile-device-ios"),
      e("body").on("click", ".barba-follow-link", function (t) {
        return (
          t.preventDefault(),
          t.stopPropagation(),
          Barba.Pjax.goTo(e(this).attr("href")),
          !1
        );
      }),
      (t.preloaderAnimation = new TimelineMax({ repeatDelay: 0.5 }));
    var o = e("#preloader #circle"),
      r = 0;
    TweenMax.set(o, { drawSVG: 0 }),
      t.preloaderAnimation
        .fromTo(
          e("#preloader #triangle-grey"),
          0.5,
          { y: "50px" },
          { autoAlpha: 1, y: "0px" }
        )
        .fromTo(
          e("#preloader #triangle-red"),
          0.5,
          { y: "50px" },
          { autoAlpha: 1, y: "0px" },
          "-=0.25"
        )
        .set(circle, { autoAlpha: 1 })
        .fromTo(
          o,
          0.75,
          { drawSVG: "0" },
          { drawSVG: "0 100%", ease: Power2.easeIn, onComplete: a }
        ),
      t.preloaderAnimation.play(),
      t.isMobile && $body.addClass("mobile-device"),
      e(window).on("load", function () {
        (i = new Date()), t.common.preloader(!1);
      }),
      t.UI.config(),
      t.barba.config();
  })(jQuery, App);
//  $(document).ready(function () {
// 		console.log("1");
//         changeBackground();
// 		console.log("2");
//   });
 
// window.onload = function () {
// 	console.log("1");
//         changeBackground();
// 		console.log("2");
//     };

  