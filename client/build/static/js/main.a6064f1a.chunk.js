(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    46: function(e, t, a) {
      e.exports = a(80);
    },
    80: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        o = a(37),
        l = a.n(o),
        c = a(2),
        s = a(4),
        i = a(14),
        u = a(42),
        m = a.n(u),
        p = a(43),
        d = a.n(p),
        h = a(3),
        E = Object(i.c)({
          books: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "ADD_BOOK":
              case "CLEAR_NEWBOOK":
                return Object(h.a)({}, e, { newbook: t.payload });
              case "GET_BOOK":
                return Object(h.a)({}, e, { book: t.payload });
              case "UPDATE_BOOK":
                return Object(h.a)({}, e, {
                  updateBook: t.payload.success,
                  book: t.payload.doc
                });
              case "DELETE_BOOK":
                return Object(h.a)({}, e, { postDeleted: t.payload });
              case "CLEAR_BOOK":
                return Object(h.a)({}, e, {
                  updateBook: t.payload.updateBook,
                  book: t.payload.book,
                  postDeleted: t.payload.postDeleted
                });
              case "GET_BOOKS":
                return Object(h.a)({}, e, { list: t.payload });
              case "GET_BOOK_W_REVIEWER":
              case "CLEAR_BOOK_W_REVIEWER":
                return Object(h.a)({}, e, {
                  book: t.payload.book,
                  reviewer: t.payload.reviewer
                });
              default:
                return e;
            }
          },
          user: function() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case "USER_LOGIN":
              case "USER_AUTH":
                return Object(h.a)({}, e, { login: t.payload });
              case "GET_USER_POSTS":
                return Object(h.a)({}, e, { userPosts: t.payload });
              case "GET_USERS":
                return Object(h.a)({}, e, { users: t.payload });
              case "USER_REGISTER":
                return Object(h.a)({}, e, {
                  register: t.payload.success,
                  users: t.payload.users
                });
              default:
                return e;
            }
          }
        }),
        v = a(5),
        b = a(6),
        f = a(8),
        y = a(7),
        g = a(9),
        O = a(20),
        k = a.n(O),
        _ = a(44),
        w = a.n(_);
      var j = Object(s.b)(function(e) {
          return { user: e.user };
        })(function(e) {
          var t = e.user,
            a = [
              {
                type: "navItem",
                icon: "home",
                text: "Home",
                link: "/",
                restricted: !1
              },
              {
                type: "navItem",
                icon: "file-text-o",
                text: "My Profile",
                link: "/user",
                restricted: !0
              },
              {
                type: "navItem",
                icon: "file-text-o",
                text: "Add Admins",
                link: "/user/register",
                restricted: !0
              },
              {
                type: "navItem",
                icon: "file-text-o",
                text: "Login",
                link: "/login",
                restricted: !1,
                exclude: !0
              },
              {
                type: "navItem",
                icon: "file-text-o",
                text: "My Reviews",
                link: "/user/user-reviews",
                restricted: !0
              },
              {
                type: "navItem",
                icon: "file-text-o",
                text: "Add Reviews",
                link: "/user/add",
                restricted: !0
              },
              {
                type: "navItem",
                icon: "file-text-o",
                text: "Logout",
                link: "/user/logout",
                restricted: !0
              }
            ],
            n = function(e, t) {
              return r.a.createElement(
                "div",
                { key: t, className: e.type },
                r.a.createElement(
                  c.b,
                  { to: e.link },
                  r.a.createElement(k.a, { name: e.icon }),
                  e.text
                )
              );
            };
          return r.a.createElement(
            "div",
            null,
            t.login
              ? a.map(function(e, a) {
                  return t.login.isAuth
                    ? e.exclude
                      ? null
                      : n(e, a)
                    : e.restricted
                    ? null
                    : n(e, a);
                })
              : null
          );
        }),
        N = function(e) {
          return r.a.createElement(
            w.a,
            {
              showNav: e.showNav,
              onHideNav: e.onHideNav,
              navStyle: { background: "#242424", maxWidth: "220px" }
            },
            r.a.createElement(j, null)
          );
        },
        I = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).state = { showNav: !1 }),
              (a.onHideNav = function() {
                a.setState({ showNav: !1 });
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "render",
                value: function() {
                  var e = this;
                  return r.a.createElement(
                    "header",
                    null,
                    r.a.createElement(
                      "div",
                      { className: "open_nav" },
                      r.a.createElement(k.a, {
                        name: "bars",
                        onClick: function() {
                          return e.setState({ showNav: !0 });
                        },
                        style: {
                          color: "#fff",
                          padding: "10px",
                          cursor: "pointer"
                        }
                      })
                    ),
                    r.a.createElement(N, {
                      showNav: this.state.showNav,
                      onHideNav: function() {
                        return e.onHideNav();
                      }
                    }),
                    r.a.createElement(
                      c.b,
                      { to: "/", className: "logo" },
                      "The Book Shelf"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component),
        S = function(e) {
          return r.a.createElement(
            "div",
            null,
            r.a.createElement(I, null),
            r.a.createElement("div", null, e.children)
          );
        },
        C = a(21),
        x = a(12),
        R = a.n(x);
      function A() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10,
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "asc",
          n =
            arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
        return {
          type: "GET_BOOKS",
          payload: R.a
            .get(
              "/api/books?limit="
                .concat(e, "&skip=")
                .concat(t, "&order=")
                .concat(a)
            )
            .then(function(e) {
              return n
                ? [].concat(Object(C.a)(n), Object(C.a)(e.data))
                : e.data;
            })
        };
      }
      var B = function(e) {
          return r.a.createElement(
            c.b,
            { to: "/books/".concat(e._id), className: "book_item" },
            r.a.createElement(
              "div",
              { className: "book_header" },
              r.a.createElement("h2", null, e.name)
            ),
            r.a.createElement(
              "div",
              { className: "book_items" },
              r.a.createElement("div", { className: "book_author" }, e.author),
              r.a.createElement(
                "div",
                { className: "book_bubble" },
                r.a.createElement("strong", null, "Price"),
                " $",
                e.price
              ),
              r.a.createElement(
                "div",
                { className: "book_bubble" },
                r.a.createElement("strong", null, "Pages"),
                " ",
                e.pages
              ),
              r.a.createElement(
                "div",
                { className: "book_bubble rating" },
                r.a.createElement("strong", null, "Rating"),
                " ",
                e.rating
              )
            )
          );
        },
        P = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(o))
              )).renderItems = function(e) {
                return e.list
                  ? e.list.map(function(e) {
                      return r.a.createElement(
                        B,
                        Object.assign({}, e, { key: e._id })
                      );
                    })
                  : null;
              }),
              (a.loadmore = function() {
                var e = a.props.books.list.length;
                a.props.dispatch(A(1, e, "desc", a.props.books.list));
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.props.dispatch(A(1, 0, "desc"));
                }
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    "div",
                    null,
                    this.renderItems(this.props.books),
                    r.a.createElement(
                      "div",
                      { className: "loadmore", onClick: this.loadmore },
                      "Load More"
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var U = Object(s.b)(function(e) {
          return { books: e.books };
        })(P),
        W = function() {
          return r.a.createElement("div", null, r.a.createElement(U, null));
        },
        T = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(o))
              )).renderBook = function(e) {
                return e.book
                  ? r.a.createElement(
                      "div",
                      { className: "br_container" },
                      r.a.createElement(
                        "div",
                        { className: "br_header" },
                        r.a.createElement("h2", null, e.book.name),
                        r.a.createElement("h5", null, e.book.author),
                        r.a.createElement(
                          "div",
                          { className: "br_reviewer" },
                          r.a.createElement("span", null, "Review by:"),
                          " ",
                          e.reviewer.name,
                          " ",
                          e.reviewer.lastname
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "br_review" },
                        e.book.review
                      ),
                      r.a.createElement(
                        "div",
                        { className: "br_box" },
                        r.a.createElement(
                          "div",
                          { className: "left" },
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement("span", null, "Pages:"),
                            " ",
                            e.book.pages
                          ),
                          r.a.createElement(
                            "div",
                            null,
                            r.a.createElement("span", null, "Price:"),
                            " ",
                            e.book.price
                          )
                        ),
                        r.a.createElement(
                          "div",
                          { className: "right" },
                          r.a.createElement("span", null, "Rating"),
                          r.a.createElement("div", null, e.book.rating, "/5")
                        )
                      )
                    )
                  : null;
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.props.dispatch(
                    (function(e) {
                      var t = R.a.get("/api/getBook?id=".concat(e));
                      return function(e) {
                        t.then(function(t) {
                          var a = t.data;
                          R.a
                            .get("/api/getReviewer?id=".concat(a.ownerId))
                            .then(function(t) {
                              var n = t.data;
                              e({
                                type: "GET_BOOK_W_REVIEWER",
                                payload: { book: a, reviewer: n }
                              });
                            });
                        });
                      };
                    })(this.props.match.params.id)
                  );
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.dispatch({
                    type: "CLEAR_BOOK_W_REVIEWER",
                    payload: { book: {}, reviewer: {} }
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.books;
                  return r.a.createElement("div", null, this.renderBook(e));
                }
              }
            ]),
            t
          );
        })(n.Component);
      var D = Object(s.b)(function(e) {
          return { books: e.books };
        })(T),
        L = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).state = { email: "", password: "", error: "", success: !1 }),
              (a.handleInputEmail = function(e) {
                a.setState({ email: e.target.value });
              }),
              (a.handleInputPassword = function(e) {
                a.setState({ password: e.target.value });
              }),
              (a.submitForm = function(e) {
                e.preventDefault(),
                  a.props.dispatch(
                    (function(e) {
                      var t = e.email,
                        a = e.password;
                      return {
                        type: "USER_LOGIN",
                        payload: R.a
                          .post("/api/login", { email: t, password: a })
                          .then(function(e) {
                            return e.data;
                          })
                      };
                    })(a.state)
                  );
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  e.user.login.isAuth && this.props.history.push("/user");
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.user;
                  return r.a.createElement(
                    "div",
                    { className: "rl_container" },
                    r.a.createElement(
                      "form",
                      { onSubmit: this.submitForm },
                      r.a.createElement("h2", null, "Log in here"),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "email",
                          placeholder: "Enter your email",
                          value: this.state.email,
                          onChange: this.handleInputEmail
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "password",
                          placeholder: "Enter your password",
                          value: this.state.password,
                          onChange: this.handleInputPassword
                        })
                      ),
                      r.a.createElement("button", { type: "submit" }, "Log in"),
                      r.a.createElement(
                        "div",
                        { className: "error" },
                        e.login
                          ? r.a.createElement("div", null, e.login.message)
                          : null
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var K = Object(s.b)(function(e) {
          return console.log(e), { user: e.user };
        })(L),
        G = function(e, t) {
          var a = (function(a) {
            function n() {
              var e, t;
              Object(v.a)(this, n);
              for (
                var a = arguments.length, r = new Array(a), o = 0;
                o < a;
                o++
              )
                r[o] = arguments[o];
              return (
                ((t = Object(f.a)(
                  this,
                  (e = Object(y.a)(n)).call.apply(e, [this].concat(r))
                )).state = { loading: !0 }),
                t
              );
            }
            return (
              Object(g.a)(n, a),
              Object(b.a)(n, [
                {
                  key: "componentWillMount",
                  value: function() {
                    this.props.dispatch({
                      type: "USER_AUTH",
                      payload: R.a.get("/api/auth").then(function(e) {
                        return e.data;
                      })
                    });
                  }
                },
                {
                  key: "componentWillReceiveProps",
                  value: function(e) {
                    this.setState({ loading: !1 }),
                      e.user.login.isAuth
                        ? !1 === t && this.props.history.push("/user")
                        : !0 === t && this.props.history.push("/login");
                  }
                },
                {
                  key: "render",
                  value: function() {
                    return this.state.loading
                      ? r.a.createElement(
                          "div",
                          { className: "loader" },
                          "Loading..."
                        )
                      : r.a.createElement(
                          e,
                          Object.assign({}, this.props, {
                            user: this.props.user
                          })
                        );
                  }
                }
              ]),
              n
            );
          })(n.Component);
          return Object(s.b)(function(e) {
            return { user: e.user };
          })(a);
        },
        M = function(e) {
          var t = e.user.login;
          return r.a.createElement(
            "div",
            { className: "user_container" },
            r.a.createElement(
              "div",
              { className: "avatar" },
              r.a.createElement("img", {
                src: "/images/avatar.png",
                alt: "avatar"
              })
            ),
            r.a.createElement(
              "div",
              { className: "nfo" },
              r.a.createElement(
                "div",
                null,
                r.a.createElement("span", null, "Name:"),
                " ",
                t.name
              ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement("span", null, "Lastname:"),
                " ",
                t.lastname
              ),
              r.a.createElement(
                "div",
                null,
                r.a.createElement("span", null, "Email:"),
                " ",
                t.email
              )
            )
          );
        },
        F = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                formdata: {
                  name: "",
                  author: "",
                  review: "",
                  pages: "",
                  rating: "",
                  price: ""
                }
              }),
              (a.handleInput = function(e, t) {
                var n = Object(h.a)({}, a.state.formdata);
                (n[t] = e.target.value), a.setState({ formdata: n });
              }),
              (a.submitForm = function(e) {
                var t;
                e.preventDefault(),
                  a.props.dispatch(
                    ((t = Object(h.a)({}, a.state.formdata, {
                      ownerId: a.props.user.login.id
                    })),
                    {
                      type: "ADD_BOOK",
                      payload: R.a.post("/api/book", t).then(function(e) {
                        return e.data;
                      })
                    })
                  );
              }),
              (a.showNewBook = function(e) {
                return e.post
                  ? r.a.createElement(
                      "div",
                      { className: "conf_link" },
                      "Cool!!",
                      " ",
                      r.a.createElement(
                        c.b,
                        { to: "/books/".concat(e.bookId) },
                        "Click the link to see the post"
                      )
                    )
                  : null;
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.dispatch({ type: "CLEAR_NEWBOOK", payload: {} });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.formdata;
                  return r.a.createElement(
                    "div",
                    { className: "rl_container article" },
                    r.a.createElement(
                      "form",
                      { onSubmit: this.submitForm },
                      r.a.createElement("h2", null, "Add a review"),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "text",
                          placeholder: "Enter name",
                          value: t.name,
                          onChange: function(t) {
                            return e.handleInput(t, "name");
                          }
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "text",
                          placeholder: "Enter author",
                          value: t.author,
                          onChange: function(t) {
                            return e.handleInput(t, "author");
                          }
                        })
                      ),
                      r.a.createElement("textarea", {
                        value: t.review,
                        onChange: function(t) {
                          return e.handleInput(t, "review");
                        }
                      }),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "number",
                          placeholder: "Enter pages",
                          value: t.pages,
                          onChange: function(t) {
                            return e.handleInput(t, "pages");
                          }
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement(
                          "select",
                          {
                            value: t.rating,
                            onChange: function(t) {
                              return e.handleInput(t, "rating");
                            }
                          },
                          r.a.createElement("option", { val: "1" }, "1"),
                          r.a.createElement("option", { val: "2" }, "2"),
                          r.a.createElement("option", { val: "3" }, "3"),
                          r.a.createElement("option", { val: "4" }, "4"),
                          r.a.createElement("option", { val: "5" }, "5")
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "number",
                          placeholder: "Enter price (\u20ac)",
                          value: t.price,
                          onChange: function(t) {
                            return e.handleInput(t, "price");
                          }
                        })
                      ),
                      r.a.createElement(
                        "button",
                        { type: "submit" },
                        "Add review"
                      ),
                      this.props.books.newbook
                        ? this.showNewBook(this.props.books.newbook)
                        : null
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var H = Object(s.b)(function(e) {
          return { books: e.books };
        })(F),
        V = a(45),
        Y = a.n(V),
        J = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(o))
              )).showUserPosts = function(e) {
                return e.userPosts
                  ? e.userPosts.map(function(e, t) {
                      return r.a.createElement(
                        "tr",
                        { key: t },
                        r.a.createElement(
                          "td",
                          null,
                          r.a.createElement(
                            c.b,
                            { to: "/user/edit-post/".concat(e._id) },
                            e.name
                          )
                        ),
                        r.a.createElement("td", null, e.author),
                        r.a.createElement(
                          "td",
                          null,
                          Y()(e.createAt).format("MM/DD/YY")
                        )
                      );
                    })
                  : null;
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  var e;
                  this.props.dispatch(
                    ((e = this.props.user.login.id),
                    {
                      type: "GET_USER_POSTS",
                      payload: R.a
                        .get("/api/user_posts?user=".concat(e))
                        .then(function(e) {
                          return e.data;
                        })
                    })
                  );
                }
              },
              {
                key: "render",
                value: function() {
                  console.log(this.props);
                  var e = this.props.user;
                  return r.a.createElement(
                    "div",
                    { className: "user_posts" },
                    r.a.createElement("h4", null, "Your reviews:"),
                    r.a.createElement(
                      "table",
                      null,
                      r.a.createElement(
                        "thead",
                        null,
                        r.a.createElement(
                          "tr",
                          null,
                          r.a.createElement("th", null, "Name"),
                          r.a.createElement("th", null, "Author"),
                          r.a.createElement("th", null, "Date")
                        )
                      ),
                      r.a.createElement("tbody", null, this.showUserPosts(e))
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.Component);
      var $ = Object(s.b)(function(e) {
          return { user: e.user };
        })(J),
        q = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(r))
              )).state = {
                formdata: {
                  _id: a.props.match.params.id,
                  name: "",
                  author: "",
                  review: "",
                  pages: "",
                  rating: "",
                  price: ""
                }
              }),
              (a.handleInput = function(e, t) {
                var n = Object(h.a)({}, a.state.formdata);
                (n[t] = e.target.value), a.setState({ formdata: n });
              }),
              (a.submitForm = function(e) {
                var t;
                e.preventDefault(),
                  a.props.dispatch(
                    ((t = a.state.formdata),
                    {
                      type: "UPDATE_BOOK",
                      payload: R.a
                        .post("/api/book_update", t)
                        .then(function(e) {
                          return e.data;
                        })
                    })
                  );
              }),
              (a.deletePost = function() {
                var e;
                a.props.dispatch(
                  ((e = a.props.match.params.id),
                  {
                    type: "DELETE_BOOK",
                    payload: R.a
                      .delete("/api/delete_book?id=".concat(e))
                      .then(function(e) {
                        return e.data;
                      })
                  })
                );
              }),
              (a.redirectUser = function() {
                setTimeout(function() {
                  a.props.history.push("/user/user-reviews");
                }, 1e3);
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  var e;
                  this.props.dispatch(
                    ((e = this.props.match.params.id),
                    {
                      type: "GET_BOOK",
                      payload: R.a
                        .get("/api/getBook?id=".concat(e))
                        .then(function(e) {
                          return e.data;
                        })
                    })
                  );
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  var t = e.books.book;
                  this.setState({
                    formdata: {
                      _id: t._id,
                      name: t.name,
                      author: t.author,
                      review: t.review,
                      pages: t.pages,
                      rating: t.rating,
                      price: t.price
                    }
                  });
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  this.props.dispatch({
                    type: "CLEAR_BOOK",
                    payload: { book: null, updateBook: !1, postDeleted: !1 }
                  });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    t = this.state.formdata,
                    a = this.props.books;
                  return r.a.createElement(
                    "div",
                    { className: "rl_container article" },
                    a.updateBook
                      ? r.a.createElement(
                          "div",
                          { className: "edit_confirm" },
                          "Post Updated,",
                          " ",
                          r.a.createElement(
                            c.b,
                            { to: "/books/".concat(a.book._id) },
                            "Click here to see your post"
                          )
                        )
                      : null,
                    a.postDeleted
                      ? r.a.createElement(
                          "div",
                          { className: "red_tag" },
                          "Post Deleted ",
                          this.redirectUser()
                        )
                      : null,
                    r.a.createElement(
                      "form",
                      { onSubmit: this.submitForm },
                      r.a.createElement("h2", null, "Edit review"),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "text",
                          placeholder: "Enter name",
                          value: t.name,
                          onChange: function(t) {
                            return e.handleInput(t, "name");
                          }
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "text",
                          placeholder: "Enter author",
                          value: t.author,
                          onChange: function(t) {
                            return e.handleInput(t, "author");
                          }
                        })
                      ),
                      r.a.createElement("textarea", {
                        value: t.review,
                        onChange: function(t) {
                          return e.handleInput(t, "review");
                        }
                      }),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "number",
                          placeholder: "Enter pages",
                          value: t.pages,
                          onChange: function(t) {
                            return e.handleInput(t, "pages");
                          }
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement(
                          "select",
                          {
                            value: t.rating,
                            onChange: function(t) {
                              return e.handleInput(t, "rating");
                            }
                          },
                          r.a.createElement("option", { val: "1" }, "1"),
                          r.a.createElement("option", { val: "2" }, "2"),
                          r.a.createElement("option", { val: "3" }, "3"),
                          r.a.createElement("option", { val: "4" }, "4"),
                          r.a.createElement("option", { val: "5" }, "5")
                        )
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "number",
                          placeholder: "Enter price (\u20ac)",
                          value: t.price,
                          onChange: function(t) {
                            return e.handleInput(t, "price");
                          }
                        })
                      ),
                      r.a.createElement(
                        "button",
                        { type: "submit" },
                        "Edit review"
                      ),
                      r.a.createElement(
                        "div",
                        { className: "delete_post" },
                        r.a.createElement(
                          "div",
                          { className: "button", onClick: this.deletePost },
                          "Delete review"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.PureComponent);
      var z = Object(s.b)(function(e) {
          return { books: e.books };
        })(q),
        Q = (function(e) {
          function t() {
            var e, a;
            Object(v.a)(this, t);
            for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
              o[l] = arguments[l];
            return (
              ((a = Object(f.a)(
                this,
                (e = Object(y.a)(t)).call.apply(e, [this].concat(o))
              )).state = {
                name: "",
                lastname: "",
                email: "",
                password: "",
                error: ""
              }),
              (a.handleInputName = function(e) {
                a.setState({ name: e.target.value });
              }),
              (a.handleInputLastname = function(e) {
                a.setState({ lastname: e.target.value });
              }),
              (a.handleInputEmail = function(e) {
                a.setState({ email: e.target.value });
              }),
              (a.handleInputPassword = function(e) {
                a.setState({ password: e.target.value });
              }),
              (a.submitForm = function(e) {
                e.preventDefault(),
                  a.setState({ error: "" }),
                  a.props.dispatch(
                    (function(e, t) {
                      var a = R.a.post("/api/register", e);
                      return function(e) {
                        a.then(function(a) {
                          var n = a.data,
                            r = n.success
                              ? [].concat(Object(C.a)(t), [n.user])
                              : t,
                            o = { success: n.success, users: r };
                          e({ type: "USER_REGISTER", payload: o });
                        });
                      };
                    })(
                      {
                        name: a.state.name,
                        lastname: a.state.lastname,
                        email: a.state.email,
                        password: a.state.password
                      },
                      a.props.user.users
                    )
                  );
              }),
              (a.showUsers = function(e) {
                return e.users
                  ? e.users.map(function(e, t) {
                      return r.a.createElement(
                        "tr",
                        { key: t },
                        r.a.createElement("td", null, e.name),
                        r.a.createElement("td", null, e.lastname),
                        r.a.createElement("td", null, e.email)
                      );
                    })
                  : null;
              }),
              a
            );
          }
          return (
            Object(g.a)(t, e),
            Object(b.a)(t, [
              {
                key: "componentWillMount",
                value: function() {
                  this.props.dispatch({
                    type: "GET_USERS",
                    payload: R.a.get("/api/users").then(function(e) {
                      return e.data;
                    })
                  });
                }
              },
              {
                key: "componentWillReceiveProps",
                value: function(e) {
                  !1 === e.user.register
                    ? this.setState({ error: "Error, try again" })
                    : this.setState({
                        name: "",
                        lastname: "",
                        email: "",
                        password: ""
                      });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.user;
                  return r.a.createElement(
                    "div",
                    { className: "rl_container" },
                    r.a.createElement(
                      "form",
                      { onSubmit: this.submitForm },
                      r.a.createElement("h2", null, "Add user"),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "text",
                          placeholder: "Enter name",
                          value: this.state.name,
                          onChange: this.handleInputName
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "text",
                          placeholder: "Enter lastname",
                          value: this.state.lastname,
                          onChange: this.handleInputLastname
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "email",
                          placeholder: "Enter email",
                          value: this.state.email,
                          onChange: this.handleInputEmail
                        })
                      ),
                      r.a.createElement(
                        "div",
                        { className: "form_element" },
                        r.a.createElement("input", {
                          type: "password",
                          placeholder: "Enter password",
                          value: this.state.password,
                          onChange: this.handleInputPassword
                        })
                      ),
                      r.a.createElement(
                        "button",
                        { type: "submit" },
                        "Add user"
                      ),
                      r.a.createElement(
                        "div",
                        { className: "error" },
                        this.state.error
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "current_users" },
                      r.a.createElement("h4", null, "Current Users:"),
                      r.a.createElement(
                        "table",
                        null,
                        r.a.createElement(
                          "thead",
                          null,
                          r.a.createElement(
                            "tr",
                            null,
                            r.a.createElement("th", null, "Name"),
                            r.a.createElement("th", null, "Lastname"),
                            r.a.createElement("th", null, "Email")
                          )
                        ),
                        r.a.createElement("tbody", null, this.showUsers(e))
                      )
                    )
                  );
                }
              }
            ]),
            t
          );
        })(n.PureComponent);
      var X = Object(s.b)(function(e) {
          return { user: e.user };
        })(Q),
        Z = function(e) {
          R.a.get("/api/logout").then(function(t) {
            setTimeout(function() {
              e.history.push("/");
            }, 2e3);
          });
          return r.a.createElement(
            "div",
            { className: "logout_container" },
            r.a.createElement("h1", null, "Sorry to see you go :(")
          );
        },
        ee = function() {
          return r.a.createElement(
            S,
            null,
            r.a.createElement(
              c.d,
              null,
              r.a.createElement(c.c, {
                path: "/",
                exact: !0,
                component: G(W, null)
              }),
              r.a.createElement(c.c, {
                path: "/login",
                exact: !0,
                component: G(K, !1)
              }),
              r.a.createElement(c.c, {
                path: "/user/logout",
                exact: !0,
                component: G(Z, !0)
              }),
              r.a.createElement(c.c, {
                path: "/user",
                exact: !0,
                component: G(M, !0)
              }),
              r.a.createElement(c.c, {
                path: "/user/add",
                exact: !0,
                component: G(H, !0)
              }),
              r.a.createElement(c.c, {
                path: "/user/register",
                exact: !0,
                component: G(X, !0)
              }),
              r.a.createElement(c.c, {
                path: "/user/edit-post/:id",
                exact: !0,
                component: G(z, !0)
              }),
              r.a.createElement(c.c, {
                path: "/books/:id",
                exact: !0,
                component: G(D, null)
              }),
              r.a.createElement(c.c, {
                path: "/user/user-reviews",
                exact: !0,
                component: G($, !0)
              })
            )
          );
        },
        te = Object(i.a)(m.a, d.a)(i.d);
      l.a.render(
        r.a.createElement(
          s.a,
          { store: te(E) },
          r.a.createElement(c.a, null, r.a.createElement(ee, null))
        ),
        document.getElementById("root")
      );
    }
  },
  [[46, 1, 2]]
]);
//# sourceMappingURL=main.a6064f1a.chunk.js.map
