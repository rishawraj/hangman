const HEAD = (
  <div
    key={1}
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "-30px",
    }}
  />
);
const BODY = (
  <div
    key={2}
    style={{
      width: "10px",
      height: "150px",
      background: "black",
      position: "absolute",
      top: "110px",
      right: "0px",
    }}
  />
);
const LEFT_ARM = (
  <div
    key={3}
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "70px",
      right: "0px",
      rotate: "-50deg",
      transformOrigin: "right bottom",
    }}
  />
);
const RIGHT_ARM = (
  <div
    key={4}
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "70px",
      right: "0px",
      rotate: "50deg",
      transformOrigin: "left bottom",
    }}
  />
);
const RIGHT_LEG = (
  <div
    key={5}
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "250px",
      right: "0px",
      rotate: "50deg",
      transformOrigin: "left top",
    }}
  />
);
const LEFT_LEG = (
  <div
    key={6}
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "250px",
      right: "0px",
      rotate: "-50deg",
      transformOrigin: "right top",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          height: "400px",
          width: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
