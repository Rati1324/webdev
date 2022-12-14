import asyncio, random, sys, time

async def part1(n):
    i = random.randint(0, 10)
    print(f"part1({n}) sleeping for {i} seconds")
    await asyncio.sleep(i)
    result = f"result{n}-1"
    print(f"returning part1({n}) == {result}")
    return result

async def part2(n, arg):
    i = random.randint(0, 10)
    print(f"part2({n, arg}) sleeping for {i} seconds")
    await asyncio.sleep(i)
    result = f"result{n}-2 derived from {arg}"
    print(f"returning part2({n, arg}) == {result}")
    return result

async def chain(n):
    start = time.perf_counter()
    p1 = await part1(n)
    p2 = await part2(n, p1)
    end = time.perf_counter() - start
    print(f"-->chained result{n} => {p2} (took {end:0.2f} seconds")

async def main(*args):
    await asyncio.gather(*(chain(n) for n in args))

random.seed(444)
args = [1, 2, 3] if len(sys.argv) == 1 else map(int, sys.argv[1:])

start = time.perf_counter()
asyncio.run(main(*args))
end = time.perf_counter() - start
print(f"program finished in {end:0.2f} seconds")

