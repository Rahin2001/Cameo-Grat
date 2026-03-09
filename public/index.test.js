import { expect } from '@jest/globals';
import * as css from 'css-extracted';
import * as fs from 'fs';

describe('index.css Unit Tests', () => {

  let cssContent;

  beforeAll(() => {
    try {
      cssContent = fs.readFileSync('./frontend/src/index.css', 'utf8');
    } catch (error) {
      console.error('Error reading index.css:', error);
      expect(null).toBe(error); // Ensure the test fails if the file isn't found
      throw error;
    }
  });
  
  it('should set default margins and padding for all elements', () => {
    const parsedCss = css.parse(cssContent);

    expect(parsedCss.rules).toBeDefined();
    expect(parsedCss.rules.length).toBe(2);

    const universalStyles = parsedCss.rules.find(rule => rule.selector === '*');
    expect(universalStyles).toBeDefined();
    expect(universalStyles.properties).toEqual({
      margin: '0',
      padding: '0',
      'box-sizing': 'border-box'
    });
  });

  it('should set width, height, overflow-x, and font-family for html and body', () => {
    const parsedCss = css.parse(cssContent);

    expect(parsedCss.rules).toBeDefined();
    expect(parsedCss.rules.length).toBe(2);

    const htmlBodyStyles = parsedCss.rules.find(rule => rule.selector === 'html, body');
    expect(htmlBodyStyles).toBeDefined();
    expect(htmlBodyStyles.properties).toEqual({
      margin: '0',
      padding: '0',
      width: '100%',
      overflowX: 'hidden',
      'font-family': 'Arial, Helvetica, sans-serif',
      height: '100%'
    });
  });
});