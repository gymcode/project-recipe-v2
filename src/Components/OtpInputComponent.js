import "./main.css"

function OTPInputComponent({ numInputs, style }) {
    return (
        <main className="flex ">
            <div className="pr-4">
                <input
                    type={"text"}
                    minLength={1}
                    maxLength={1}
                    style={
                        {
                            borderRadius: 50,
                            border: "1px solid black",
                            height: "2rem",
                            width: "2rem",
                            textAlign: "center",
                            ...style
                        }
                    }
                />
            </div>
            <div>
                <input
                    type={"text"}
                    minLength={1}
                    maxLength={1}
                    style={
                        {
                            borderRadius: 50,
                            border: "1px solid black",
                            height: "2rem",
                            width: "2rem",
                            textAlign: "center",
                            ...style
                        }
                    }
                />
            </div>


        </main>
    )
}

export default OTPInputComponent