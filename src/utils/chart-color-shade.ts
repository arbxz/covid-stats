// Convert a hex color code to an RGB object
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  // Parse the hex color code and extract the red, green, and blue components
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}

// Convert RGB values to a hex color code
function rgbToHex(r: number, g: number, b: number): string {
  // Combine the red, green, and blue components into a single hex color code
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Generate an array of shades between two colors
export function generateShades(
  initialColor: string,
  finalColor: string,
  numberOfShades: number,
): string[] {
  // Convert the initial and final colors from hex to RGB
  const { r: r1, g: g1, b: b1 } = hexToRgb(initialColor);
  const { r: r2, g: g2, b: b2 } = hexToRgb(finalColor);
  const shades: string[] = [];

  // Generate the shades by interpolating between the RGB values of the initial and final colors
  for (let i = 0; i < numberOfShades; i++) {
    const factor = i / (numberOfShades - 1);
    const newR = Math.round(r1 * (1 - factor) + r2 * factor);
    const newG = Math.round(g1 * (1 - factor) + g2 * factor);
    const newB = Math.round(b1 * (1 - factor) + b2 * factor);

    // Convert the interpolated RGB values back to a hex color code and add to the shades array
    shades.push(rgbToHex(newR, newG, newB));
  }

  return shades;
}
