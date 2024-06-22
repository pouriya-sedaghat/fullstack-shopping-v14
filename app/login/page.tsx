import Link from "next/link";
import { Row, Col } from "react-bootstrap";

function Login() {
  async function signin(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    console.log(email, password);
  }

  return (
    <Row className="py-4">
      <Col
        xs={3}
        className="d-flex justify-content-center mx-auto my-3 py-4 bg-dark text-light rounded-5"
      >
        <form action={signin}>
          <h2 className="h5">Login</h2>
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
              Dont Have An Account?{" "}
              <Link
                href="/register"
                className="text-decoration-none text-warning"
              >
                Register
              </Link>
            </p>
            <button type="submit" className="btn btn-light d-block mx-auto">
              Login
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
}

export default Login;
