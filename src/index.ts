import publicApi, { getInternalApi } from './api/Api';
import Core from './Core';
import Main from './components/Main';

const _internal = {
  components: {
    Main
  },
  scrollBarHeight: 17,
  height: 0,
  treeMap: {},
  flatTreeMap: [],
  flatTreeMapById: {},
  list: {
    expandedHeight: 0,
    visibleRows: [],
    rows: {},
    width: 0
  },
  dimensions: {
    width: 0,
    height: 0
  },
  chart: {
    dimensions: {
      width: 0,
      innerWidth: 0
    },
    visibleItems: [],
    time: {
      dates: [],
      timePerPixel: 0,
      firstTaskTime: 0,
      lastTaskTime: 0,
      totalViewDurationMs: 0,
      totalViewDurationPx: 0,
      leftGlobal: 0,
      rightGlobal: 0,
      leftPx: 0,
      rightPx: 0,
      leftInner: 0,
      rightInner: 0
    }
  },
  elements: {}
};

const GSTC = options => {
  const state = options.state;
  const api = getInternalApi(state);
  // @ts-ignore
  window.state = state;

  state.update('', oldValue => {
    return {
      config: oldValue.config,
      _internal
    };
  });
  const core = Core(state, api);
  window._core = core;
  const app = core.createApp(Main, options.element);
  return { state };
};

GSTC.api = publicApi;
export default GSTC;