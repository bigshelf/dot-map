import { Line } from './Line';
import { RendererContext } from '@dot-map-renderer/canvas/src/RendererContext';
import { formatll, llToStagell, Point } from '@dot-map-renderer/component';
import { LineData } from './LineData';
import { Collider } from '@dot-map-renderer/collider';

export class BasicLine implements Line
{
    startDrawPoint: Point | undefined;
    endDrawPoint: Point | undefined;

    startPoint;
    endPoint;
    interaction;
    collider: Collider;

    constructor(lineData: LineData, options?: {
        interaction: boolean;
    })
    {
        const [start, end] = lineData;

        this.startPoint = start;
        this.endPoint = end;
        this.interaction = options?.interaction ?? false;

        this.collider = new Collider(this, [
            this.startPoint,
            [this.startPoint[0] + 10, this.startPoint[1] + 10],
            this.endPoint,
            [this.endPoint[0] + 10, this.endPoint[1] + 10]
        ]);
    }

    draw(context: CanvasRenderingContext2D): void
    {
        const [startX, startY] = this.startDrawPoint!;
        const [endX, endY] = this.endDrawPoint!;

        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.lineWidth = 10;
        context.stroke();
        context.closePath();
    }

    resize({
        stageWidth,
        stageHeight,
        stageX,
        stageY
    }: RendererContext): void
    {
        const [startX, startY] = llToStagell(formatll([this.startPoint[1], this.startPoint[0]]), stageWidth, stageHeight);
        const [endX, endY] = llToStagell(formatll([this.endPoint[1], this.endPoint[0]]), stageWidth, stageHeight);

        this.startDrawPoint = [
            startX + stageX,
            startY + stageY
        ];

        this.endDrawPoint = [
            endX + stageX,
            endY + stageY
        ];
    }

    hit(point: Point): Line | null
    {
        if (!this.interaction)
        {
            return null;
        }

        return this.collider.hit(point);
    }
}