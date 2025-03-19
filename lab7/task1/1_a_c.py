n = int(input())
k = int(input())
m = int (k / n)
while (k % n != 0):
    k -= 1
m = int (k / n)
print(m)

