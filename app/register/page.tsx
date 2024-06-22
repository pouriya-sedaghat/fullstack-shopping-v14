import Link from "next/link";
import { Row, Col } from "react-bootstrap";

import db from "@/utils/db";
import User from "@/models/user.model";
// import users from "@/data/users.json";

function Register() {
  async function register(formData: FormData) {
    "use server";

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    await db.connect();

    // await User.deleteMany();
    // await User.insertMany(users);

    const newUser = new User({ username, email, password });
    await newUser.save();

    console.log(newUser);
  }

  return (
    <Row className="py-4">
      <Col
        xs={3}
        className="d-flex justify-content-center mx-auto my-3 py-4 bg-dark text-light rounded-5"
      >
        <form action={register}>
          <h2 className="h5">Register</h2>
          <div>
            <label htmlFor="username">Username :</label>
            <br />
            <input
              type="username"
              placeholder="Enter Your Username"
              name="username"
              id="username"
              className="bg-transparent text-reset border rounded px-1 py-1 my-2"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <br />
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              id="email"
              className="bg-transparent text-reset border rounded px-1 py-1 my-2"
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="password">Password :</label>
            <br />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              id="password"
              className="bg-transparent text-reset border rounded px-1 py-1 my-2"
              autoFocus
            />
          </div>
          <div>
            <p>
              Have You An Account?{" "}
              <Link href="/login" className="text-decoration-none text-warning">
                Login
              </Link>
            </p>
            <button type="submit" className="btn btn-success d-block mx-auto">
              Register
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default Register;
