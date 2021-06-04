/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function DefaultFooter() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <nav>
            <ul>
              <li>
                <span>Create resume by <span className="text-info">React JS</span></span>
              </li>
              
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            © {new Date().getFullYear()}, Resume by{" "}
            Chanathip Thongmont
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default DefaultFooter;
