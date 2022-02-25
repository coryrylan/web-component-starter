import { css } from 'lit';

export const styles = css`
  :host {
    --color: #fff;
    --background: #3665c2;
    color: var(--color);
    background: var(--background);
    display: flex;
    gap: 12px;
    padding: 12px;
    border-radius: 4px;
    align-items: center;
    font-size: 16px;
  }

  button {
    color: var(--color);
    margin-left: auto;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    width: 28px;
    height: 28px;
    cursor: pointer;
    font-size: 18px;
  }

  :host([status=success]) {
    --background: #35a147;
  }

  :host([status=danger]) {
    --background: #c21919;
  }
`;