import React, { useState, useEffect, useRef } from "react";
import Divider from "../Divider";
import DivTag from "../DivTag";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const InputText = React.forwardRef((props, ref) => {
    const {
        label,
        color,
        padding,
        name,
        inputType,
        listable,
        lists,
        listTitle,
        handleRemoveList,
        placeholder,
        id,
        value,
        onChange,
        width,
        error,
        iconLeft,
        iconRight,
        inputBgc,
        tabIndex,
        labelFadeColor,
        labelColor,
    } = props;

    const [labelScale, setlabelScale] = useState(0.85);
    const [focused, setfocused] = useState(false);
    const [labelWidth, setlabelWidth] = useState(0);
    const [labelOffsetX, setlabelOffsetX] = useState(0);

    const inputField = useRef();

    useEffect(() => {
        if (labelWidth > 0) {
            //offset after scaling
            const labelTextOffesetX = (labelWidth - (labelWidth * labelScale)) / 2;
            setlabelOffsetX(labelTextOffesetX);
        }
    }, [labelWidth]);

    const onLayout = (rect) => {
        const { width } = rect;
        // This rect is updated on every render
        // so it's very important to check is past value is nt same as current
        if (labelWidth != width) {
            setlabelWidth(width);
        }
    };

    const handleFocus = () => {
        setfocused(true);
        if (inputField.current) inputField.current.focus();
    };
    const handleBlur = () => {
        setfocused(false);
    };

    return (
        <DivTag color={color} bgc={inputBgc} bradius={"5px 5px 0 0"} lheight={"normal"} width={width}>
            {listable && lists.length ? (
                <DivTag>
                    <h4>{listTitle}:</h4>
                    <DivTag gap={"3px"}>
                        {lists.map((list, index) => {
                            return (
                                <DivTag key={index} gtc={"auto 1fr auto"} gap={"3px"} color={"#424242"}>
                                    <span>{index + 1}.</span>
                                    <span>{list}</span>
                                    <span style={{ cursor: "pointer", color: "indianred", padding: "0 10px" }} onClick={() => handleRemoveList(index)}>
                                        {/* <HighlightOffIcon /> */}
                                    </span>
                                </DivTag>
                            );
                        })}
                    </DivTag>
                </DivTag>
            ) : (
                ""
            )}
            <DivTag gtc={iconLeft && iconRight ? "auto 1fr auto" : iconLeft ? "auto 1fr" : iconRight ? "1fr auto" : "1fr"} gap={"2px"}>
                {iconLeft ? (
                    <DivTag align="center" alignself="end">
                        {iconLeft}
                    </DivTag>
                ) : (
                    ""
                )}
                <DivTag
                    color={color}
                    position={"relative"}
                    zindex={1}
                    padding={"0 5px"}
                    tabindex={tabIndex} //important to let it trigger focus and blur event
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                >
                    <DivTag
                        onLayout={onLayout}
                        opacity={0}
                        lheight={1}
                        justifyself={"start"}
                        transform={`scale(${labelScale})`}
                    >
                        {label}
                    </DivTag>

                    <DivTag position={"absolute"} left={0} top={0} bottom={0} width={"100%"} align={"end"} justify={"start"} zindex={"-1"} padding={"5px 5px 0px 5px"}>
                        <DivTag
                            lheight={"1.5"}
                            transition={"all 0.2s ease-in-out"}
                            transform={
                                value.length || focused || props.staticLabel ? `translate(${-(labelOffsetX + 2)}px, -16px ) scale(${labelScale})` : `translate(0px, 0px ) scale(1)`
                            }
                            color={value.length || focused || props.staticLabel ? labelFadeColor : labelColor}
                        >
                            {label}
                        </DivTag>
                    </DivTag>

                    <DivTag>
                        {props.textarea ?
                            <textarea
                                ref={ref || inputField}
                                type={inputType}
                                name={name}
                                placeholder={focused ? placeholder : ""}
                                onChange={onChange}
                                id={id}
                                value={value}
                                autoComplete={props.autoComplete}
                                autoFocus={props.autoFocus}
                                style={{ padding }}
                            ></textarea>
                            :
                            <input
                                ref={ref || inputField}
                                type={inputType}
                                name={name}
                                placeholder={focused ? placeholder : ""}
                                onChange={onChange}
                                id={id}
                                value={value}
                                autoComplete={props.autoComplete}
                                autoFocus={props.autoFocus}
                                style={{ padding }}
                            // onFocus={ handleFocus }
                            // onBlur={ handleBlur }
                            />
                        }
                    </DivTag>
                </DivTag>
                {iconRight ? (
                    <DivTag align="center" alignself="end">
                        {iconRight}
                    </DivTag>
                ) : (
                    ""
                )}
            </DivTag>
            {props.lineIndicator != false ? <Divider color={error ? "indianred" : "#6b7280"} height={focused || error ? 2 : 1} scale={1} /> : ""}
            <style jsx>{`
                input {
                    ${'width' in props ? `width: ${props.width}` : ""};
                    ${'color' in props ? `color: ${props.color}` : ""};
                    ${'bgc' in props ? `background: ${props.bgc}` : `background: transparent`};
                    outline: none !important;
                    border: unset !important;
                }
                .custom-div::placeholder {
                    font-weight: 400;
                    color: black;
                    font-size: small;
                }
            `}</style>
        </DivTag>
    );
});

export default InputText;
