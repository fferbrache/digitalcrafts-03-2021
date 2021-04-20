arr = [5, 2, 100]


def sample(arr):
    if arr == list(range(min(arr), max(arr)+1)):
        return None
    else:
        for i, item in enumerate(arr):
            current_item = item
            if 0 < i < len(arr)-1:
                previous_item = arr[i-1]
                next_item = arr[i-1]
                if next_item == current_item+1 and current_item == previous_item+1:
                    continue
                elif current_item != previous_item + 1:
                    return current_item
                elif 0 <= i < len(arr)-1:
                    previous_item = 0


print(sample(arr))
