declare interface TuningConfig {
  tunings: {
    widget_open_hotkey?: string;
  };
}

interface KeyEvent extends KeyboardEvent {
  [key: string]: any;
}

enum FuncKeys {
  altKey = 'altKey',
  ctrlKey = 'ctrlKey',
  shiftKey = 'shiftKey',
}

type Key = FuncKeys.altKey | FuncKeys.ctrlKey | FuncKeys.shiftKey | string;

const DEFAULT_OPEN_HOTKEY: Key[] = [FuncKeys.ctrlKey, 'KeyU'];

const getWidgetHotkeys = (config: TuningConfig) => {
  let hotkeys: Key[] = JSON.parse((config && config?.tunings?.widget_open_hotkey) || 'null');
  if(hotkeys){
    hotkeys = hotkeys.filter(Boolean)
  }
  return hotkeys?.length >=2 ? hotkeys : DEFAULT_OPEN_HOTKEY;
};

export const isHotkeyToOpenWidget = (config: TuningConfig, event: KeyEvent) => {
  const keys = getWidgetHotkeys(config);
  return keys?.every((key) => event.code === key || event[key]);
};

export const getHotkeyString = (config: TuningConfig) => {
  let keys = [...getWidgetHotkeys(config)];

  return keys
    .map((key) => {
      switch (key) {
        case FuncKeys.altKey:
          return 'ALT';

        case FuncKeys.shiftKey:
          return 'SHIFT';

        case FuncKeys.ctrlKey:
          return 'CTRL';

        default:
          return key.replace('Key', '');
      }
    })
    .join('+');
};
