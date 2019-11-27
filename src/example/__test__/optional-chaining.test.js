test('optional chaining', () => {
    const a = {}
    expect(a?.b?.c).toBe(undefined)
})