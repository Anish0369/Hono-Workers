import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

import { userRouter } from "./routes/user";
import { bookRouter } from "./routes/blog";

// const app = new Hono<{
//   Bindings : {
//     DATABASE_URL: string
//   }

// } >();
export const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

/*
app.post("/api/v1/user/signup", async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl:
      "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOTI1ODllYzgtMWE5OC00YTQ5LTk0MDEtNjhlYzZkNmYxNzlhIiwidGVuYW50X2lkIjoiMGQ5YzJjOTczZjA0MjFmYzJmNWYzZTU2YzkyNjZlNmNhYmU1ZDM3MTM3Mzk0OTRhMDA1MmNkOGE5NTE1YzY0MSIsImludGVybmFsX3NlY3JldCI6IjJiNDBkMzI4LWI2MDktNGM4ZS1iM2QxLTJhYmUzZWM0ZjNiZSJ9.UGXZn9IaaKPtBNo_TWhO2J52SuhwREBJBQg5jvu8GnA",
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
    },
  });
  //@ts-ignore
  const token = await sign({ id: user.id }, "secret");

  return c.json({ token });

  // return c.json({ message: "Hello Hono!" });
});

app.post("/api/v1/user/signin", async (c) => {
  const prisma = new PrismaClient({
    //@ts-ignore
    datasourceUrl:
      "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiOTI1ODllYzgtMWE5OC00YTQ5LTk0MDEtNjhlYzZkNmYxNzlhIiwidGVuYW50X2lkIjoiMGQ5YzJjOTczZjA0MjFmYzJmNWYzZTU2YzkyNjZlNmNhYmU1ZDM3MTM3Mzk0OTRhMDA1MmNkOGE5NTE1YzY0MSIsImludGVybmFsX3NlY3JldCI6IjJiNDBkMzI4LWI2MDktNGM4ZS1iM2QxLTJhYmUzZWM0ZjNiZSJ9.UGXZn9IaaKPtBNo_TWhO2J52SuhwREBJBQg5jvu8GnA",
  }).$extends(withAccelerate());

  const body = await c.req.json();

  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
      password: body.password,
    },
  });

  if (!user) {
    return c.json({ message: "Invalid email or password" });
  }
  //@ts-ignore
  const token = await sign({ id: user.id }, "secret");

  return c.json({ token });

  // return c.json({ message: "Hello Hono!" });
});

app.use("/api/v1/blog/*", async (c, next) => {
  const header = c.req.header("authorization") || "";

  const tooken = header.split(" ")[1];

  //@ts-ignore

  const response = await verify(token, "secret");
  console.log(response);

  if (response.id) {
    return next();
  } else {
    c.status(403)
    return c.json({ message: "Unauthorized" });
  }
});
*/

app.route("/api/v1/user", userRouter);
app.route("/api/v1/book", bookRouter);

app.get("/", (c) => {
  return c.text("Server is healthy and runnig");
});

export default app;

/* 


const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())

*/
