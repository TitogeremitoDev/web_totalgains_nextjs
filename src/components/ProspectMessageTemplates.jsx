import { MessageCircle, Copy } from "lucide-react";

/**
 * ProspectMessageTemplates — Los 10 momentos en que un coach tiene que escribir
 * a alguien que todavia NO es cliente, con el mensaje literal para cada uno.
 *
 * Es el corazon del articulo y esta pensado para que se lea en movil y se
 * pueda capturar diapositiva a diapositiva: numero, situacion, burbuja con el
 * texto exacto, y una linea de por que funciona. Nada mas.
 */

const mensajes = [
  {
    n: 1,
    momento: "Alguien comenta en tu post y no sabes si escribirle",
    texto: "Hola Marta, he visto tu comentario en lo de las agujetas. Te respondo aquí porque da para más de dos líneas: lo que cuentas suele pasar cuando se sube carga antes de tiempo, no por falta de estiramiento. ¿Cuántos días entrenas ahora?",
    porque: "No vendes. Respondes a lo que dijo y devuelves una pregunta fácil. La conversación ya existe.",
  },
  {
    n: 2,
    momento: "Te preguntan el precio en el primer mensaje",
    texto: "Te lo digo sin problema, pero antes necesito saber dos cosas o te voy a dar un número que no significa nada: ¿cuántos días a la semana puedes entrenar y desde dónde partes? Según eso el trabajo cambia bastante, y el precio también.",
    porque: "Dar la tarifa a pelo te convierte en una lista de precios. Dar contexto primero te convierte en el profesional.",
  },
  {
    n: 3,
    momento: "Un conocido del gimnasio al que quieres ofrecerte",
    texto: "Oye, te veo currando duro desde hace semanas. Estoy con un grupo pequeño online y me viene bien gente constante. Si te apetece que le eche un ojo a lo que haces y te diga por dónde apretaría, te lo miro sin compromiso. Y si no, seguimos coincidiendo aquí igual.",
    porque: "Reconoces lo que ya hace, y le das salida por si dice que no. Sin salida, la gente evita la conversación entera.",
  },
  {
    n: 4,
    momento: "Lleva meses siguiéndote y no da el paso",
    texto: "Llevas un tiempo por aquí y nunca te he escrito para no dar la brasa. Solo una cosa: si alguna vez quieres que te diga qué harías distinto con tu entrenamiento, me lo dices y te lo cuento. Sin venderte nada.",
    porque: "Nombras el silencio en vez de ignorarlo, y la puerta queda abierta sin presión. Muchos llevan meses esperando permiso.",
  },
  {
    n: 5,
    momento: "Pidió información y desapareció",
    texto: "Te escribo solo para cerrar el tema, que no quiero dejarte con un mensaje a medias. Si ahora no es el momento, perfecto y sin problema. Y si lo sigues pensando, dime qué te frena y te digo si tiene solución o no.",
    porque: "«Cerrar el tema» quita la presión y por eso mismo suele abrirlo. La pregunta pide una objeción, no un sí.",
  },
  {
    n: 6,
    momento: "«Ahora mismo no puedo permitírmelo»",
    texto: "Lo entiendo perfectamente y no te voy a insistir. Dos cosas: si en algún momento cambia, escríbeme y retomamos donde lo dejamos. Y mientras tanto, si quieres te digo las dos cosas que yo cambiaría ya en lo que haces, que eso no cuesta nada.",
    porque: "Aceptas el no a la primera y das algo igualmente. El que se va bien tratado vuelve; el que se va presionado, no.",
  },
  {
    n: 7,
    momento: "«Me lo pienso y te digo»",
    texto: "Claro. Para que lo pienses con todo encima de la mesa: empezaríamos el lunes 6, el plan lo tendrías el mismo día y la primera semana la ajustamos sobre la marcha. Si el lunes 6 no te encaja, la siguiente entrada sería el 20.",
    porque: "«Me lo pienso» casi nunca es un no, es falta de concreción. Las fechas convierten una idea en una decisión.",
  },
  {
    n: 8,
    momento: "Pedirle referidos a un cliente contento",
    texto: "Oye Javi, una cosa y sin compromiso ninguno: voy a abrir dos plazas este mes y prefiero que entre gente parecida a ti antes que ponerme a hacer anuncios. Si se te ocurre alguien, le paso la info yo directamente y tú no tienes que vender nada.",
    porque: "Le quitas el trabajo incómodo de encima. El referido falla casi siempre porque le pedimos al cliente que haga de comercial.",
  },
  {
    n: 9,
    momento: "La historia que abre conversaciones en vez de likes",
    texto: "Pregunta rápida: ¿tú entrenas por la mañana o por la tarde? (Lo pregunto porque estoy montando los horarios de octubre y quiero saber qué pide la gente.)",
    porque: "Una pregunta binaria con motivo se contesta. Un «¿quieres entrenar conmigo?» se pasa de largo.",
  },
  {
    n: 10,
    momento: "El primer mensaje después de que diga que sí",
    texto: "Bienvenida, Laura. Esto es lo que pasa ahora: hoy te mando el cuestionario, mañana te llega el plan, y el viernes hablamos diez minutos para ajustar lo que no encaje. No tienes que hacer nada más que contestar el cuestionario.",
    porque: "El día de después es cuando más se arrepiente la gente. Un plan concreto lo cierra mejor que un «qué ganas de empezar».",
  },
];

