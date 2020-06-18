import { rest } from "msw";
import ApiEndpoints from "lib/apiEndpoints";
import Messages from "lib/messages";

const mockUsers = [
  {
    id: "1",
    name: "Mock User",
    email: "mock@user.com",
    password: "foobar",
    workouts: { note: "workout" },
    jwt: "mock-user-jwt",
  },
  {
    id: "2",
    name: "Another User",
    email: "another@user.com",
    password: "foobaz",
    workouts: { note: "another workout" },
    jwt: "another-user-jwt",
  },
];

// Endpoints returned from ApiEndpoints module are URL objects, which
// msw's rest namespace cannot accept (unlike fetch). Be sure to convert
// URL objects to strings before providing them to rest functions.
const authHandlers = [
  // Auth login
  rest.post(ApiEndpoints.auth.login.toString(), (req, res, ctx) => {
    const { email, password } = req.body.login;
    const user = mockUsers.find((user) => user.email === email);
    if (email === user.email && password === user.password) {
      return res(
        ctx.status(200),
        ctx.json({
          status: "success",
          payload: {
            jwt: user.jwt,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          },
        })
      );
    } else {
      return res(
        ctx.status(401),
        ctx.json({
          status: "error",
          messages: [
            Messages.create({
              type: "warning",
              message: "Invalid email or password. Please try again.",
            }),
          ],
        })
      );
    }
  }),
];

const usersHandlers = [
  // Users show
  rest.get("http://localhost:4000/api/v1/users/:id", (req, res, ctx) => {
    const user = mockUsers.find((user) => user.id === req.params.id);
    const authorization = req.headers.map.authorization;
    if (authorization === user.jwt) {
      return res(
        ctx.status(200),
        ctx.json({
          status: "success",
          payload: {
            jwt: user.jwt,
            user: {
              id: user.id,
              name: user.name,
              email: user.email,
            },
          },
        })
      );
    }
  }),
  // Users create
  // rest.post(ApiEndpoints.users.create.toString(), (req, res, ctx) => {
  //   const { name, email } = req.body.user;
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       status: "success",
  //       payload: {
  //         jwt: mockUser.authorization,
  //         user: {
  //           id: Math.floor(Math.random() * 100) + 10,
  //           name: name,
  //           email: email,
  //         },
  //       },
  //     })
  //   );
  // }),
];

const testUrl = "http://localhost:4000/api/v1.json";
const asyncRequestTestHandlers = [
  rest.get(testUrl, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        method: req.method,
        authorization: req.headers.map.authorization,
      })
    );
  }),
  rest.post(testUrl, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        method: req.method,
        body: req.body,
        authorization: req.headers.map.authorization,
      })
    );
  }),
  rest.patch(testUrl, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        method: req.method,
        body: req.body,
        authorization: req.headers.map.authorization,
      })
    );
  }),
  rest.delete(testUrl, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        method: req.method,
        authorization: req.headers.map.authorization,
      })
    );
  }),
];

const handlers = [
  ...authHandlers,
  ...usersHandlers,
  ...asyncRequestTestHandlers,
];

export { handlers, mockUsers };
