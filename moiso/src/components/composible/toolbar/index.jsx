const ToolBar = () => {
  return (
    <div
      style={{
        display: "flex",
        background: "#FFF",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <h1
        style={{
          fontFamily: "NotoSansKR-Medium",
          fontSize: "32px",
          background:
            "linear-gradient(to bottom right, #FFBEC8, #FFA9B5, #4CF590)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          userSelect: "none",
          padding: "6px 0px 6px 23px",
        }}
      >
        모이소
      </h1>

      <h1
        style={{
          fontFamily: "NotoSansKR-Medium",
          fontSize: "20px",
          color: "#979797",
          userSelect: "none",
          padding: "6px 23px 6px 0px",
        }}
      >
        로그인
      </h1>
    </div>
  );
};

export default ToolBar;
