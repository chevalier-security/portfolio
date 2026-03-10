import Container from "../components/layout/Container"
import Button from "../components/ui/Button"

export default function Projects() {
  return (
    <>
      <section style={{ padding: "100px 0", backgroundColor: "var(--bg-soft)", color: "var(--ink)" }}>
        <Container>
          <header style={{ textAlign: "center", marginBottom: "60px" }}>
            <h1
              style={{
                fontSize: "38px",
                fontWeight: 600,
                marginBottom: "14px"
              }}
            >
              projects
            </h1>

            <p
              style={{
                maxWidth: "740px",
                margin: "0 auto",
                fontSize: "17px",
                color: "var(--ink-muted)",
                lineHeight: 1.7
              }}
            >
              a selection of work showcasing my obsession and niche expertise at the intersection of physical and digital security.
            </p>
          </header>
        </Container>
      </section>

      <section
        style={{
          padding: "80px 0",
          backgroundColor: "var(--bg-alt)",
          color: "var(--text)",
          borderTop: "1px solid var(--border-subtle)"
        }}
      >
        <Container>
          <div
            className="card"
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px"
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600
              }}
            >
              homelabbed personal environment
            </h2>
            <p
              style={{
                color: "var(--ink-muted)",
                marginBottom: "24px",
                lineHeight: 1.6
              }}
            >
              my homelab includes a variety of self hosted platforms, network infrastructure, and security tooling. these include my work desktop with custom server capabilities, a few laptops, icopy x and flipper zero devices. everything is running dual boot on debian and arch based distros, and
              everything is built on bleeding edge hardware. i find access control components and other network infrastructure from the most reputable companies, and i develop new cracking and decryption software to break them. i find holes in digital master key architectures, and i design more secure systems.
            </p>
            <Button href="/" variant="primary">
              view details
            </Button>
          </div>
        </Container>
        
        <br />
        
        <Container>
          <div
            className="card"
            style={{
              maxWidth: "720px",
              margin: "36px auto 0",
              padding: "40px"
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600
              }}
            >
              custom access control facility management system
            </h2>
            <p
              style={{
                color: "var(--ink-muted)",
                marginBottom: "24px",
                lineHeight: 1.6
              }}
            >
              i've also built a custom access control facility management system. it supports many users and doors, you can assign users different access clearance, and you can assign doors different access requirements. the tech stack is a ruby on rails backend, and a custom react framework based frontend. it uses secure api protocol so that any data values used in login, as well as any stored values specific to your facility can only be accessed by you, and are only processed via secure ruby backend communication with the database. it's a very fluid, intuitive, and large secure system. in the future it will have more capabilities with different hardware, and when i can get the api keys, it could potentially manage other access control systems or facilities on your network. it could be my forever project. anyways, when i look at my ruby gemfile, i want to throw up, because i have no idea how i did any of it at this point. vibecoding was off the table for most of the project as railway did not enjoy working with me.
              firstly i made a local version of the system, i used postgresql, and containerized security via docker. by the time it's accessible, it should be completely closed source, and everything will be securely handled and private on a database. the only api endpoints that touch the react framework are input and output endpoints that send data to the ruby backend, then the ruby checks with the database and ensures that it's allowed to fetch the data.
            </p>
            <Button href="https://chevalier-access-production.up.railway.app" variant="primary">
              view details
            </Button>
          </div>
        </Container>
      </section>

      <section
        style={{
          padding: "80px 0",
          backgroundColor: "var(--bg-soft-alt)",
          color: "var(--ink)",
          borderTop: "1px solid var(--border-subtle)"
        }}
      >
        <Container>
          <div
            className="card"
            style={{
              maxWidth: "720px",
              margin: "0 auto",
              padding: "40px"
            }}
          >
            <h2
              style={{
                fontSize: "22px",
                marginBottom: "16px",
                fontWeight: 600
              }}
            >
              the website you're on right now
            </h2>
            <p
              style={{
                color: "var(--ink-muted)",
                marginBottom: "24px",
                lineHeight: 1.6
              }}
            >
              this website is built on a custom react framework. it was made by me. it might not look like much, but if you know a thing or two about typescript and react, you probably know that it'd suck to get into this as a solo effort. even if i was using ai, i'd still be reading old forums constantly because the lengths you have to go through to get react, typescript, npm and nvm, and vite to go through just to even want to work together are a headache. it's a lot to learn, honestly, but i like javascript, and i play around on it all the time. i built the framework from scratch, and then built this website on top of it. why would i build a site like this on typescript and react instead of html? because i wanted to. i wanted to build a custom framework, and i wanted to build a site on it. it's fun for me, and it gives me a chance to show off my software development skills. all it takes for you to do the same is enough ritalin to kill a baby horse, a cute trans girl to bounce on it a little bit, and a lot of time. but if you have those things, you can do it too.
            </p>
            <Button href="https://github.com/chevalier-security/portfolio" variant="primary">
              view details
            </Button>
          </div>
        </Container>
      </section>

      <section
        style={{
          padding: "20px 0",
          backgroundColor: "var(--bg-alt)",
          color: "var(--text)",
          borderTop: "1px solid var(--border-subtle)"
        }}
      >
        <Container>
          <Button href="#/" variant="secondary">
            back to home
          </Button>
        </Container>
      </section>
    </>
  )
}
