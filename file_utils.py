import glob


def extract_all_files_with(prefix, suffix, justStem=True):
    listOfFiles = []
    if justStem:
        for file in glob.glob(prefix + "*" + suffix):
            listOfFiles.append(file[len(prefix) : -len(suffix)])
    else: 
        for file in glob.glob(prefix + "*" + suffix):
            listOfFiles.append(file)

    return listOfFiles

