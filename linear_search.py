def linear_search(list_input, key):
    for i, item in enumerate(list_input):
        if item == key:
            return i
    return -1

    """If key is in the list returns its position in the list,
       otherwise returns -1."""


test = ["Chrome", "Firefox", "Opera", "Vivaldi"]

print(linear_search(test, "Opera")) // 2
