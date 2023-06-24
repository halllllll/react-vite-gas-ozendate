declare global {
  interface Google {
    script?: {
      run: any;
    };
  }

  const google: Google;
}

export {};