function Mensaje({ m }) {
  return (
    <article
      style={{
        marginBottom: 16,
        padding: "18px 20px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.07) 0%, rgba(102,126,234,0.03) 100%)",
        border: "1px solid rgba(102,126,234,0.28)",
        borderRadius: 16,
      }}
    >
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
        <div
          style={{
            width: 34, height: 34, borderRadius: 10,
            background: "rgba(102,126,234,0.2)", border: "1px solid rgba(102,126,234,0.45)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#8fa4f5", fontSize: "1.02rem", fontWeight: 900, flexShrink: 0, whiteSpace: "nowrap",
          }}
        >
          {m.n}
        </div>
        <h3 style={{ margin: 0, fontSize: "0.98rem", fontWeight: 800, color: "var(--text-primary,#fff)", lineHeight: 1.35 }}>
          {m.momento}
        </h3>
      </header>

      {/* La burbuja: es lo que se captura para el carrusel */}
      <div
        style={{
          padding: "14px 16px",
          background: "rgba(0,0,0,0.34)",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: "14px 14px 14px 4px",
          marginBottom: 12,
          position: "relative",
        }}
      >
        <MessageCircle size={14} style={{ color: "#8fa4f5", position: "absolute", top: 14, right: 14, opacity: 0.5 }} />
        <p style={{ margin: 0, fontSize: "0.93rem", color: "var(--text-primary,#e8e8e8)", lineHeight: 1.65, paddingRight: 22 }}>
          {m.texto}
        </p>
      </div>

      <p style={{ margin: 0, fontSize: "0.83rem", color: "var(--text-secondary,#bbb)", lineHeight: 1.55 }}>
        <strong style={{ color: "#22c55e" }}>Por qué funciona:</strong> {m.porque}
      </p>
    </article>
  );
}

export default function ProspectMessageTemplates() {
  return (
    <section
      aria-label="Diez mensajes literales para escribir a personas que todavía no son clientes, cada uno con la situación en que se usa y el motivo por el que funciona"
      style={{
        maxWidth: 900, margin: "40px auto", padding: "28px 24px",
        background: "linear-gradient(180deg, rgba(102,126,234,0.05) 0%, rgba(118,75,162,0.04) 100%)",
        border: "1px solid rgba(102,126,234,0.2)", borderRadius: 20,
      }}
    >
      <h3 style={{ margin: "0 0 6px", fontSize: "1.2rem", fontWeight: 800, color: "var(--text-primary,#fff)", textAlign: "center" }}>
        Los 10 mensajes, para copiar tal cual
      </h3>
      <p style={{ margin: "0 0 24px", textAlign: "center", fontSize: "0.86rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.5 }}>
        <Copy size={13} style={{ verticalAlign: "-2px", marginRight: 5 }} />
        Cambia el nombre y el detalle concreto. El resto funciona tal y como está.
      </p>

      <div>{mensajes.map((m) => <Mensaje key={m.n} m={m} />)}</div>

      <p style={{ marginTop: 16, textAlign: "center", fontSize: "0.8rem", color: "var(--text-secondary,#aaa)", lineHeight: 1.55, fontStyle: "italic" }}>
        Los diez comparten una cosa: <strong style={{ color: "var(--text-primary,#ddd)" }}>ninguno pide comprar</strong>. Piden una respuesta. Vender viene después, y solo si hay conversación.
      </p>
    </section>
  );
}
