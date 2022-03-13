import { Point, Canvas } from '@dot-map-renderer/component';
import { GeoJSONRendererOption } from './GeoJSONRendererOption';
export declare class GeoJSONRenderer
{
    private readonly bufferCanvas;
    private readonly polygons;
    anchorPoints: Array<Point>;
    private attachingElement;
    private option;
    readonly canvas: Canvas;
    readonly parent: HTMLElement;
    stageHeight: number;
    stageWidth: number;
    stageX: number;
    stageY: number;
    image: HTMLImageElement;
    zoom: number;
    get pixelAndGapSize(): number;
    get pixelSize(): number;
    get gapSize(): number;
    constructor(attachingElement: HTMLElement, geoJsonRendererOption: GeoJSONRendererOption);
    private loadGeoJson;
    private initHTML;
    private initInteraction;
    private initImage;
    private resizeStage;
    private resizePolygons;
    private makeDots;
    run: () => void;
    resize: () => void;
    draw: () => void;
    drawAnchors: () => void;
}
