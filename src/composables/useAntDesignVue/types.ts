/** AntDesign 按鈕 */
export interface IAntDesignButton {
  name: string;
  icon?: string;
  /** 屬性 */
  attrs: {
    type: 'primary' | 'default' | 'dashed' | 'text' | 'link';
    loading: boolean;
    disabled: boolean;
    title?: string;
    size?: 'large' | 'middle' | 'small';
    id?: string;
    class?: string | string[];
    style?: string;
    danger?: boolean;
  };
  /** 事件 */
  listeners: {
    click: {
      (e: Event): void;
    };
    focus: {
      (): void;
    };
  };
}
