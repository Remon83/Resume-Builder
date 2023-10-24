module.exports = (data) => {
  return `
  <!DOCTYPE html>
  <html lang="en" moznomarginboxes>
      <head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge;chrome=1" />
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="google" content="notranslate" />
          <!-- Metadata (autofilled by "Save to HTML") -->
          <meta name="author" content="Joe Smith" />
          <meta name="subject" content="A really good software engineer you should hire" />
          <meta name="keywords" content="coding, developing, hacking" />
          <meta name="date" content="2009-04-01" />
          <meta name="generator" content="html-resume-template" />
          <!-- Google Fonts, Normalize, and Font Awesome -->
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" integrity="sha256-oSrCnRYXvHG31SBifqP2PM1uje7SJUyX0nTwO2RJV54=" crossorigin="anonymous" />
        <link rel="stylesheet" type="text/css" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Custom Styles -->
        <link rel="stylesheet" type="text/css" href="./paper.css" />
        <link rel="stylesheet" type="text/css" href="./styles.css" />
        <link rel="stylesheet" type="text/css" href="./typography.css" />
        <link rel="stylesheet" type="text/css" media="screen" href="./screen.css" />
        <link rel="stylesheet" type="text/css" media="print" href="./print.css" />
        <title>HTML Resume Template</title>
          <style>
          /* Paper CSS: https://github.com/cognitom/paper-css */
  
          @page { margin: 0 }
          body { margin: 0 }
          .sheet {
            margin: 0;
            overflow: hidden;
            position: relative;
            box-sizing: border-box;
            page-break-after: always;
          }
          
          /** Paper sizes **/
          body.A3               .sheet { width: 297mm; height: 419mm }
          body.A3.landscape     .sheet { width: 420mm; height: 296mm }
          body.A4               .sheet { width: 210mm; height: 296mm }
          body.A4.landscape     .sheet { width: 297mm; height: 209mm }
          body.A5               .sheet { width: 148mm; height: 209mm }
          body.A5.landscape     .sheet { width: 210mm; height: 147mm }
          body.letter           .sheet { width: 216mm; height: 279mm }
          body.letter.landscape .sheet { width: 280mm; height: 215mm }
          body.legal            .sheet { width: 216mm; height: 356mm }
          body.legal.landscape  .sheet { width: 357mm; height: 215mm }
          
          /** Padding area **/
          .sheet.padding-10mm { padding: 10mm }
          .sheet.padding-15mm { padding: 15mm }
          .sheet.padding-20mm { padding: 20mm }
          .sheet.padding-25mm { padding: 25mm }
          
          /** For screen preview **/
          @media screen {
            body { background-color: rgb(83, 86, 89); /*#e0e0e0*/ }
            .sheet {
              background: white;
              box-shadow: 0 .5mm 2mm rgba(0,0,0,.5);
              margin: 0 auto;
            }
          }
          
          /** Fix for Chrome issue #273306 **/
          @media print {
            body.A3.landscape          { width: 420mm }
            body.A3, body.A4.landscape { width: 297mm }
            body.A4, body.A5.landscape { width: 210mm }
            body.A5                    { width: 148mm }
            body.letter, body.legal    { width: 216mm }
            body.letter.landscape      { width: 280mm }
            body.legal.landscape       { width: 357mm }
          }
          pre {
            white-space: pre-wrap !important;
        }
        
        pre,
        blockquote {
            page-break-inside: avoid;
        }
        
        thead {
            display: table-header-group;
        }
        
        tr,
        img {
            page-break-inside: avoid;
        }
        
        p,
        h2,
        h3 {
            orphans: 3;
            widows: 3;
        }
        
        h2,
        h3 {
            page-break-after: avoid;
        }
        
        a {
            color: currentColor;
            text-decoration: none;
        }
        
        * {
            outline: none;
        }
        
        button:-moz-focusring,
        [type="button"]:-moz-focusring,
        [type="reset"]:-moz-focusring,
        [type="submit"]:-moz-focusring {
            outline: none;
        }
        
        /* Print background graphics */
        @media print and (color) {
            * {
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        }
        
        #document-controls, #github-link, iframe {
            display: none !important;
        }
        html {
          padding: 2.4em;
      }
      
      
      
      #save > section:first-of-type > aside {
          background-color: #f5f5f5;
      }
      
      #save > section:first-of-type aside .skills > ul > li > span {
          background-color: white;
      }
      
      button, a[role="button"] {
          user-select: none;
      }
      
      #document-controls {
          position: fixed;
          right: 0;
          top: 0;
          margin-top: 0.5em;
          margin-right: 0.5em;
          display: flex;
          flex-direction: column;
      }
      
      #document-controls button + button,
      #document-controls button + a[role="button"],
      #document-controls a[role="button"] + a[role="button"],
      #document-controls a[role="button"] + button {
          margin-top: 0.5em;
      }
      
      #github-link {
          display: block;
          position: fixed;
          left: 0;
          top: 0;
          margin-top: 0.5em;
          margin-left: 0.5em;
          text-decoration: none;
          color: black;
      }
      
      /* Source https://www.bestcssbuttongenerator.com/#/36 */
      
      button, a[role="button"] {
        box-shadow:inset 0px 1px 0px 0px white;
        background:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);
        background-color:#ededed;
        border-radius:6px;
        border:1px solid #dcdcdc;
        display:inline-block;
        cursor:pointer;
        color:#777777;
        font-size:15px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        text-shadow:0px 1px 0px white;
      }
      
      button:hover, button:active,
      a[role="button"]:hover, a[role="button"]:active {
        background:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);
        background-color:#dfdfdf;
      }
      
      button:active, a[role="button"]:active {
        position:relative;
        top:1px;
      }
      @charset "UTF-8";
  
  * {
      min-height: 0;
      min-width: 0;
      box-sizing: border-box;
      transform-origin: 0px 0px 0px;
  }
  
  p:blank, li:blank, div:blank, section:blank {
      display: none;
  }
  
  p:empty, li:empty, div:empty, section:empty {
      display: none;
  }
  
  p:-moz-only-whitespace, li:-moz-only-whitespace, div:-moz-only-whitespace, section:-moz-only-whitespace {
      display: none;
  }
  
  /* Page Variables */
  
  :root {
      --main-width: 74%;
      --header-height: 1.2in;
      --sidebar-width: calc(100% - var(--main-width));
  }
  
  body {
      font-size: 0.95em;
      margin: 0 auto;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      text-rendering: optimizeLegibility;
      text-decoration-skip: ink;
      hyphens: auto;
  }
  
  #save > section:first-of-type {
      display: flex;
      flex-direction: row;
  }
  
  .summary {
      font-size: 105%;
  }
  
  /* Misc */
  
  img {
      max-width: 100%;
  }
  
  p {
      margin-top: 0;
      margin-bottom: 0;
  }
  
  abbr[title] {
      text-decoration: none;
      border: none;
  }
  
  ul {
      margin: 0;
      padding: 0;
  }
  
  li {
      list-style-type: none;
      padding: 0;
      margin: 0;
  }
  
  li + li {
      margin-top: 0.4em;
  }
  
  .fa, .fab {
      text-align: center;
      min-width: 1em;
  }
  
  li .fa, li .fab {
      margin-right: 0.3em;
  }
  
  /* Page layout */
  
  #save > section:first-of-type > aside {
      flex-basis: var(--sidebar-width);
      padding: 0.1618in 0 0.1618in 0.1618in;
      display: flex;
      flex-direction: column;
  }
  
  #save > section:first-of-type > aside > section + section {
      margin-top: 2em;
  }
  
  #save > section:first-of-type > aside > section:last-child {
      margin-top: auto;
  } 
  
  #save > section:first-of-type > section {
      flex-basis: var(--main-width);
      display: flex;
      flex-direction: column;
  }
  
  #save > section:first-of-type > section > header {
      flex-basis: var(--header-height);
      flex-grow: 0;
      padding: 0.1618in;
  }
  
  #save > section:first-of-type > section > section {
      flex-grow: 1;
      padding: 0.1618in;
      padding-top: 0;
      display: flex;
      flex-direction: column;
  }
  
  #save > section:first-of-type > section > section > section + section {
      margin-top: 1em;
  }
  
  #save > section:first-of-type > section > section > section:last-child {
      margin-top: auto;
  }
  
  .references address {
      font-style: normal;
      font-weight: 300;
  }
  
  .references address:first-line {
      font-weight: 400;
  }
  
  .references address + address,
  .references address + p {
      padding-top: 0.5em;
  }
  
  /* Skills */
  
  .skills {
      font-size: 92%;
  }
  
  .skills > ul:after {
      content: '';
      display: table;
      clear: both;
  }
  
  .skills > ul > li {
      display: block;
      float: left;
      margin: 6px 6px 0 0;
  }
  
  .skills > ul > li > span {
      background-color: #f5f5f5;
      border: 1px solid rgba(45, 45, 45, 0.1618);
      border-radius: 3px;
      color: #333;
      padding: 4px 8px;
      display: inline-block;
  }
  
  /* Experience & Education */
  
  .education ol,
  .experience ol {
      margin: 0;
      padding: 0;
  }
  
  .experience ol {
      flex-wrap: wrap;
      display: flex;
      flex-direction: row;
  }
  
  .experience ol > li {
      margin: 0;
      padding: 0;
      flex-basis: 100%;
      font-weight: 300;
  }
  
  .education ol > li {
      font-weight: 300;
  }
  
  .experience ol > li + li {
      margin-top: 1em;
  }
  
  .education ol > li div,
  .experience ol > li header {
      display: flex;
      flex-direction: row;
  }
  
  .experience ol > li > span,
  .education ol > li p,
  .experience ol > li header p {
      font-weight: 400;
  }
  
  .experience ol > li header p {
      font-size: 110%;
  }
  
  .education ol > li div > *:last-child,
  .experience ol > li header > *:last-child {
      margin-left: auto;
  }
  
  .experience ol > li ul {
      padding-top: 0.5em;
  }
  
  .experience ol > li ul li {
      list-style-type: circle;
      margin-left: 1.618em;
  }
  /* Typography */
  
  body, .sanserif {
      font-family: "Montserrat", "Trebuchet MS", Helvetica, sans-serif;
  }
  
  p, .serif {
      font-family: "Cardo", Georgia, serif;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 400;
    letter-spacing: -.1rem;
    margin-bottom: 1rem;
      margin-top: 0;
  }
  
  h1 {
    font-size: 3.6rem;
      line-height: 1.2;
  }
  
  h2, .section-title {
    font-size: 2.8rem;
      line-height: 1.25;
  }
  
  h3 {
    font-size: 2.2rem;
      line-height: 1.3;
  }
  
  h4 {
    font-size: 1.618rem;
    letter-spacing: -.08rem;
      line-height: 1.35;
  }
  
  h5 {
    font-size: 1.4rem;
    letter-spacing: -.05rem;
      line-height: 1.5;
  }
  
  h6 {
    font-size: 1.2rem;
    letter-spacing: 0;
      line-height: 1.4;
  }
          </style>
      </head>
      <body class="letter">
          <section id="save">
              <section class="sheet">
                  <aside>
                      <section class="contact">
                          <h6>Contact</h6>
                          <ul>
                              <li>
                                  <p><i  title="Location"></i>${
                                    data.address
                                  }</p>
                              </li>
                              <li>
                                  <p><i  title="Cell phone"></i> <a href="tel:4153234000">${
                                    data.mobile
                                  }</a></p>
                              </li>
                              <li>
                                  <p><i  title="Email"></i> <a href="mailto:joe@joesmith.site">${
                                    data.email
                                  }</a></p>
                              </li>
                              <li>
                                  <p><i  title="Website"></i> <a href="https://joesmith.site">${
                                    data.website
                                  }</a></p>
                              </li>
                              <li>
                                  <p><i class="fab fa-github" title="GitHub"></i> <a href="https://github.com/Tombarr">${
                                    data.github
                                  }</a></p>
                              </li>
                          </ul>
                      </section>
                      <section class="skills">
                          <h6>Skills</h6>
                          <ul>
                              <li><span>${data.skills.split(",")[0]}</span></li>
                              <li><span>${
                                data.skills.split(",")[1] || ""
                              }</span></li>
                              <li><span>${
                                data.skills.split(",")[2] || ""
                              }</span></li>
                              <li><span>${
                                data.skills.split(",")[3] || ""
                              }</span></li>
                              <li><span>${
                                data.skills.split(",")[4] || ""
                              }</span></li>
                          </ul>
                      </section>
                      <section class="skills">
                          <h6>Technologies</h6>
                          <ul>
                              <li><span>${
                                data.technologies.split(",")[0] || ""
                              }</span></li>
                              <li><span>${
                                data.technologies.split(",")[1] || ""
                              }</span></li>
                              <li><span>${
                                data.technologies.split(",")[2] || ""
                              }</span></li>
                              <li><span>${
                                data.technologies.split(",")[3] || ""
                              }</span></li>
                              <li><span>${
                                data.technologies.split(",")[4] || ""
                              }</span></li>
                              <li><span>${
                                data.technologies.split(",")[5] || ""
                              }</span></li>
                          </ul>
                      </section>
                      <section class="references">
                          <h6>References</h6>
                          <address>
                              ${data.ref1.name}<br />
                              ${data.ref1.company}<br />
                              ${data.ref1.mobile}
                              ${data.ref1.email}
                          </address>
                          <address>
                          ${data.ref2.name || ""}<br />
                          ${data.ref2.company || ""}<br />
                          ${data.ref2.mobile || ""}
                          ${data.ref2.email || ""}
                          </address>
                      </section>
                  </aside>
                  <section>
                      <header class="name" aria-label="Joe Smith">
                          <a href="https://joesmith.site">
                              <svg width="257px" height="35px" viewBox="0 0 257 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Montserrat-Regular, Montserrat" font-size="48" font-weight="normal">
                                      <g id="Letter" transform="translate(-54.000000, -140.000000)" fill="#484848">
                                          <text id="JOE-SMITH">
                                              <tspan x="54.728" y="174">${
                                                data.name
                                              }</tspan>
                                          </text>
                                      </g>
                                  </g>
                              </svg>
                          </a>
                          <h6>${data.title}</h6>
                          <hr />
                      </header>
                      <section>
                          <section class="summary">
                              <h6>Summary</h6>
                              <p>${data.summary}</p>
                          </section>
                          <section class="experience">
                              <h6>Experience</h6>
                              <ol>
                                  <li>
                                      <header>
                                          <p class="sanserif">${
                                            data?.experience[0]?.title || ""
                                          }</p>
                                          <time>${
                                            data?.experience[0]?.from || ""
                                          } – ${
    data?.experience[0]?.to || ""
  }</time>
                                      </header>
                                      <span>${
                                        data?.experience[0]?.employer || ""
                                      }</span>
                                      <p>
                                      ${data?.experience[0]?.description || ""}
                                      </p>
                                  </li>
                                  <li>
                                      <header>
                                          <p class="sanserif">${
                                            data?.experience[1]?.title || ""
                                          }</p>
                                          <time>${
                                            data?.experience[1]?.from || ""
                                          } – ${
    data?.experience[1]?.to || ""
  }</time>
                                      </header>
                                      <span>${
                                        data?.experience[1]?.employer || ""
                                      }</span>
                                      <p>
                                      ${data?.experience[1]?.description || ""}
                                      </p>
                                  </li>
                                  <li>
                                      <header>
                                          <p class="sanserif">${
                                            data?.experience[2]?.title || ""
                                          }</p>
                                          <time>${
                                            data?.experience[2]?.from || ""
                                          } – ${
    data?.experience[2]?.to || ""
  }</time>
                                      </header>
                                      <span>${
                                        data?.experience[2]?.employer || ""
                                      }</span>
                                      <p>
                                      ${data?.experience[2]?.description || ""}
                                      </p>
                                  </li>
                                  <li>
                                      <header>
                                          <p class="sanserif">${
                                            data?.experience[3]?.title || ""
                                          }</p>
                                          <time>${
                                            data?.experience[3]?.from || ""
                                          } – ${
    data?.experience[3]?.to || ""
  }/time>
                                      </header>
                                      <span>${
                                        data?.experience[3]?.employer || ""
                                      }</span>
                                      <p>
                                      ${data?.experience[3]?.description || ""}
                                      </p>
                                  </li>
                              </ol>
                          </section>
                          <section class="education">
                              <h6>Education</h6>
                              <ol>
                                  <li>
                                      <div>
                                          <p class="sanserif">${
                                            data?.education[0]?.degree || ""
                                          }</p>
                                          <time>${
                                            data?.education[0]?.from || ""
                                          } – ${
    data.education[0]?.to || ""
  }</time>
                                      </div>
                                      <div>
                                          <span>${
                                            data?.education[0]?.university || ""
                                          }</span>
                                          <span>GPA 4</span>
                                      </div>
                                  </li>
                                  <li>
                                      <div>
                                          <p class="sanserif">${
                                            data?.education[1]?.degree || ""
                                          }</p>
                                          <time>${
                                            data?.education[1]?.from || ""
                                          } – ${
    data.education[1]?.to || ""
  }</time>
                                      </div>
                                      <div>
                                          <span>${
                                            data?.education[1]?.university || ""
                                          }</span>
                                        
                                      </div>
                                  </li>
                              </ol>
                          </section>
                      </section>
                  </section>
              </section>
          </section>
          <!-- Script to make elements authorable and save changes to localStorage -->
          <script type="text/javascript" src="./index.js"></script>
      </body>
      <!-- Developed by Tom Barrasso. https://barrasso.me -->
  </html>


  `;
};
// console.log(module);
