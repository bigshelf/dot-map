import { IAnimator } from './IAnimator';
import { Layer } from './Layer';
import { IRenderer } from './IRenderer';

export class ComponentLayerAnimator implements IAnimator {
  layer: Layer;

  constructor(layer: Layer, renderer: IRenderer) {
    this.layer = layer;
    renderer.animation?.add(this);
  }

  loop = () => {
    this.layer.update();
  };

  start = () => {
    this.loop();
  };
}
