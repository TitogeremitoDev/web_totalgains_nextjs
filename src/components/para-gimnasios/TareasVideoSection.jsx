import DemoVideo from "@/components/DemoVideo";

export default function TareasVideoSection() {
  return (
    <section id="tareas" style={{ padding: "0 24px 90px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="aparece" style={{ textAlign: "center", marginBottom: 32 }}>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "1.5px",
              color: "var(--accent)",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Tareas del equipo
          </p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}>
            Reparte las tareas de tu equipo{" "}
            <span style={{ color: "var(--accent)" }}>y mira quién va al día</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: 680, margin: "14px auto 0", lineHeight: 1.6 }}>
            Ponle una tarea a uno, a varios o a todo el equipo. Sube el acta de la reunión y la app te propone las de cada uno. En el tablero ves el % hecho de cada persona y, si basta con que la haga uno, al hacerla se les quita a los demás.
          </p>
        </div>
        <DemoVideo
          src="/video/gym-tareas.mp4"
          poster="/video/gym-tareas.jpg"
          titulo="Tareas del equipo en TotalGains"
          ubicacion="para_gimnasios_tareas"
        />
      </div>
    </section>
  );
}
