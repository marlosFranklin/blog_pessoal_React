function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#312e81",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            color: "white",
            width: "100%",
            maxWidth: "1280px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <h2
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
              }}
            >
              Seja Bem Vinde!
            </h2>

            <p
              style={{
                fontSize: "1.25rem",
              }}
            >
              Expresse aqui seus pensamentos e opiniões
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  borderRadius: "0.5rem",
                  color: "white",
                  border: "2px solid white",
                  padding: "0.5rem 1rem",
                }}
              >
                Nova Postagem
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src="https://i.imgur.com/fyfri1v.png"
              alt="Imagem Página Home"
              style={{
                width: "66%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
