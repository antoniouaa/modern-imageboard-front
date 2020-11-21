import React from "react";

export default function Footer() {
  return (
    <footer className="page-footer font-tiny blue pt-4">
      <hr className="clearfix w-100 d-md-none pb-3"></hr>
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-2 mb-md-0 mb-3"></div>
          <div className="col-md-8 mt-md-0 mt-3 text-muted">
            <p>imageboard</p>
          </div>
          <div className="col-md-1 mb-md-0 mb-3">
            <h3>
              <a href="#" class="tw-ic mr-3" role="button">
                <i className="fab fa-lg fa-twitter"></i>{" "}
              </a>
              <a href="#" class="git-ic mr-3" role="button">
                <i className="fab fa-lg fa-github"></i>{" "}
              </a>
              <a href="#" class="mr-3" role="button">
                <i className="fab fa-lg fa-discord"></i>{" "}
              </a>
            </h3>
          </div>
          <div className="col-md-1 mb-md-0 mb-3">
            <ul>
              <li>
                <a href="/terms">Terms of service</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        2020 <a href="#"> s-tashe.com</a>
      </div>
    </footer>
  );
}
