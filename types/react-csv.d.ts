export class CSVDownload {
  static defaultProps: {
    asyncOnClick: boolean;
    filename: string;
    separator: string;
    target: string;
    uFEFF: boolean;
  };
  constructor(props: any);
  buildURI(...args: any[]): any;
  componentDidMount(): void;
  forceUpdate(callback: any): void;
  getWindow(): any;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace CSVDownload {
  namespace propTypes {
    function asyncOnClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace asyncOnClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function filename(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace filename {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function headers(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace headers {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function separator(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace separator {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace target {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function uFEFF(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace uFEFF {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
export class CSVLink {
  static defaultProps: {
    asyncOnClick: boolean;
    filename: string;
    separator: string;
    target: string;
    uFEFF: boolean;
  };
  constructor(props: any);
  buildURI(...args: any[]): any;
  componentDidMount(): void;
  componentWillReceiveProps(nextProps: any): void;
  forceUpdate(callback: any): void;
  handleAsyncClick(event: any, ...args: any[]): void;
  handleClick(...args: any[]): any;
  handleLegacy(event: any, data: any, headers: any, separator: any, filename: any, enclosingCharacter: any): any;
  handleSyncClick(event: any, ...args: any[]): void;
  render(): any;
  setState(partialState: any, callback: any): void;
}
export namespace CSVLink {
  namespace propTypes {
    function asyncOnClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace asyncOnClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function data(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    function filename(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace filename {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function headers(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace headers {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function onClick(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace onClick {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function separator(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace separator {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function target(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace target {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
    function uFEFF(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    namespace uFEFF {
      function isRequired(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any): any;
    }
  }
}
