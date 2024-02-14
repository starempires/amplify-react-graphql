import React from 'react';
import Konva from 'konva';
import { RegularPolygon } from 'react-konva';

export default function Hex(props) {
    return (
        <RegularPolygon
            x={props.x}
            y={props.y}
            sides={6}
            radius={15}
            rotation={30}
            fill={props.color}
        />
    );
}