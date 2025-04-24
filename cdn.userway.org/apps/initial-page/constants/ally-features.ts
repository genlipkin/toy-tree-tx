/*
     s1 - Keyboard Navigation // todo note, removed
     s2 - Cursor
     s3 - Contrast
     s10 - Reading Guide
     s4 - Bigger Text
     s6 - Highlight links
     s7 - Legible fonts
     s9 - Reader
     s11 - Page structure
     s12 - Tooltips
     s13 - Stop Animations
     s14 - Text Spacing
     s15 - Dyslexia Font
     s16 - Reading Mask
     s17 - Line height
     s18 - Smart Contrast
     s19 - Text Align
     s21 - Dictionary
     s23 - Saturation
     s24 - Voice Navigation
     s25 - Hide images
     s101 - Motor Impaired (Profile)
     s102 - Blind Reader (Profile)
     s103 - Color Blind (Profile)
     s104 - Dyslexia (Profile)
     s105 - Visually-impaired (Profile)
     s106 - Cognitive & Learning (Profile)
     s107 - Seizure & Epileptic (Profile)
     s108 - ADHD (Profile)
    */

export const ALLY_FEATURES = {
  /* 's1': {
        description: 'Keyboard Navigation',
        modifyMenuLabel: 'Keyboard Nav',
        actionStates: {
            0: {
                'iconClass': 'keyboard-nav',
                'iconAlt': 'widget.menu.keyboard_nav.alt',
                'label': 'widget.menu.keyboard_nav.label',
                'aria': 'widget.menu.keyboard_nav.aria'
            },
            1: {
                'iconClass': 'keyboard-nav',
                'iconAlt': 'widget.menu.keyboard_nav.alt',
                'label': 'widget.menu.keyboard_nav.label',
                'aria': 'widget.menu.keyboard_nav.aria_on_action'
            }
        },
        onActionTrigger: function (actionState) {
            let trigger: Record<string, string | number> = {feature: 's1'};
            if (actionState === 0 || !actionState) {
                trigger.actionState = 1;
                trigger.toRead = 'widget.menu.keyboard_nav.aria_on_action'
            } else {
                trigger.actionState = 0;
                trigger.toRead = 'widget.menu.keyboard_nav.aria_off_action'
            }
            return trigger;
        }
    }, */

  s2: {
    description: 'Cursor / Reading Guide',
    googleAnalyticsEventName: 'userway_cursor',
    modifyMenuLabel: 'Big Cursor',
    actionStates: {
      0: {
        iconClass: 'cursor-1',
        iconAlt: '',
        label: 'widget.menu.cursor.label',
        aria: 'widget.menu.cursor.aria',
      },
      1: {
        iconClass: 'cursor-1',
        iconAlt: '',
        label: 'widget.menu.big_cursor.label',
        aria: 'widget.menu.big_cursor.aria',
      },

      2: {
        iconClass: 'reading-mask',
        iconAlt: '',
        label: 'widget.menu.reading_mask.label',
        aria: 'widget.menu.reading_mask.aria',
      },
      3: {
        iconClass: 'reading-guide',
        iconAlt: '',
        label: 'widget.menu.reading_guide.label',
        aria: 'widget.menu.reading_guide.aria',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's2' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.big_cursor.aria';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.reading_mask.aria';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = 'widget.menu.reading_guide.aria';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.cursor.aria_off_action';
      }

      return trigger;
    },
  },

  s3: {
    description: 'Contrast',
    googleAnalyticsEventName: 'userway_contrast',
    modifyMenuLabel: 'Contrast',
    actionStates: {
      0: {
        iconClass: 'contrast-plus',
        iconAlt: '',
        label: 'widget.menu.contrast.label.v0',
        aria: 'widget.menu.contrast.aria.v0',
      },
      1: {
        iconClass: 'contrast-2',
        iconAlt: '',
        label: 'widget.menu.contrast.label.v1',
        aria: 'widget.menu.contrast.aria.v1',
      },
      2: {
        iconClass: 'contrast-3',
        iconAlt: '',
        label: 'widget.menu.contrast.label.v2',
        aria: 'widget.menu.contrast.aria.v2',
      },
      3: {
        iconClass: 'contrast-4',
        iconAlt: '',
        label: 'widget.menu.contrast.label.v3',
        aria: 'widget.menu.contrast.aria.v3',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's3' };
      if (actionState === 0) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.contrast.aria.v1';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.contrast.aria.v2';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = 'widget.menu.contrast.aria.v3';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.contrast.aria_off_action';
      }

      return trigger;
    },
  },

  s4: {
    description: 'Bigger Text',
    googleAnalyticsEventName: 'userway_bigger_text',
    modifyMenuLabel: 'Bigger Text',
    actionStates: {
      0: {
        iconClass: 'bigger-text-1',
        iconWrapClass: 'bigger-text',
        iconAlt: 'widget.menu.bigger_text.alt.img',
        label: 'widget.menu.bigger_text.label',
        aria: 'widget.menu.bigger_text.aria.v0',
      },
      1: {
        iconClass: 'bigger-text-2',
        iconWrapClass: 'bigger-text',
        iconAlt: 'widget.menu.bigger_text.alt.img',
        label: 'widget.menu.bigger_text.label',
        aria: 'widget.menu.bigger_text.aria.v1',
      },
      2: {
        iconClass: 'bigger-text-3',
        iconWrapClass: 'bigger-text',
        iconAlt: 'widget.menu.bigger_text.alt.img',
        label: 'widget.menu.bigger_text.label',
        aria: 'widget.menu.bigger_text.aria.v2',
      },
      3: {
        iconClass: 'bigger-text-4',
        iconWrapClass: 'bigger-text',
        iconAlt: 'widget.menu.bigger_text.alt.img',
        label: 'widget.menu.bigger_text.label',
        aria: 'widget.menu.bigger_text.aria.v3',
      },
      4: {
        iconClass: 'bigger-text-5',
        iconWrapClass: 'bigger-text',
        iconAlt: 'widget.menu.bigger_text.alt.img',
        label: 'widget.menu.bigger_text.label',
        aria: 'widget.menu.bigger_text.aria.v4',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's4' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.bigger_text.aria.v1';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.bigger_text.aria.v2';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = 'widget.menu.bigger_text.aria.v3';
      } else if (actionState === 3) {
        trigger.actionState = 4;
        trigger.toRead = 'widget.menu.bigger_text.aria.v4';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.bigger_text.aria_off_action';
      }

      return trigger;
    },
  },

  s6: {
    description: 'Highlight links',
    googleAnalyticsEventName: 'userway_highlight_links',
    modifyMenuLabel: 'Highlight Links',
    actionStates: {
      0: {
        iconClass: 'highlight-links',
        iconAlt: 'widget.menu.underline_links.alt',
        label: 'widget.menu.underline_links.label',
        aria: 'widget.menu.underline_links.aria',
      },
      1: {
        iconClass: 'highlight-links',
        iconAlt: 'widget.menu.underline_links.alt',
        label: 'widget.menu.underline_links.label',
        aria: 'widget.menu.underline_links.aria_on_action',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's6' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.underline_links.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.underline_links.aria_off_action';
      }
      return trigger;
    },
  },

  s7: {
    description: 'Legible fonts',
    googleAnalyticsEventName: 'userway_dyslexia',
    modifyMenuLabel: 'Dyslexia/Legible Fonts',
    actionStates: {
      0: {
        iconClass: 'font-1',
        iconAlt: 'widget.menu.dyslexia_friendly.alt',
        label: 'widget.menu.dyslexia_friendly.label',
        aria: 'widget.menu.dyslexia_friendly.aria',
      },
      1: {
        iconClass: 'font-2',
        iconAlt: 'widget.menu.dyslexia_friendly.alt',
        label: 'widget.menu.dyslexia_friendly.label',
        aria: 'widget.menu.dyslexia_friendly.aria_on_action',
      },
      2: {
        iconClass: 'font-3',
        iconAlt: 'widget.menu.legible_fonts.alt',
        label: 'widget.menu.legible_fonts.label',
        aria: 'widget.menu.legible_fonts.aria',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's7' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.dyslexia_friendly.aria_on_action';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.legible_fonts.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.legible_fonts.aria_off_action';
      }
      return trigger;
    },
  },

  s8: {
    description: 'Reset All',
    modifyMenuLabel: 'Reset All',
    actionStates: {
      0: {
        iconClass: 'reload',
        iconAlt: 'widget.menu.reset.labelV2',
        label: 'widget.menu.reset.labelV2',
        aria: 'widget.menu.reset.aria',
      },
    },
    onActionTrigger() {
      return {
        feature: 's8',
        actionState: 0,
        toRead: 'widget.menu.reset.aria_off_action',
      };
    },
  },

  s9: {
    description: 'Screen Reader',
    googleAnalyticsEventName: 'userway_screen_reader',
    modifyMenuLabel: 'Screen Reader',
    actionStates: {
      0: {
        iconClass: 'reading-1',
        iconAlt: '',
        label: 'widget.menu.responsive_voice.label.v0',
        aria: 'widget.menu.responsive_voice.aria.v0',
        aria_wl: 'widget.menu.responsive_voice.aria_wl.v0',
      },
      1: {
        iconClass: 'reading-2',
        iconAlt: '',
        label: 'widget.menu.responsive_voice.label.v1',
        aria: 'widget.menu.responsive_voice.aria.v1',
        aria_wl: 'widget.menu.responsive_voice.aria_wl.v1',
      },
      2: {
        iconClass: 'reading-3',
        iconAlt: '',
        label: 'widget.menu.responsive_voice.label.v2',
        aria: 'widget.menu.responsive_voice.aria.v2',
        aria_wl: 'widget.menu.responsive_voice.aria_wl.v2',
      },
      3: {
        iconClass: 'reading-4',
        iconAlt: '',
        label: 'widget.menu.responsive_voice.label.v3',
        aria: 'widget.menu.responsive_voice.aria.v3',
        aria_wl: 'widget.menu.responsive_voice.aria_wl.v3',
      },
    },
    onActionTrigger(actionState, { isWhiteLabeled }) {
      const trigger: Record<string, string | number> = { feature: 's9' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = isWhiteLabeled
          ? 'widget.menu.responsive_voice.aria_wl.v1'
          : 'widget.menu.responsive_voice.aria.v1';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = isWhiteLabeled
          ? 'widget.menu.responsive_voice.aria_wl.v2'
          : 'widget.menu.responsive_voice.aria.v2';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = isWhiteLabeled
          ? 'widget.menu.responsive_voice.aria_wl.v3'
          : 'widget.menu.responsive_voice.aria.v3';
      } else {
        trigger.actionState = 0;
        trigger.toRead = isWhiteLabeled
          ? 'widget.menu.responsive_voice.aria_off_action_wl'
          : 'widget.menu.responsive_voice.aria_off_action';
      }

      return trigger;
    },
  },

  s12: {
    description: 'Tooltips',
    googleAnalyticsEventName: 'userway_tooltips',
    modifyMenuLabel: 'Tooltips',
    actionStates: {
      0: {
        iconClass: 'tooltips',
        iconAlt: '',
        label: 'widget.menu.tooltips.label',
        aria: 'widget.menu.tooltips.aria',
      },
      1: {
        iconClass: 'tooltips',
        iconAlt: '',
        label: 'widget.menu.tooltips.label',
        aria: 'widget.menu.tooltips.aria_on_action',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's12' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.tooltips.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.tooltips.aria_off_action';
      }
      return trigger;
    },
  },

  s11: {
    description: 'Page structure',
    googleAnalyticsEventName: 'userway_page_structure',
    modifyMenuLabel: 'Page Structure',
    actionStates: {
      0: {
        iconClass: 'page-structure',
        iconAlt: '',
        label: 'widget.menu.page_structure.label',
        aria: 'widget.menu.page_structure.aria',
      },
      1: {
        iconClass: 'page-structure',
        iconAlt: '',
        label: 'widget.menu.page_structure.label',
        aria: 'widget.menu.page_structure.aria_on_action',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's11' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.page_structure.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.page_structure.aria_off_action';
      }
      return trigger;
    },
  },

  s13: {
    description: 'Pause Animations',
    googleAnalyticsEventName: 'userway_pause_animations',
    modifyMenuLabel: 'Pause Animations',
    actionStates: {
      0: {
        iconClass: 'pause',
        iconAlt: '',
        label: 'widget.menu.stop_animations.label.v0',
        aria: 'widget.menu.stop_animations.aria',
      },
      1: {
        iconClass: 'play',
        iconAlt: '',
        label: 'widget.menu.stop_animations.label.v1',
        aria: 'widget.menu.stop_animations.aria_on_action',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's13' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.stop_animations.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.stop_animations.aria_off_action';
      }
      return trigger;
    },
  },

  s14: {
    description: 'Text Spacing',
    googleAnalyticsEventName: 'userway_text_spacing',
    modifyMenuLabel: 'Text Spacing',
    actionStates: {
      0: {
        iconClass: 'spacing-1',
        iconAlt: 'widget.menu.spacing_text.alt',
        label: 'widget.menu.spacing_text.label.v0',
        aria: 'widget.menu.spacing_text.aria.v0',
      },
      1: {
        iconClass: 'spacing-2',
        iconAlt: 'widget.menu.spacing_text.alt',
        label: 'widget.menu.spacing_text.label.v1',
        aria: 'widget.menu.spacing_text.aria.v1',
      },
      2: {
        iconClass: 'spacing-3',
        iconAlt: 'widget.menu.spacing_text.alt',
        label: 'widget.menu.spacing_text.label.v2',
        aria: 'widget.menu.spacing_text.aria.v2',
      },
      3: {
        iconClass: 'spacing-4',
        iconAlt: 'widget.menu.spacing_text.alt',
        label: 'widget.menu.spacing_text.label.v3',
        aria: 'widget.menu.spacing_text.aria.v3',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's14' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.spacing_text.aria.v1';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.spacing_text.aria.v2';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = 'widget.menu.spacing_text.aria.v3';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.spacing_text.aria_off_action';
      }
      return trigger;
    },
  },

  s17: {
    description: 'Line Height',
    googleAnalyticsEventName: 'userway_line_height',
    modifyMenuLabel: 'Line Height',
    actionStates: {
      0: {
        iconClass: 'line-height-1',
        iconAlt: 'widget.menu.line_height.alt',
        label: 'widget.menu.line_height.label.v0',
        aria: 'widget.menu.line_height.aria.v0',
      },
      1: {
        iconClass: 'line-height-2',
        iconAlt: 'widget.menu.line_height.alt',
        label: 'widget.menu.line_height.label.v1',
        aria: 'widget.menu.line_height.aria.v1',
      },
      2: {
        iconClass: 'line-height-3',
        iconAlt: 'widget.menu.line_height.alt',
        label: 'widget.menu.line_height.label.v2',
        aria: 'widget.menu.line_height.aria.v2',
      },
      3: {
        iconClass: 'line-height-4',
        iconAlt: 'widget.menu.line_height.alt',
        label: 'widget.menu.line_height.label.v3',
        aria: 'widget.menu.line_height.aria.v3',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's17' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.line_height.aria.v1';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.line_height.aria.v2';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = 'widget.menu.line_height.aria.v3';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.line_height.aria_off_action';
      }
      return trigger;
    },
  },
  s18: {
    description: 'Smart Contrast',
    googleAnalyticsEventName: 'userway_smart_contrast',
    modifyMenuLabel: 'Smart Contrast',
    actionStates: {
      0: {
        iconClass: 'smart-contrast',
        iconAlt: '',
        label: 'widget.menu.smart_contrast.label',
        aria: 'widget.menu.smart_contrast.aria',
      },
      1: {
        iconClass: 'smart-contrast',
        iconAlt: '',
        label: 'widget.menu.smart_contrast.label',
        aria: 'widget.menu.smart_contrast.aria',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's18' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.smart_contrast.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.smart_contrast.aria_off_action';
      }
      return trigger;
    },
  },
  s19: {
    description: 'Text Align',
    googleAnalyticsEventName: 'userway_text_align',
    modifyMenuLabel: 'Text Align',
    actionStates: {
      0: {
        iconClass: 'text-align-1',
        iconAlt: 'widget.menu.text_align.alt',
        label: 'widget.menu.text_align.label.v0',
        aria: 'widget.menu.text_align.aria.v0',
      },
      1: {
        iconClass: 'text-align-2',
        iconAlt: 'widget.menu.text_align.alt',
        label: 'widget.menu.text_align.label.v1',
        aria: 'widget.menu.text_align.aria.v1',
      },
      2: {
        iconClass: 'text-align-3',
        iconAlt: 'widget.menu.text_align.alt',
        label: 'widget.menu.text_align.label.v2',
        aria: 'widget.menu.text_align.aria.v2',
      },
      3: {
        iconClass: 'text-align-4',
        iconAlt: 'widget.menu.text_align.alt',
        label: 'widget.menu.text_align.label.v3',
        aria: 'widget.menu.text_align.aria.v3',
      },
      4: {
        iconClass: 'text-align-5',
        iconAlt: 'widget.menu.text_align.alt',
        label: 'widget.menu.text_align.label.v4',
        aria: 'widget.menu.text_align.aria.v4',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's19' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.text_align.aria.v1';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.text_align.aria.v2';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = 'widget.menu.text_align.aria.v3';
      } else if (actionState === 3) {
        trigger.actionState = 4;
        trigger.toRead = 'widget.menu.text_align.aria.v4';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.text_align.aria_off_action';
      }
      return trigger;
    },
  },
  s21: {
    description: 'Dictionary',
    googleAnalyticsEventName: 'userway_dictionary',
    modifyMenuLabel: 'Dictionary',
    actionStates: {
      0: {
        iconClass: 'dictionary',
        iconAlt: 'widget.menu.dictionary.alt',
        label: 'widget.menu.dictionary.label.v0',
        aria: 'widget.menu.dictionary.aria.v0',
      },
      1: {
        iconClass: 'dictionary',
        iconAlt: 'widget.menu.dictionary.alt',
        label: 'widget.menu.dictionary.label.v1',
        aria: 'widget.menu.dictionary.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's21' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.dictionary.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.dictionary.aria_off_action';
      }
      return trigger;
    },
  },
  s23: {
    description: 'Saturation',
    googleAnalyticsEventName: 'userway_saturation',
    modifyMenuLabel: 'Saturation',
    actionStates: {
      0: {
        iconClass: 'saturation-1',
        iconAlt: 'widget.menu.saturation.alt',
        label: 'widget.menu.saturation.label.v0',
        aria: 'widget.menu.saturation.aria.v0',
      },
      1: {
        iconClass: 'saturation-2',
        iconAlt: 'widget.menu.saturation.alt',
        label: 'widget.menu.saturation.label.v1',
        aria: 'widget.menu.saturation.aria.v1',
      },
      2: {
        iconClass: 'saturation-3',
        iconAlt: 'widget.menu.saturation.alt',
        label: 'widget.menu.saturation.label.v2',
        aria: 'widget.menu.saturation.aria.v2',
      },
      3: {
        iconClass: 'saturation-4',
        iconAlt: 'widget.menu.saturation.alt',
        label: 'widget.menu.saturation.label.v3',
        aria: 'widget.menu.saturation.aria.v3',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's23' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.saturation.aria.v1';
      } else if (actionState === 1) {
        trigger.actionState = 2;
        trigger.toRead = 'widget.menu.saturation.aria.v2';
      } else if (actionState === 2) {
        trigger.actionState = 3;
        trigger.toRead = 'widget.menu.saturation.aria.v3';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.saturation.aria_off_action';
      }
      return trigger;
    },
  },
  s24: {
    description: 'Voice Navigation',
    googleAnalyticsEventName: 'userway_voice_navigation',
    modifyMenuLabel: 'Voice Navigation',
    actionStates: {
      0: {
        iconClass: 'voice-navigation',
        iconAlt: 'widget.menu.voiceNavigation.alt',
        label: 'widget.menu.voiceNavigation.label',
        aria: 'widget.menu.voiceNavigation.aria',
      },
      1: {
        iconClass: 'voice-navigation',
        iconAlt: 'widget.menu.voiceNavigation.alt',
        label: 'widget.menu.voiceNavigation.label',
        aria: 'widget.menu.voiceNavigation.aria',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's24' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.voiceNavigation.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.voiceNavigation.aria_off_action';
      }
      return trigger;
    },
  },
  s25: {
    description: 'Hide Images',
    googleAnalyticsEventName: 'userway_hide_images',
    modifyMenuLabel: 'Hide Images',
    actionStates: {
      0: {
        iconClass: 'hide-images',
        iconAlt: 'widget.menu.hide_images.alt',
        label: 'widget.menu.hide_images.label',
        aria: 'widget.menu.hide_images.aria',
      },
      1: {
        iconClass: 'hide-images',
        iconAlt: 'widget.menu.hide_images.alt',
        label: 'widget.menu.hide_images.label',
        aria: 'widget.menu.hide_images.aria',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's25' };
      if (!actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.hide_images.aria_on_action';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.hide_images.aria_off_action';
      }
      return trigger;
    },
  },
  s101: {
    description: 'Motor Impaired',
    googleAnalyticsEventName: 'userway_motor_impaired_profile',
    modifyMenuLabel: 'Motor Impaired',
    isProfile: true,
    icon: 'MotorImparedIcon',
    actionStates: {
      0: {
        label: 'widget.menu.motorImpaired.label.v0',
        aria: 'widget.menu.motorImpaired.aria.v0',
        iconClass: 'motor-impared',
      },
      1: {
        label: 'widget.menu.motorImpaired.label.v1',
        aria: 'widget.menu.motorImpaired.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's101' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.motorImpaired.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.motorImpaired.aria_off_action';
      }
      return trigger;
    },
  },
  s102: {
    description: 'Blind',
    googleAnalyticsEventName: 'userway_blind_profile',
    modifyMenuLabel: 'Blind',
    isProfile: true,
    icon: 'BlindReaderIcon',
    actionStates: {
      0: {
        label: 'widget.menu.blindReader.label.v0',
        aria: 'widget.menu.blindReader.aria.v0',
        iconClass: 'blind-reader',
      },
      1: {
        label: 'widget.menu.blindReader.label.v1',
        aria: 'widget.menu.blindReader.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's102' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.blindReader.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.blindReader.aria_off_action';
      }
      return trigger;
    },
  },
  s103: {
    description: 'Color Blind',
    googleAnalyticsEventName: 'userway_color_blind_profile',
    modifyMenuLabel: 'Color Blind',
    isProfile: true,
    icon: 'ColorBlindIcon',
    actionStates: {
      0: {
        label: 'widget.menu.colorBlind.label.v0',
        aria: 'widget.menu.colorBlind.aria.v0',
        iconClass: 'color-blind',
      },
      1: {
        label: 'widget.menu.colorBlind.label.v1',
        aria: 'widget.menu.colorBlind.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's103' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.colorBlind.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.colorBlind.aria_off_action';
      }
      return trigger;
    },
  },
  s104: {
    description: 'Dyslexia',
    googleAnalyticsEventName: 'userway_dyslexia_profile',
    modifyMenuLabel: 'Dyslexia',
    isProfile: true,
    icon: 'DyslexiaIcon',
    actionStates: {
      0: {
        label: 'widget.menu.dyslexia.label.v0',
        aria: 'widget.menu.dyslexia.aria.v0',
        iconClass: 'dyslexia',
      },
      1: {
        label: 'widget.menu.dyslexia.label.v1',
        aria: 'widget.menu.dyslexia.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's104' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.dyslexia.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.dyslexia.aria_off_action';
      }
      return trigger;
    },
  },
  s105: {
    description: 'Low vision',
    googleAnalyticsEventName: 'userway_visually_impaired_profile',
    modifyMenuLabel: 'Low vision',
    isProfile: true,
    icon: 'VisuallyImpairedIcon',
    actionStates: {
      0: {
        label: 'widget.menu.visuallyImpaired.label.v0',
        aria: 'widget.menu.visuallyImpaired.aria.v0',
        iconClass: 'visually-impaired',
      },
      1: {
        label: 'widget.menu.visuallyImpaired.label.v1',
        aria: 'widget.menu.visuallyImpaired.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's105' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.visuallyImpaired.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.visuallyImpaired.aria_off_action';
      }
      return trigger;
    },
  },
  s106: {
    description: 'Cognitive & Learning',
    googleAnalyticsEventName: 'userway_cognitive_and_learning_profile',
    modifyMenuLabel: 'Cognitive & Learning',
    isProfile: true,
    icon: 'CognitiveLearningIcon',
    actionStates: {
      0: {
        label: 'widget.menu.cognitiveLearning.label.v0',
        aria: 'widget.menu.cognitiveLearning.aria.v0',
        iconClass: 'cognitive-learning',
      },
      1: {
        label: 'widget.menu.cognitiveLearning.label.v1',
        aria: 'widget.menu.cognitiveLearning.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's106' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.cognitiveLearning.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.cognitiveLearning.aria_off_action';
      }
      return trigger;
    },
  },
  s107: {
    description: 'Seizure & Epileptic',
    googleAnalyticsEventName: 'userway_seizure_and_epileptic_profile',
    modifyMenuLabel: 'Seizure & Epileptic',
    isProfile: true,
    icon: 'SeizureIcon',
    actionStates: {
      0: {
        label: 'widget.menu.seizure.label.v0',
        aria: 'widget.menu.seizure.aria.v0',
        iconClass: 'seizure',
      },
      1: {
        label: 'widget.menu.seizure.label.v1',
        aria: 'widget.menu.seizure.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's107' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.seizure.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.seizure.aria_off_action';
      }
      return trigger;
    },
  },
  s108: {
    description: 'ADHD',
    googleAnalyticsEventName: 'userway_ADHD_profile',
    modifyMenuLabel: 'ADHD',
    isProfile: true,
    icon: 'AdhdIcon',
    actionStates: {
      0: {
        label: 'widget.menu.adhd.label.v0',
        aria: 'widget.menu.adhd.aria.v0',
        iconClass: 'adhd',
      },
      1: {
        label: 'widget.menu.adhd.label.v1',
        aria: 'widget.menu.adhd.aria.v1',
      },
    },
    onActionTrigger(actionState) {
      const trigger: Record<string, string | number> = { feature: 's108' };
      if (actionState === 0 || !actionState) {
        trigger.actionState = 1;
        trigger.toRead = 'widget.menu.adhd.aria.v1';
      } else {
        trigger.actionState = 0;
        trigger.toRead = 'widget.menu.adhd.aria_off_action';
      }
      return trigger;
    },
  },
};
