import { YASet } from "../YASet";

describe("An implementation of Set.", () => {
    describe("Basic operations.", () => {
	    const set = new YASet();
		const value = 1;
		set.add(value);
		test("Should not be empty.", () => {
		    expect(set.get()).not.toBeFalsy();
		});
		test("Should only add a member once.", () => {
		    set.add(value);
			expect(set.size).toBe(1);
		});
		test("Should add the members.", () => {
		    const data = set.get();
			expect(data[0]).toBe(value);
		});
		test("Should retrieve the members.", () => {
		    const element = set.getElement(0);
			expect(element).toBe(value);
		});
		test("Should be of a given size.", () => {
		    const size = set.size;
			expect(size).toBe(1);
		});
		test("Should delete the member.", () => {
		    set.delete(1);
			expect(set.has(1)).toBeFalsy();
		});
		test("Should clear the members.", () => {
		    set.clear();
			expect(set.size).toBe(0);
		});
	});
	describe("That is iterable.", () => {
		const set = new Set();
		set.add(1);
		set.add(2);
		set.add(3);
		set.add(4);
		set.add(5);
		const setArr = [...set];
	    test("Should be a set with 5 members.", () => {
		    expect(setArr).toHaveLength(set.size);
		});
		test("Should output a set with the 5 members.", () => {
		    expect(setArr).toEqual([1, 2, 3, 4, 5]);
		});
	});
});
