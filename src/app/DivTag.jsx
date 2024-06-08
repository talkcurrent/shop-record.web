"use client";

import React, { useEffect, useRef } from "react";

const DivTag = React.forwardRef((props, ref) => {
    const element = useRef();
    useEffect(() => {
        onLayout();
    });

    useEffect(() => {
        if ("onMounted" in props) {
            props.onMounted();
        }
    }, []);

    const onLayout = () => {
        if (('onLayout' in props) && element.current) {
            const el = ref || element
            props.onLayout(el.current.getBoundingClientRect());
        }
    };

    const handleOnClick = (e) => {
        if (props.handleClick) {
            props.handleClick(e);
        }
    };

    const handleOnDragStart = (e) => {
        if (props.handleDragStart) {
            props.handleDragStart(e);
        }
    };
    const handleOnMouseDown = (e) => {
        if (props.handleMouseDown) {
            props.handleMouseDown(e);
        }
    };
    const handleOnScroll = (e) => {
        if (props.handleScroll) {
            props.handleScroll(e);
        }
    };

    return (
        <div
            ref={ref || element}
            id={props.id}
            tabIndex={props.tabIndex}
            onFocus={props.handleFocus}
            onBlur={props.handleBlur}
            className={'custom-div'}
            onClick={(e) => handleOnClick(e)}
            onScroll={(e) => handleOnScroll(e)}
            onDragStart={(e) => handleOnDragStart(e)}
            onMouseDown={(e) => handleOnMouseDown(e)}
        >
            {props.children}
            <style jsx>{`
                .custom-div {
                    ${'display' in props ? `display: ${props.display}` : `display: grid`};
                    ${'visibility' in props ? `visibility: ${props.visibility}` : ""};
                    ${'gtr' in props ? `grid-template-rows: ${props.gtr}` : ""};
                    ${'gtc' in props ? `grid-template-columns: ${props.gtc}` : ""};
                    ${'gar' in props ? `grid-auto-rows: ${props.gar}` : ""};
                    ${'gac' in props ? `grid-auto-columns: ${props.gac}` : ""};
                    ${'gaf' in props ? `grid-auto-flow: ${props.gaf}` : ""};
                    ${'gridcol' in props ? `grid-column: ${props.gridcol}` : ""};
                    ${'gridrow' in props ? `grid-row: ${props.gridrow}` : ""};
                    ${'padding' in props ? `padding: ${props.padding}` : ""};
                    ${'position' in props ? `position: ${props.position}` : ""};
                    ${'top' in props ? `top: ${props.top}` : ""};
                    ${'bottom' in props ? `bottom: ${props.bottom}` : ""};
                    ${'border' in props ? `border: ${props.border}` : ""};
                    ${'borderb' in props ? `border-bottom: ${props.borderb}` : ""};
                    ${'borderl' in props ? `border-left: ${props.borderl}` : ""};
                    ${'borderr' in props ? `border-right: ${props.borderr}` : ""};
                    ${'bradius' in props ? `border-radius: ${props.bradius}` : ""};
                    ${'tshadow' in props ? `text-shadow: ${props.tshadow}` : ""};
                    ${'bshadow' in props ? `box-shadow: ${props.bshadow}` : ""};
                    ${'fstyle' in props ? `font-style: ${props.fstyle}` : ""};
                    ${'left' in props ? `left: ${props.left}` : ""};
                    ${'right' in props ? `right: ${props.right}` : ""};
                    ${'margin' in props ? `margin: ${props.margin}` : ""};
                    ${'gap' in props ? `gap: ${props.gap}` : ""};
                    ${'talign' in props ? `text-align: ${props.talign}` : ""};
                    ${'textdecoration' in props ? `text-decoration: ${props.textdecoration}` : ""};
                    ${'align' in props ? `align-items: ${props.align}` : ""};
                    ${'aligncontent' in props ? `align-content: ${props.aligncontent}` : ""};
                    ${'alignself' in props ? `align-self: ${props.alignself}` : ""};
                    ${'justify' in props ? `justify-items: ${props.justify}` : ""};
                    ${'justifycontent' in props ? `justify-content: ${props.justifycontent}` : ""};
                    ${'justifyself' in props ? `justify-self: ${props.justifyself}` : ""};
                    ${'visibility' in props ? `visibility: ${props.visibility}` : ""};
                    ${'bgc' in props ? `background: ${props.bgc} ` : ""};
                    ${'bgi' in props ? `background-image: ${props.bgi} ` : ""};
                    ${'bga' in props ? `background-attachment: ${props.bga} ` : ""};
                    ${'bgr' in props ? `background-repeat: ${props.bgr} ` : ""};
                    ${'bgp' in props ? `background-position: ${props.bgp} ` : ""};
                    ${'bgs' in props ? `background-size: ${props.bgs} ` : ""};
                    ${'height' in props ? `height: ${props.height}` : ""};
                    ${'minheight' in props ? `min-height: ${props.minheight}` : ""};
                    ${'maxheight' in props ? `max-height: ${props.maxheight}` : ""};
                    ${'width' in props ? `width: ${props.width}` : ""};
                    ${'minwidth' in props ? `min-width: ${props.minwidth}` : ""};
                    ${'maxwidth' in props ? `max-width: ${props.maxwidth}` : ""};
                    ${'fsize' in props ? `font-size: ${props.fsize}` : ""};
                    ${'lheight' in props ? `line-height: ${props.lheight}` : ""};
                    ${'lspacing' in props ? `letter-spacing: ${props.lspacing}` : ""};
                    ${'wspace' in props ? `white-space: ${props.wspace}` : ""};
                    ${'color' in props ? `color: ${props.color}` : ""};
                    ${'cursor' in props ? `cursor: ${props.cursor}` : ""};
                    ${'fweight' in props ? `font-weight: ${props.fweight}` : ""};
                    ${'ffamily' in props ? `font-family: ${props.ffamily}` : ""};
                    ${'overflow' in props ? `overflow: ${props.overflow}` : ""};
                    ${'opacity' in props ? `opacity: ${props.opacity}` : ""};
                    ${'transition' in props ? `transition: ${props.transition}` : ""};
                    ${'transform' in props ? `transform: ${props.transform}` : ""};
                    ${'zindex' in props ? `z-index: ${props.zindex}` : ""};
                }
                .custom-div:hover {
                    ${'hovercolor' in props ? `color: ${props.hovercolor}` : ""};
                    ${'hoverbgc' in props ? `background: ${props.hoverbgc}` : ""};
                    ${'hovershadow' in props ? `box-shadow: ${props.hovershadow}` : ""};
                }
                .custom-div:nth-of-type( ${props.nthchild}) {
                    ${'nthchildcolor' in props ? `color: ${props.nthchildcolor}` : ""};
                    ${'nthchildbgc' in props ? `background-color: ${props.nthchildbgc}` : ""};
                }
            `}</style>
        </div>
    );
});

export default DivTag;
