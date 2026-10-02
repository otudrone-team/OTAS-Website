declare module 'animejs' {
  export interface AnimeTimelineInstance {
    add(params: any, timelineOffset?: number | string): AnimeTimelineInstance;
    play(): void;
    pause(): void;
    restart(): void;
    reverse(): void;
    seek(time: number): void;
  }

  export interface AnimeInstance {
    play(): void;
    pause(): void;
    restart(): void;
    reverse(): void;
    seek(time: number): void;
  }

  function anime(params: any): AnimeInstance;

  namespace anime {
    export type AnimeInstance = import('animejs').AnimeInstance;
    export type AnimeTimelineInstance = import('animejs').AnimeTimelineInstance;
    function timeline(params?: any): AnimeTimelineInstance;
    function remove(targets: any): void;
    function stagger(value: number | [number, number], options?: any): (el: any, i: number, total: number) => number;
    function setDashoffset(el: any): number;
  }

  export default anime;
}
