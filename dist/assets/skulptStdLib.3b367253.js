Sk.builtinFiles={files:{"src/builtin/this.py":`s = """Gur Mra bs Clguba, ol Gvz Crgref

Ornhgvshy vf orggre guna htyl.
Rkcyvpvg vf orggre guna vzcyvpvg.
Fvzcyr vf orggre guna pbzcyrk.
Pbzcyrk vf orggre guna pbzcyvpngrq.
Syng vf orggre guna arfgrq.
Fcnefr vf orggre guna qrafr.
Ernqnovyvgl pbhagf.
Fcrpvny pnfrf nera'g fcrpvny rabhtu gb oernx gur ehyrf.
Nygubhtu cenpgvpnyvgl orngf chevgl.
Reebef fubhyq arire cnff fvyragyl.
Hayrff rkcyvpvgyl fvyraprq.
Va gur snpr bs nzovthvgl, ershfr gur grzcgngvba gb thrff.
Gurer fubhyq or bar-- naq cersrenoyl bayl bar --boivbhf jnl gb qb vg.
Nygubhtu gung jnl znl abg or boivbhf ng svefg hayrff lbh'er Qhgpu.
Abj vf orggre guna arire.
Nygubhtu arire vf bsgra orggre guna *evtug* abj.
Vs gur vzcyrzragngvba vf uneq gb rkcynva, vg'f n onq vqrn.
Vs gur vzcyrzragngvba vf rnfl gb rkcynva, vg znl or n tbbq vqrn.
Anzrfcnprf ner bar ubaxvat terng vqrn -- yrg'f qb zber bs gubfr!"""

d = {}
for c in (65, 97):
    for i in range(26):
        d[chr(i+c)] = chr((i+13) % 26 + c)

print("".join([d.get(c, c) for c in s]))
`,"src/lib/abc.py":`import _sk_fail; _sk_fail._("abc")
`,"src/lib/aifc.py":`import _sk_fail; _sk_fail._("aifc")
`,"src/lib/antigravity.py":`import webbrowser

webbrowser.open("https://xkcd.com/353/")
`,"src/lib/anydbm.py":`import _sk_fail; _sk_fail._("anydbm")
`,"src/lib/ast.py":`import _sk_fail; _sk_fail._("ast")
`,"src/lib/asynchat.py":`import _sk_fail; _sk_fail._("asynchat")
`,"src/lib/asyncore.py":`import _sk_fail; _sk_fail._("asyncore")
`,"src/lib/atexit.py":`import _sk_fail; _sk_fail._("atexit")
`,"src/lib/audiodev.py":`import _sk_fail; _sk_fail._("audiodev")
`,"src/lib/base64.py":`import _sk_fail; _sk_fail._("base64")
`,"src/lib/BaseHTTPServer.py":`import _sk_fail; _sk_fail._("BaseHTTPServer")
`,"src/lib/Bastion.py":`import _sk_fail; _sk_fail._("Bastion")
`,"src/lib/bdb.py":`import _sk_fail; _sk_fail._("bdb")
`,"src/lib/binhex.py":`import _sk_fail; _sk_fail._("binhex")
`,"src/lib/bisect.py":`"""Bisection algorithms."""

def insort_right(a, x, lo=0, hi=None):
    """Insert item x in list a, and keep it sorted assuming a is sorted.

    If x is already in a, insert it to the right of the rightmost x.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    a.insert(lo, x)

def bisect_right(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e <= x, and all e in
    a[i:] have e > x.  So if x already appears in the list, a.insert(x) will
    insert just after the rightmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if x < a[mid]: hi = mid
        else: lo = mid+1
    return lo

def insort_left(a, x, lo=0, hi=None):
    """Insert item x in list a, and keep it sorted assuming a is sorted.

    If x is already in a, insert it to the left of the leftmost x.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    a.insert(lo, x)


def bisect_left(a, x, lo=0, hi=None):
    """Return the index where to insert item x in list a, assuming a is sorted.

    The return value i is such that all e in a[:i] have e < x, and all e in
    a[i:] have e >= x.  So if x already appears in the list, a.insert(x) will
    insert just before the leftmost x already there.

    Optional args lo (default 0) and hi (default len(a)) bound the
    slice of a to be searched.
    """

    if lo < 0:
        raise ValueError('lo must be non-negative')
    if hi is None:
        hi = len(a)
    while lo < hi:
        mid = (lo+hi)//2
        if a[mid] < x: lo = mid+1
        else: hi = mid
    return lo

# Overwrite above definitions with a fast C implementation
try:
    from _bisect import *
except ImportError:
    pass

# Create aliases
bisect = bisect_right
insort = insort_right
`,"src/lib/bsddb/__init__.py":`import _sk_fail; _sk_fail._("bsddb")
`,"src/lib/calendar.py":`import _sk_fail; _sk_fail._("calendar")
`,"src/lib/cgi.py":`import _sk_fail; _sk_fail._("cgi")
`,"src/lib/CGIHTTPServer.py":`import _sk_fail; _sk_fail._("CGIHTTPServer")
`,"src/lib/cgitb.py":`import _sk_fail; _sk_fail._("cgitb")
`,"src/lib/chunk.py":`import _sk_fail; _sk_fail._("chunk")
`,"src/lib/cmd.py":`import _sk_fail; _sk_fail._("cmd")
`,"src/lib/code.py":`import _sk_fail; _sk_fail._("code")
`,"src/lib/codecs.py":`import _sk_fail; _sk_fail._("codecs")
`,"src/lib/codeop.py":`import _sk_fail; _sk_fail._("codeop")
`,"src/lib/colorsys.py":`import _sk_fail; _sk_fail._("colorsys")
`,"src/lib/commands.py":`import _sk_fail; _sk_fail._("commands")
`,"src/lib/compileall.py":`import _sk_fail; _sk_fail._("compileall")
`,"src/lib/compiler/__init__.py":`import _sk_fail; _sk_fail._("compiler")
`,"src/lib/config/__init__.py":`import _sk_fail; _sk_fail._("config")
`,"src/lib/ConfigParser.py":`import _sk_fail; _sk_fail._("ConfigParser")
`,"src/lib/contextlib.py":`import _sk_fail; _sk_fail._("contextlib")
`,"src/lib/Cookie.py":`import _sk_fail; _sk_fail._("Cookie")
`,"src/lib/cookielib.py":`import _sk_fail; _sk_fail._("cookielib")
`,"src/lib/copy.py":`"""
This file was modified from CPython.
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
2011, 2012, 2013, 2014, 2015 Python Software Foundation; All Rights Reserved
"""
import types
class Error(Exception):
    pass
error = Error 
class _EmptyClass:
    pass
try:
    long
except NameError:
    long = int
try:
    bytes
except NameError:
    bytes = str

def check_notimplemented_state(x):
    getstate = getattr(x, "__getstate__", None)
    setstate = getattr(x, "__setstate__", None)
    initargs = getattr(x, "__getinitargs__", None)
    if getstate or setstate or initargs:
        raise NotImplementedError("Skulpt does not yet support copying with user-defined __getstate__, __setstate__ or __getinitargs__()")


def copy(x):
    cls = type(x)
    if callable(x):
        return x
    copier = getattr(cls, "__copy__", None)
    if copier:
        return copier(x)
    if cls in (type(None), int, float, bool, str, bytes, tuple, type, frozenset, long):
        return x
    if (cls == list) or (cls == dict) or (cls == set) or (cls == slice):
        return cls(x)
    reductor = getattr(x, "__reduce_ex__", None)
    if reductor:
        rv = reductor(4)
    else:
        reductor = getattr(x, "__reduce__", None)
        if reductor:
            rv = reductor()
        elif str(cls)[1:6] == "class":
            check_notimplemented_state(x)
            copier = _copy_inst
            return copier(x)
        else:
            raise Error("un(shallow)copyable object of type %s" % cls)
    if isinstance(rv, str):
        return x
    return _reconstruct(x, rv, 0)

def _copy_inst(x):
    if hasattr(x, '__copy__'):
        return x.__copy__()
    if hasattr(x, '__getinitargs__'):
        args = x.__getinitargs__()
        y = x.__class__(*args)
    else:
        y = _EmptyClass()
        y.__class__ = x.__class__
    if hasattr(x, '__getstate__'):
        state = x.__getstate__()
    else:
        state = x.__dict__
    if hasattr(y, '__setstate__'):
        y.__setstate__(state)
    else:
        y.__dict__.update(state)
    return y

d = _deepcopy_dispatch = {}

def deepcopy(x, memo=None, _nil=[]):
    """Deep copy operation on arbitrary Python objects.
    See the module's __doc__ string for more info.
    """
    if memo is None:
        memo = {}
    idx = id(x)
    y = memo.get(idx, _nil)
    if y is not _nil:
        return y
    cls = type(x)
    copier = _deepcopy_dispatch.get(cls)
    if copier:
        y = copier(x, memo)
    else:
        try:
            issc = issubclass(cls, type)
        except TypeError: # cls is not a class (old Boost; see SF #502085)
            issc = 0
        if issc:
            y = _deepcopy_atomic(x, memo)
        else:
            copier = getattr(x, "__deepcopy__", None)
            if copier:
                y = copier(memo)
            else:
                reductor = getattr(x, "__reduce_ex__", None)
                if reductor:
                    rv = reductor(2)
                else:
                    rv = None
                    reductor = getattr(x, "__reduce__", None)
                    if reductor:
                        rv = reductor()
                    elif str(cls)[1:6] == "class":
                        check_notimplemented_state(x)
                        copier = _deepcopy_dispatch["InstanceType"]
                        y = copier(x, memo)
                    else:
                        raise Error(
                            "un(deep)copyable object of type %s" % cls)
                if rv is not None:
                    y = _reconstruct(x, rv, 1, memo)
    memo[idx] = y
    _keep_alive(x, memo) # Make sure x lives at least as long as d
    return y

def _deepcopy_atomic(x, memo):
    return x
d[type(None)] = _deepcopy_atomic
# d[type(Ellipsis)] = _deepcopy_atomic
d[type(NotImplemented)] = _deepcopy_atomic
d[int] = _deepcopy_atomic
d[float] = _deepcopy_atomic
d[bool] = _deepcopy_atomic
d[complex] = _deepcopy_atomic
d[bytes] = _deepcopy_atomic
d[str] = _deepcopy_atomic
# try:
# d[types.CodeType] = _deepcopy_atomic
# except AttributeError:
#   pass
d[type] = _deepcopy_atomic
# d[types.BuiltinFunctionType] = _deepcopy_atomic
d[types.FunctionType] = _deepcopy_atomic
# d[weakref.ref] = _deepcopy_atomic

def _deepcopy_list(x, memo):
    y = []
    memo[id(x)] = y
    for a in x:
        y.append(deepcopy(a, memo))
    return y
d[list] = _deepcopy_list

def _deepcopy_set(x, memo):
    result = set([])  # make empty set
    memo[id(x)] = result  # register this set in the memo for loop checking
    for a in x:   # go through elements of set
        result.add(deepcopy(a, memo))  # add the copied elements into the new set
    return result # return the new set
d[set] = _deepcopy_set

def _deepcopy_frozenset(x, memo):
    result = frozenset(_deepcopy_set(x,memo)) 
    memo[id(x)] = result 
    return result
d[frozenset] = _deepcopy_frozenset

def _deepcopy_tuple(x, memo):
    y = [deepcopy(a, memo) for a in x]
    # We're not going to put the tuple in the memo, but it's still important we
    # check for it, in case the tuple contains recursive mutable structures.
    try:
        return memo[id(x)]
    except KeyError:
        pass
    for k, j in zip(x, y):
        if k is not j:
            y = tuple(y)
            break
    else:
        y = x
    return y
d[tuple] = _deepcopy_tuple

def _deepcopy_dict(x, memo):
    y = {}
    memo[id(x)] = y
    for key, value in x.items():
        y[deepcopy(key, memo)] = deepcopy(value, memo)
    return y
d[dict] = _deepcopy_dict

# def _deepcopy_method(x, memo): # Copy instance methods
#     y = type(x)(x.im_func, deepcopy(x.im_self, memo), x.im_class);
#     return y
d[types.MethodType] = _deepcopy_atomic

def _deepcopy_inst(x, memo):
    if hasattr(x, '__deepcopy__'):
         return x.__deepcopy__(memo)
    if hasattr(x, '__getinitargs__'):
        args = x.__getinitargs__()
        args = deepcopy(args, memo)
        y = x.__class__(*args)
    else:
        y = _EmptyClass()
        y.__class__ = x.__class__
    memo[id(x)] = y
    if hasattr(x, '__getstate__'):
        state = x.__getstate__()
    else:
        state = x.__dict__
    state = deepcopy(state, memo)
    if hasattr(y, '__setstate__'):
        y.__setstate__(state)
    else:
        y.__dict__.update(state)
        return y
d["InstanceType"] = _deepcopy_inst

def _keep_alive(x, memo):
    """Keeps a reference to the object x in the memo.
    Because we remember objects by their id, we have
    to assure that possibly temporary objects are kept
    alive by referencing them.
    We store a reference at the id of the memo, which should
    normally not be used unless someone tries to deepcopy
    the memo itself...
    """
    try:
        memo[id(memo)].append(x)
    except KeyError:
        # aha, this is the first one :-)
        memo[id(memo)]=[x]

def _reconstruct(x, info, deep, memo=None):
    if isinstance(info, str):
        return x
    assert isinstance(info, tuple)
    if memo is None:
        memo = {}
    n = len(info)
    assert n in (2, 3, 4, 5)
    callable, args = info[:2]
    if n > 2:
        state = info[2]
    else:
        state = None
    if n > 3:
        listiter = info[3]
    else:
        listiter = None
    if n > 4:
        dictiter = info[4]
    else:
        dictiter = None
    if deep:
        args = deepcopy(args, memo)
    y = callable(*args)
    memo[id(x)] = y

    if state is not None:
        if deep:
            state = deepcopy(state, memo)
        if hasattr(y, '__setstate__'):
            y.__setstate__(state)
        else:
            if isinstance(state, tuple) and len(state) == 2:
                state, slotstate = state
            else:
                slotstate = None
            if state is not None:
                y.__dict__.update(state)
            if slotstate is not None:
                for key, value in slotstate.items():
                    setattr(y, key, value)

    if listiter is not None:
        for item in listiter:
            if deep:
                item = deepcopy(item, memo)
            y.append(item)
    if dictiter is not None:
        for key, value in dictiter:
            if deep:
                key = deepcopy(key, memo)
                value = deepcopy(value, memo)
            y[key] = value
    return y

del d

del types

# Helper for instance creation without calling __init__
class _EmptyClass:
    pass`,"src/lib/copy_reg.py":`import _sk_fail; _sk_fail._("copy_reg")
`,"src/lib/cProfile.py":`import _sk_fail; _sk_fail._("cProfile")
`,"src/lib/csv.py":`import _sk_fail; _sk_fail._("csv")
`,"src/lib/ctypes/macholib/__init__.py":`import _sk_fail; _sk_fail._("macholib")
`,"src/lib/ctypes/__init__.py":`import _sk_fail; _sk_fail._("ctypes")
`,"src/lib/curses/__init__.py":`import _sk_fail; _sk_fail._("curses")
`,"src/lib/dbhash.py":`import _sk_fail; _sk_fail._("dbhash")
`,"src/lib/decimal.py":`import _sk_fail; _sk_fail._("decimal")
`,"src/lib/difflib.py":`import _sk_fail; _sk_fail._("difflib")
`,"src/lib/dircache.py":`import _sk_fail; _sk_fail._("dircache")
`,"src/lib/dis.py":`import _sk_fail; _sk_fail._("dis")
`,"src/lib/distutils/command/__init__.py":`import _sk_fail; _sk_fail._("command")
`,"src/lib/distutils/tests/__init__.py":`import _sk_fail; _sk_fail._("tests")
`,"src/lib/distutils/__init__.py":`import _sk_fail; _sk_fail._("distutils")
`,"src/lib/doctest.py":`import _sk_fail; _sk_fail._("doctest")
`,"src/lib/DocXMLRPCServer.py":`import _sk_fail; _sk_fail._("DocXMLRPCServer")
`,"src/lib/dumbdbm.py":`import _sk_fail; _sk_fail._("dumbdbm")
`,"src/lib/dummy_thread.py":`import _sk_fail; _sk_fail._("dummy_thread")
`,"src/lib/dummy_threading.py":`import _sk_fail; _sk_fail._("dummy_threading")
`,"src/lib/email/mime/__init__.py":`import _sk_fail; _sk_fail._("mime")
`,"src/lib/email/test/data/__init__.py":`import _sk_fail; _sk_fail._("data")
`,"src/lib/email/__init__.py":`import _sk_fail; _sk_fail._("email")
`,"src/lib/encodings/__init__.py":`import _sk_fail; _sk_fail._("encodings")
`,"src/lib/filecmp.py":`import _sk_fail; _sk_fail._("filecmp")
`,"src/lib/fileinput.py":`import _sk_fail; _sk_fail._("fileinput")
`,"src/lib/fnmatch.py":`import _sk_fail; _sk_fail._("fnmatch")
`,"src/lib/formatter.py":`import _sk_fail; _sk_fail._("formatter")
`,"src/lib/fpformat.py":`import _sk_fail; _sk_fail._("fpformat")
`,"src/lib/fractions.py":`import _sk_fail; _sk_fail._("fractions")
`,"src/lib/ftplib.py":`import _sk_fail; _sk_fail._("ftplib")
`,"src/lib/genericpath.py":`import _sk_fail; _sk_fail._("genericpath")
`,"src/lib/getopt.py":`import _sk_fail; _sk_fail._("getopt")
`,"src/lib/getpass.py":`import _sk_fail; _sk_fail._("getpass")
`,"src/lib/gettext.py":`import _sk_fail; _sk_fail._("gettext")
`,"src/lib/glob.py":`import _sk_fail; _sk_fail._("glob")
`,"src/lib/gzip.py":`import _sk_fail; _sk_fail._("gzip")
`,"src/lib/hashlib.py":`import _sk_fail; _sk_fail._("hashlib")
`,"src/lib/heapq.py":`import _sk_fail; _sk_fail._("heapq")
`,"src/lib/hmac.py":`import _sk_fail; _sk_fail._("hmac")
`,"src/lib/hotshot/__init__.py":`import _sk_fail; _sk_fail._("hotshot")
`,"src/lib/htmlentitydefs.py":`import _sk_fail; _sk_fail._("htmlentitydefs")
`,"src/lib/htmllib.py":`import _sk_fail; _sk_fail._("htmllib")
`,"src/lib/HTMLParser.py":`import _sk_fail; _sk_fail._("HTMLParser")
`,"src/lib/httplib.py":`import _sk_fail; _sk_fail._("httplib")
`,"src/lib/idlelib/Icons/__init__.py":`import _sk_fail; _sk_fail._("Icons")
`,"src/lib/idlelib/__init__.py":`import _sk_fail; _sk_fail._("idlelib")
`,"src/lib/ihooks.py":`import _sk_fail; _sk_fail._("ihooks")
`,"src/lib/imaplib.py":`import _sk_fail; _sk_fail._("imaplib")
`,"src/lib/imghdr.py":`import _sk_fail; _sk_fail._("imghdr")
`,"src/lib/imputil.py":`import _sk_fail; _sk_fail._("imputil")
`,"src/lib/io.py":`import _sk_fail; _sk_fail._("io")
`,"src/lib/json/tests/__init__.py":`import _sk_fail; _sk_fail._("tests")
`,"src/lib/json/__init__.py":`import _sk_fail; _sk_fail._("json")
`,"src/lib/lib-dynload/__init__.py":`import _sk_fail; _sk_fail._("lib-dynload")
`,"src/lib/lib-tk/__init__.py":`import _sk_fail; _sk_fail._("lib-tk")
`,"src/lib/lib2to3/fixes/__init__.py":`import _sk_fail; _sk_fail._("fixes")
`,"src/lib/lib2to3/pgen2/__init__.py":`import _sk_fail; _sk_fail._("pgen2")
`,"src/lib/lib2to3/tests/__init__.py":`import _sk_fail; _sk_fail._("tests")
`,"src/lib/lib2to3/__init__.py":`import _sk_fail; _sk_fail._("lib2to3")
`,"src/lib/linecache.py":`import _sk_fail; _sk_fail._("linecache")
`,"src/lib/locale.py":`import _sk_fail; _sk_fail._("locale")
`,"src/lib/logging/__init__.py":`import _sk_fail; _sk_fail._("logging")
`,"src/lib/macpath.py":`import _sk_fail; _sk_fail._("macpath")
`,"src/lib/macurl2path.py":`import _sk_fail; _sk_fail._("macurl2path")
`,"src/lib/mailbox.py":`import _sk_fail; _sk_fail._("mailbox")
`,"src/lib/mailcap.py":`import _sk_fail; _sk_fail._("mailcap")
`,"src/lib/markupbase.py":`import _sk_fail; _sk_fail._("markupbase")
`,"src/lib/md5.py":`import _sk_fail; _sk_fail._("md5")
`,"src/lib/mhlib.py":`import _sk_fail; _sk_fail._("mhlib")
`,"src/lib/mimetools.py":`import _sk_fail; _sk_fail._("mimetools")
`,"src/lib/mimetypes.py":`import _sk_fail; _sk_fail._("mimetypes")
`,"src/lib/MimeWriter.py":`import _sk_fail; _sk_fail._("MimeWriter")
`,"src/lib/mimify.py":`import _sk_fail; _sk_fail._("mimify")
`,"src/lib/modulefinder.py":`import _sk_fail; _sk_fail._("modulefinder")
`,"src/lib/multifile.py":`import _sk_fail; _sk_fail._("multifile")
`,"src/lib/multiprocessing/dummy/__init__.py":`import _sk_fail; _sk_fail._("dummy")
`,"src/lib/multiprocessing/__init__.py":`import _sk_fail; _sk_fail._("multiprocessing")
`,"src/lib/mutex.py":`import _sk_fail; _sk_fail._("mutex")
`,"src/lib/netrc.py":`import _sk_fail; _sk_fail._("netrc")
`,"src/lib/new.py":`import _sk_fail; _sk_fail._("new")
`,"src/lib/nntplib.py":`import _sk_fail; _sk_fail._("nntplib")
`,"src/lib/ntpath.py":`import _sk_fail; _sk_fail._("ntpath")
`,"src/lib/nturl2path.py":`import _sk_fail; _sk_fail._("nturl2path")
`,"src/lib/numbers.py":`Number = (int, float, complex)
Integral = int
Complex = complex
`,"src/lib/opcode.py":`import _sk_fail; _sk_fail._("opcode")
`,"src/lib/optparse.py":`import _sk_fail; _sk_fail._("optparse")
`,"src/lib/os.py":`import _sk_fail; _sk_fail._("os")
`,"src/lib/os2emxpath.py":`import _sk_fail; _sk_fail._("os2emxpath")
`,"src/lib/pdb.py":`import _sk_fail; _sk_fail._("pdb")
`,"src/lib/pickle.py":`import _sk_fail; _sk_fail._("pickle")
`,"src/lib/pickletools.py":`import _sk_fail; _sk_fail._("pickletools")
`,"src/lib/pipes.py":`import _sk_fail; _sk_fail._("pipes")
`,"src/lib/pkgutil.py":`import _sk_fail; _sk_fail._("pkgutil")
`,"src/lib/platform.py":`import _sk_fail; _sk_fail._("platform")
`,"src/lib/plistlib.py":`import _sk_fail; _sk_fail._("plistlib")
`,"src/lib/popen2.py":`import _sk_fail; _sk_fail._("popen2")
`,"src/lib/poplib.py":`import _sk_fail; _sk_fail._("poplib")
`,"src/lib/posixfile.py":`import _sk_fail; _sk_fail._("posixfile")
`,"src/lib/posixpath.py":`import _sk_fail; _sk_fail._("posixpath")
`,"src/lib/pprint.py":`import _sk_fail; _sk_fail._("pprint")
`,"src/lib/profile.py":`import _sk_fail; _sk_fail._("profile")
`,"src/lib/pstats.py":`import _sk_fail; _sk_fail._("pstats")
`,"src/lib/pty.py":`import _sk_fail; _sk_fail._("pty")
`,"src/lib/pyclbr.py":`import _sk_fail; _sk_fail._("pyclbr")
`,"src/lib/pydoc.py":`import _sk_fail; _sk_fail._("pydoc")
`,"src/lib/pydoc_topics.py":`import _sk_fail; _sk_fail._("pydoc_topics")
`,"src/lib/pythonds/basic/deque.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#deque.py


class Deque:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def addFront(self, item):
        self.items.append(item)

    def addRear(self, item):
        self.items.insert(0,item)

    def removeFront(self):
        return self.items.pop()

    def removeRear(self):
        return self.items.pop(0)

    def size(self):
        return len(self.items)
`,"src/lib/pythonds/basic/queue.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#queue.py

class Queue:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def enqueue(self, item):
        self.items.insert(0,item)

    def dequeue(self):
        return self.items.pop()

    def size(self):
        return len(self.items)
`,"src/lib/pythonds/basic/stack.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
#stack.py

class Stack:
    def __init__(self):
        self.items = []

    def isEmpty(self):
        return self.items == []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        return self.items[len(self.items)-1]

    def size(self):
        return len(self.items)

`,"src/lib/pythonds/basic/__init__.py":`
#__all__ = ["stack"]


#from .stack import Stack
#from .queue import Queue



`,"src/lib/pythonds/graphs/adjGraph.py":`#
#  adjGraph
#
#  Created by Brad Miller on 2005-02-24.
#  Copyright (c) 2005 Brad Miller, David Ranum, Luther College. All rights reserved.
#

import sys
import os
import unittest

class Graph:
    def __init__(self):
        self.vertices = {}
        self.numVertices = 0
        
    def addVertex(self,key):
        self.numVertices = self.numVertices + 1
        newVertex = Vertex(key)
        self.vertices[key] = newVertex
        return newVertex
    
    def getVertex(self,n):
        if n in self.vertices:
            return self.vertices[n]
        else:
            return None

    def __contains__(self,n):
        return n in self.vertices
    
    def addEdge(self,f,t,cost=0):
            if f not in self.vertices:
                nv = self.addVertex(f)
            if t not in self.vertices:
                nv = self.addVertex(t)
            self.vertices[f].addNeighbor(self.vertices[t],cost)
    
    def getVertices(self):
        return list(self.vertices.keys())
        
    def __iter__(self):
        return iter(self.vertices.values())
                
class Vertex:
    def __init__(self,num):
        self.id = num
        self.connectedTo = {}
        self.color = 'white'
        self.dist = sys.maxsize
        self.pred = None
        self.disc = 0
        self.fin = 0

    # def __lt__(self,o):
    #     return self.id < o.id
    
    def addNeighbor(self,nbr,weight=0):
        self.connectedTo[nbr] = weight
        
    def setColor(self,color):
        self.color = color
        
    def setDistance(self,d):
        self.dist = d

    def setPred(self,p):
        self.pred = p

    def setDiscovery(self,dtime):
        self.disc = dtime
        
    def setFinish(self,ftime):
        self.fin = ftime
        
    def getFinish(self):
        return self.fin
        
    def getDiscovery(self):
        return self.disc
        
    def getPred(self):
        return self.pred
        
    def getDistance(self):
        return self.dist
        
    def getColor(self):
        return self.color
    
    def getConnections(self):
        return self.connectedTo.keys()
        
    def getWeight(self,nbr):
        return self.connectedTo[nbr]
                
    def __str__(self):
        return str(self.id) + ":color " + self.color + ":disc " + str(self.disc) + ":fin " + str(self.fin) + ":dist " + str(self.dist) + ":pred \\n\\t[" + str(self.pred)+ "]\\n"
    
    def getId(self):
        return self.id

class adjGraphTests(unittest.TestCase):
    def setUp(self):
        self.tGraph = Graph()
        
    def testMakeGraph(self):
        gFile = open("test.dat")
        for line in gFile:
            fVertex, tVertex = line.split('|')
            fVertex = int(fVertex)
            tVertex = int(tVertex)
            self.tGraph.addEdge(fVertex,tVertex)
        for i in self.tGraph:
            adj = i.getAdj()
            for k in adj:
                print(i, k)

        
if __name__ == '__main__':
    unittest.main()
              
`,"src/lib/pythonds/graphs/priorityQueue.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 
import unittest

# this implementation of binary heap takes key value pairs,
# we will assume that the keys are all comparable

class PriorityQueue:
    def __init__(self):
        self.heapArray = [(0,0)]
        self.currentSize = 0

    def buildHeap(self,alist):
        self.currentSize = len(alist)
        self.heapArray = [(0,0)]
        for i in alist:
            self.heapArray.append(i)
        i = len(alist) // 2            
        while (i > 0):
            self.percDown(i)
            i = i - 1
                        
    def percDown(self,i):
        while (i * 2) <= self.currentSize:
            mc = self.minChild(i)
            if self.heapArray[i][0] > self.heapArray[mc][0]:
                tmp = self.heapArray[i]
                self.heapArray[i] = self.heapArray[mc]
                self.heapArray[mc] = tmp
            i = mc
                
    def minChild(self,i):
        if i*2 > self.currentSize:
            return -1
        else:
            if i*2 + 1 > self.currentSize:
                return i*2
            else:
                if self.heapArray[i*2][0] < self.heapArray[i*2+1][0]:
                    return i*2
                else:
                    return i*2+1

    def percUp(self,i):
        while i // 2 > 0:
            if self.heapArray[i][0] < self.heapArray[i//2][0]:
               tmp = self.heapArray[i//2]
               self.heapArray[i//2] = self.heapArray[i]
               self.heapArray[i] = tmp
            i = i//2
 
    def add(self,k):
        self.heapArray.append(k)
        self.currentSize = self.currentSize + 1
        self.percUp(self.currentSize)

    def delMin(self):
        retval = self.heapArray[1][1]
        self.heapArray[1] = self.heapArray[self.currentSize]
        self.currentSize = self.currentSize - 1
        self.heapArray.pop()
        self.percDown(1)
        return retval
        
    def isEmpty(self):
        if self.currentSize == 0:
            return True
        else:
            return False

    def decreaseKey(self,val,amt):
        # this is a little wierd, but we need to find the heap thing to decrease by
        # looking at its value
        done = False
        i = 1
        myKey = 0
        while not done and i <= self.currentSize:
            if self.heapArray[i][1] == val:
                done = True
                myKey = i
            else:
                i = i + 1
        if myKey > 0:
            self.heapArray[myKey] = (amt,self.heapArray[myKey][1])
            self.percUp(myKey)
            
    def __contains__(self,vtx):
        for pair in self.heapArray:
            if pair[1] == vtx:
                return True
        return False
        
class TestBinHeap(unittest.TestCase):
    def setUp(self):
        self.theHeap = PriorityQueue()
        self.theHeap.add((2,'x'))
        self.theHeap.add((3,'y'))
        self.theHeap.add((5,'z'))
        self.theHeap.add((6,'a'))
        self.theHeap.add((4,'d'))


    def testInsert(self):
        assert self.theHeap.currentSize == 5

    def testDelmin(self):
        assert self.theHeap.delMin() == 'x'
        assert self.theHeap.delMin() == 'y'
    
    def testDecKey(self):
        self.theHeap.decreaseKey('d',1)
        assert self.theHeap.delMin() == 'd'
        
if __name__ == '__main__':
    unittest.main()
`,"src/lib/pythonds/graphs/__init__.py":`

from .adjGraph import Graph
from .adjGraph import Vertex
from .priorityQueue import PriorityQueue
`,"src/lib/pythonds/trees/balance.py":`#!/bin/env python3.1
# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005, 2010
# 

from .bst import BinarySearchTree, TreeNode

class AVLTree(BinarySearchTree):
    '''
    Author:  Brad Miller
    Date:  1/15/2005
    Description:  Imlement a binary search tree with the following interface
                  functions:  
                  __contains__(y) <==> y in x
                  __getitem__(y) <==> x[y]
                  __init__()
                  __len__() <==> len(x)
                  __setitem__(k,v) <==> x[k] = v
                  clear()
                  get(k)
                  has_key(k)
                  items() 
                  keys() 
                  values()
                  put(k,v)
    '''


    def _put(self,key,val,currentNode):
        if key < currentNode.key:
            if currentNode.hasLeftChild():
                self._put(key,val,currentNode.leftChild)
            else:
                currentNode.leftChild = TreeNode(key,val,parent=currentNode)
                self.updateBalance(currentNode.leftChild)
        else:
            if currentNode.hasRightChild():
                self._put(key,val,currentNode.rightChild)
            else:
                currentNode.rightChild = TreeNode(key,val,parent=currentNode)
                self.updateBalance(currentNode.rightChild)                

    def updateBalance(self,node):
        if node.balanceFactor > 1 or node.balanceFactor < -1:
            self.rebalance(node)
            return
        if node.parent != None:
            if node.isLeftChild():
                node.parent.balanceFactor += 1
            elif node.isRightChild():
                node.parent.balanceFactor -= 1

            if node.parent.balanceFactor != 0:
                self.updateBalance(node.parent)

    def rebalance(self,node):
        if node.balanceFactor < 0:
            if node.rightChild.balanceFactor > 0:
                # Do an LR Rotation
                self.rotateRight(node.rightChild)
                self.rotateLeft(node)
            else:
                # single left
                self.rotateLeft(node)
        elif node.balanceFactor > 0:
            if node.leftChild.balanceFactor < 0:
                # Do an RL Rotation
                self.rotateLeft(node.leftChild)
                self.rotateRight(node)
            else:
                # single right
                self.rotateRight(node)

    def rotateLeft(self,rotRoot):
        newRoot = rotRoot.rightChild
        rotRoot.rightChild = newRoot.leftChild
        if newRoot.leftChild != None:
            newRoot.leftChild.parent = rotRoot
        newRoot.parent = rotRoot.parent
        if rotRoot.isRoot():
            self.root = newRoot
        else:
            if rotRoot.isLeftChild():
                rotRoot.parent.leftChild = newRoot
            else:
                rotRoot.parent.rightChild = newRoot
        newRoot.leftChild = rotRoot
        rotRoot.parent = newRoot
        rotRoot.balanceFactor = rotRoot.balanceFactor + 1 - min(newRoot.balanceFactor, 0)
        newRoot.balanceFactor = newRoot.balanceFactor + 1 + max(rotRoot.balanceFactor, 0)


    def rotateRight(self,rotRoot):
        newRoot = rotRoot.leftChild
        rotRoot.leftChild = newRoot.rightChild
        if newRoot.rightChild != None:
            newRoot.rightChild.parent = rotRoot
        newRoot.parent = rotRoot.parent
        if rotRoot.isRoot():
            self.root = newRoot
        else:
            if rotRoot.isRightChild():
                rotRoot.parent.rightChild = newRoot
            else:
                rotRoot.parent.leftChild = newRoot
        newRoot.rightChild = rotRoot
        rotRoot.parent = newRoot
        rotRoot.balanceFactor = rotRoot.balanceFactor - 1 - max(newRoot.balanceFactor, 0)
        newRoot.balanceFactor = newRoot.balanceFactor - 1 + min(rotRoot.balanceFactor, 0)
        
`,"src/lib/pythonds/trees/binaryTree.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 

class BinaryTree:
    """
    A recursive implementation of Binary Tree
    Using links and Nodes approach.
    """    
    def __init__(self,rootObj):
        self.key = rootObj
        self.leftChild = None
        self.rightChild = None

    def insertLeft(self,newNode):
        if self.leftChild == None:
            self.leftChild = BinaryTree(newNode)
        else:
            t = BinaryTree(newNode)
            t.left = self.leftChild
            self.leftChild = t
    
    def insertRight(self,newNode):
        if self.rightChild == None:
            self.rightChild = BinaryTree(newNode)
        else:
            t = BinaryTree(newNode)
            t.right = self.rightChild
            self.rightChild = t

    def isLeaf(self):
        return ((not self.leftChild) and (not self.rightChild))

    def getRightChild(self):
        return self.rightChild

    def getLeftChild(self):
        return self.leftChild

    def setRootVal(self,obj):
        self.key = obj

    def getRootVal(self,):
        return self.key

    def inorder(self):
        if self.leftChild:
            self.leftChild.inorder()
        print(self.key)
        if self.rightChild:
            self.rightChild.inorder()

    def postorder(self):
        if self.leftChild:
            self.leftChild.postorder()
        if self.rightChild:
            self.rightChild.postorder()
        print(self.key)


    def preorder(self):
        print(self.key)
        if self.leftChild:
            self.leftChild.preorder()
        if self.rightChild:
            self.rightChild.preorder()

    def printexp(self):
        if self.leftChild:
            print('(')
            self.leftChild.printexp()
        print(self.key)
        if self.rightChild:
            self.rightChild.printexp()
            print(')')

    def postordereval(self):
        opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv}
        res1 = None
        res2 = None
        if self.leftChild:
            res1 = self.leftChild.postordereval()  #// \\label{peleft}
        if self.rightChild:
            res2 = self.rightChild.postordereval() #// \\label{peright}
        if res1 and res2:
            return opers[self.key](res1,res2) #// \\label{peeval}
        else:
            return self.key

def inorder(tree):
    if tree != None:
        inorder(tree.getLeftChild())
        print(tree.getRootVal())
        inorder(tree.getRightChild())

def printexp(tree):
    if tree.leftChild:
        print('(')
        printexp(tree.getLeftChild())
    print(tree.getRootVal())
    if tree.rightChild:
        printexp(tree.getRightChild())
        print(')') 

def printexp(tree):
    sVal = ""
    if tree:
        sVal = '(' + printexp(tree.getLeftChild())
        sVal = sVal + str(tree.getRootVal())
        sVal = sVal + printexp(tree.getRightChild()) + ')'
    return sVal

def postordereval(tree):
    opers = {'+':operator.add, '-':operator.sub, '*':operator.mul, '/':operator.truediv}
    res1 = None
    res2 = None
    if tree:
        res1 = postordereval(tree.getLeftChild())  #// \\label{peleft}
        res2 = postordereval(tree.getRightChild()) #// \\label{peright}
        if res1 and res2:
            return opers[tree.getRootVal()](res1,res2) #// \\label{peeval}
        else:
            return tree.getRootVal()

def height(tree):
    if tree == None:
        return -1
    else:
        return 1 + max(height(tree.leftChild),height(tree.rightChild))

# t = BinaryTree(7)
# t.insertLeft(3)
# t.insertRight(9)
# inorder(t)
# import operator
# x = BinaryTree('*')
# x.insertLeft('+')
# l = x.getLeftChild()
# l.insertLeft(4)
# l.insertRight(5)
# x.insertRight(7)
# print(printexp(x))
# print(postordereval(x))
# print(height(x))
`,"src/lib/pythonds/trees/binheap.py":`# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005
# 

# this heap takes key value pairs, we will assume that the keys are integers
class BinHeap:
    def __init__(self):
        self.heapList = [0]
        self.currentSize = 0


    def buildHeap(self,alist):
        i = len(alist) // 2
        self.currentSize = len(alist)
        self.heapList = [0] + alist[:]
        print(len(self.heapList), i)
        while (i > 0):
            print(self.heapList, i)
            self.percDown(i)
            i = i - 1
        print(self.heapList,i)
                        
    def percDown(self,i):
        while (i * 2) <= self.currentSize:
            mc = self.minChild(i)
            if self.heapList[i] > self.heapList[mc]:
                tmp = self.heapList[i]
                self.heapList[i] = self.heapList[mc]
                self.heapList[mc] = tmp
            i = mc
                
    def minChild(self,i):
        if i * 2 + 1 > self.currentSize:
            return i * 2
        else:
            if self.heapList[i * 2] < self.heapList[i * 2 + 1]:
                return i * 2
            else:
                return i * 2 + 1

    def percUp(self,i):
        while i // 2 > 0:
            if self.heapList[i] < self.heapList[i//2]:
               tmp = self.heapList[i // 2]
               self.heapList[i // 2] = self.heapList[i]
               self.heapList[i] = tmp
            i = i // 2
 
    def insert(self,k):
        self.heapList.append(k)
        self.currentSize = self.currentSize + 1
        self.percUp(self.currentSize)

    def delMin(self):
        retval = self.heapList[1]
        self.heapList[1] = self.heapList[self.currentSize]
        self.currentSize = self.currentSize - 1
        self.heapList.pop()
        self.percDown(1)
        return retval
        
    def isEmpty(self):
        if currentSize == 0:
            return True
        else:
            return False
`,"src/lib/pythonds/trees/bst.py":`#!/bin/env python3.1
# Bradley N. Miller, David L. Ranum
# Introduction to Data Structures and Algorithms in Python
# Copyright 2005, 2010
# 

class BinarySearchTree:
    '''
    Author:  Brad Miller
    Date:  1/15/2005
    Description:  Imlement a binary search tree with the following interface
                  functions:  
                  __contains__(y) <==> y in x
                  __getitem__(y) <==> x[y]
                  __init__()
                  __len__() <==> len(x)
                  __setitem__(k,v) <==> x[k] = v
                  clear()
                  get(k)
                  items() 
                  keys() 
                  values()
                  put(k,v)
                  in
                  del <==> 
    '''

    def __init__(self):
        self.root = None
        self.size = 0
    
    def put(self,key,val):
        if self.root:
            self._put(key,val,self.root)
        else:
            self.root = TreeNode(key,val)
        self.size = self.size + 1

    def _put(self,key,val,currentNode):
        if key < currentNode.key:
            if currentNode.hasLeftChild():
                self._put(key,val,currentNode.leftChild)
            else:
                currentNode.leftChild = TreeNode(key,val,parent=currentNode)
        else:
            if currentNode.hasRightChild():
                self._put(key,val,currentNode.rightChild)
            else:
                currentNode.rightChild = TreeNode(key,val,parent=currentNode)
            
    def __setitem__(self,k,v):
        self.put(k,v)

    def get(self,key):
        if self.root:
            res = self._get(key,self.root)
            if res:
                return res.payload
            else:
                return None
        else:
            return None
        
    def _get(self,key,currentNode):
        if not currentNode:
            return None
        elif currentNode.key == key:
            return currentNode
        elif key < currentNode.key:
            return self._get(key,currentNode.leftChild)
        else:
            return self._get(key,currentNode.rightChild)
            
        
    def __getitem__(self,key):
        res = self.get(key)
        if res:
            return res
        else:
            raise KeyError('Error, key not in tree')
            

    def __contains__(self,key):
        if self._get(key,self.root):
            return True
        else:
            return False
        
    def length(self):
        return self.size

    def __len__(self):
        return self.size

    def __iter__(self):
        return self.root.__iter__()
    
    def delete(self,key):
        if self.size > 1:
            nodeToRemove = self._get(key,self.root)
            if nodeToRemove:
                self.remove(nodeToRemove)
                self.size = self.size-1
            else:
                raise KeyError('Error, key not in tree')
        elif self.size == 1 and self.root.key == key:
            self.root = None
            self.size = self.size - 1
        else:
            raise KeyError('Error, key not in tree')

    def __delitem__(self,key):
        self.delete(key)
    
    def remove(self,currentNode):
        if currentNode.isLeaf(): #leaf
            if currentNode == currentNode.parent.leftChild:
                currentNode.parent.leftChild = None
            else:
                currentNode.parent.rightChild = None
        elif currentNode.hasBothChildren(): #interior
            succ = currentNode.findSuccessor()
            succ.spliceOut()
            currentNode.key = succ.key
            currentNode.payload = succ.payload
        else: # this node has one child
            if currentNode.hasLeftChild():
                if currentNode.isLeftChild():
                    currentNode.leftChild.parent = currentNode.parent
                    currentNode.parent.leftChild = currentNode.leftChild
                elif currentNode.isRightChild():
                    currentNode.leftChild.parent = currentNode.parent
                    currentNode.parent.rightChild = currentNode.leftChild
                else:
                    currentNode.replaceNodeData(currentNode.leftChild.key,
                                       currentNode.leftChild.payload,
                                       currentNode.leftChild.leftChild,
                                       currentNode.leftChild.rightChild)
            else:
                if currentNode.isLeftChild():
                    currentNode.rightChild.parent = currentNode.parent
                    currentNode.parent.leftChild = currentNode.rightChild
                elif currentNode.isRightChild():
                    currentNode.rightChild.parent = currentNode.parent
                    currentNode.parent.rightChild = currentNode.rightChild
                else:
                    currentNode.replaceNodeData(currentNode.rightChild.key,
                                       currentNode.rightChild.payload,
                                       currentNode.rightChild.leftChild,
                                       currentNode.rightChild.rightChild)

    def inorder(self):
        self._inorder(self.root)

    def _inorder(self,tree):
        if tree != None:
            self._inorder(tree.leftChild)
            print(tree.key)
            self._inorder(tree.rightChild)

    def postorder(self):
        self._postorder(self.root)

    def _postorder(self, tree):
        if tree:
            self._postorder(tree.rightChild)
            self._postorder(tree.leftChild)
            print(tree.key)            

    def preorder(self):
        self._preorder(self,self.root)

    def _preorder(self,tree):
        if tree:
            print(tree.key)            
            self._preorder(tree.leftChild)
            self._preorder(tree.rightChild)

                
class TreeNode:
    def __init__(self,key,val,left=None,right=None,parent=None):
        self.key = key
        self.payload = val
        self.leftChild = left
        self.rightChild = right
        self.parent = parent
        self.balanceFactor = 0
        
    def hasLeftChild(self):
        return self.leftChild

    def hasRightChild(self):
        return self.rightChild
    
    def isLeftChild(self):
        return self.parent and self.parent.leftChild == self

    def isRightChild(self):
        return self.parent and self.parent.rightChild == self

    def isRoot(self):
        return not self.parent

    def isLeaf(self):
        return not (self.rightChild or self.leftChild)

    def hasAnyChildren(self):
        return self.rightChild or self.leftChild

    def hasBothChildren(self):
        return self.rightChild and self.leftChild
    
    def replaceNodeData(self,key,value,lc,rc):
        self.key = key
        self.payload = value
        self.leftChild = lc
        self.rightChild = rc
        if self.hasLeftChild():
            self.leftChild.parent = self
        if self.hasRightChild():
            self.rightChild.parent = self
        
    def findSuccessor(self):
        succ = None
        if self.hasRightChild():
            succ = self.rightChild.findMin()
        else:
            if self.parent:
                if self.isLeftChild():
                    succ = self.parent
                else:
                    self.parent.rightChild = None
                    succ = self.parent.findSuccessor()
                    self.parent.rightChild = self
        return succ


    def spliceOut(self):
        if self.isLeaf():
            if self.isLeftChild():
                self.parent.leftChild = None
            else:
                self.parent.rightChild = None
        elif self.hasAnyChildren():
            if self.hasLeftChild():
                if self.isLeftChild():
                    self.parent.leftChild = self.leftChild
                else:
                    self.parent.rightChild = self.leftChild
                self.leftChild.parent = self.parent
            else:
                if self.isLeftChild():
                    self.parent.leftChild = self.rightChild
                else:
                    self.parent.rightChild = self.rightChild
                self.rightChild.parent = self.parent

    def findMin(self):
        current = self
        while current.hasLeftChild():
            current = current.leftChild
        return current

    def __iter__(self):
        """The standard inorder traversal of a binary tree."""
        if self:
            if self.hasLeftChild():
                for elem in self.leftChild:
                    yield elem
            yield self.key
            if self.hasRightChild():
                for elem in self.rightChild:
                    yield elem

            
`,"src/lib/pythonds/trees/__init__.py":`
# from .binaryTree import BinaryTree
# from .balance import AVLTree
# from .bst import BinarySearchTree
# from .binheap import BinHeap


`,"src/lib/pythonds/__init__.py":"","src/lib/py_compile.py":`import _sk_fail; _sk_fail._("py_compile")
`,"src/lib/Queue.py":`import _sk_fail; _sk_fail._("Queue")
`,"src/lib/quopri.py":`import _sk_fail; _sk_fail._("quopri")
`,"src/lib/repr.py":`import _sk_fail; _sk_fail._("repr")
`,"src/lib/rexec.py":`import _sk_fail; _sk_fail._("rexec")
`,"src/lib/rfc822.py":`import _sk_fail; _sk_fail._("rfc822")
`,"src/lib/rlcompleter.py":`import _sk_fail; _sk_fail._("rlcompleter")
`,"src/lib/robotparser.py":`import _sk_fail; _sk_fail._("robotparser")
`,"src/lib/runpy.py":`import _sk_fail; _sk_fail._("runpy")
`,"src/lib/sched.py":`import _sk_fail; _sk_fail._("sched")
`,"src/lib/sets.py":`import _sk_fail; _sk_fail._("sets")
`,"src/lib/sgmllib.py":`import _sk_fail; _sk_fail._("sgmllib")
`,"src/lib/sha.py":`import _sk_fail; _sk_fail._("sha")
`,"src/lib/shelve.py":`import _sk_fail; _sk_fail._("shelve")
`,"src/lib/shlex.py":`import _sk_fail; _sk_fail._("shlex")
`,"src/lib/shutil.py":`import _sk_fail; _sk_fail._("shutil")
`,"src/lib/SimpleHTTPServer.py":`import _sk_fail; _sk_fail._("SimpleHTTPServer")
`,"src/lib/SimpleXMLRPCServer.py":`import _sk_fail; _sk_fail._("SimpleXMLRPCServer")
`,"src/lib/site.py":`import _sk_fail; _sk_fail._("site")
`,"src/lib/smtpd.py":`import _sk_fail; _sk_fail._("smtpd")
`,"src/lib/smtplib.py":`import _sk_fail; _sk_fail._("smtplib")
`,"src/lib/sndhdr.py":`import _sk_fail; _sk_fail._("sndhdr")
`,"src/lib/socket.py":`import _sk_fail; _sk_fail._("socket")
`,"src/lib/SocketServer.py":`import _sk_fail; _sk_fail._("SocketServer")
`,"src/lib/sqlite3/__init__.py":`import _sk_fail; _sk_fail._("sqlite3")
`,"src/lib/sre.py":`import _sk_fail; _sk_fail._("sre")
`,"src/lib/sre_compile.py":`import _sk_fail; _sk_fail._("sre_compile")
`,"src/lib/sre_constants.py":`import _sk_fail; _sk_fail._("sre_constants")
`,"src/lib/sre_parse.py":`import _sk_fail; _sk_fail._("sre_parse")
`,"src/lib/ssl.py":`import _sk_fail; _sk_fail._("ssl")
`,"src/lib/stat.py":`import _sk_fail; _sk_fail._("stat")
`,"src/lib/statvfs.py":`import _sk_fail; _sk_fail._("statvfs")
`,"src/lib/StringIO.py":`r"""File-like objects that read from or write to a string buffer.

This implements (nearly) all stdio methods.

f = StringIO()      # ready for writing
f = StringIO(buf)   # ready for reading
f.close()           # explicitly release resources held
flag = f.isatty()   # always false
pos = f.tell()      # get current position
f.seek(pos)         # set current position
f.seek(pos, mode)   # mode 0: absolute; 1: relative; 2: relative to EOF
buf = f.read()      # read until EOF
buf = f.read(n)     # read up to n bytes
buf = f.readline()  # read until end of line ('\\n') or EOF
list = f.readlines()# list of f.readline() results until EOF
f.truncate([size])  # truncate file at to at most size (default: current pos)
f.write(buf)        # write at current position
f.writelines(list)  # for line in list: f.write(line)
f.getvalue()        # return whole file's contents as a string

Notes:
- Using a real file is often faster (but less convenient).
- There's also a much faster implementation in C, called cStringIO, but
  it's not subclassable.
- fileno() is left unimplemented so that code which uses it triggers
  an exception early.
- Seeking far beyond EOF and then writing will insert real null
  bytes that occupy space in the buffer.
- There's a simple test set (see end of this file).
"""

__all__ = ["StringIO"]

def _complain_ifclosed(closed):
    if closed:
        raise ValueError("I/O operation on closed file")

class StringIO:
    """class StringIO([buffer])

    When a StringIO object is created, it can be initialized to an existing
    string by passing the string to the constructor. If no string is given,
    the StringIO will start empty.

    The StringIO object can accept either Unicode or 8-bit strings, but
    mixing the two may take some care. If both are used, 8-bit strings that
    cannot be interpreted as 7-bit ASCII (that use the 8th bit) will cause
    a UnicodeError to be raised when getvalue() is called.
    """
    def __init__(self, buf = ''):
        # Force self.buf to be a string or unicode
        if not isinstance(buf, str):
            buf = str(buf)
        self.buf = buf
        self.len = len(buf)
        self.buflist = []
        self.pos = 0
        self.closed = False
        self.softspace = 0

    def __iter__(self):
        return self

    def next(self):
        """A file object is its own iterator, for example iter(f) returns f
        (unless f is closed). When a file is used as an iterator, typically
        in a for loop (for example, for line in f: print line), the next()
        method is called repeatedly. This method returns the next input line,
        or raises StopIteration when EOF is hit.
        """
        _complain_ifclosed(self.closed)
        r = self.readline()
        if not r:
            raise StopIteration
        return r

    def close(self):
        """Free the memory buffer.
        """
        if not self.closed:
            self.closed = True
            self.buf = None
            self.pos = None

    def isatty(self):
        """Returns False because StringIO objects are not connected to a
        tty-like device.
        """
        _complain_ifclosed(self.closed)
        return False

    def seek(self, pos, mode = 0):
        """Set the file's current position.

        The mode argument is optional and defaults to 0 (absolute file
        positioning); other values are 1 (seek relative to the current
        position) and 2 (seek relative to the file's end).

        There is no return value.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        if mode == 1:
            pos += self.pos
        elif mode == 2:
            pos += self.len
        self.pos = max(0, pos)

    def tell(self):
        """Return the file's current position."""
        _complain_ifclosed(self.closed)
        return self.pos

    def read(self, n = -1):
        """Read at most size bytes from the file
        (less if the read hits EOF before obtaining size bytes).

        If the size argument is negative or omitted, read all data until EOF
        is reached. The bytes are returned as a string object. An empty
        string is returned when EOF is encountered immediately.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        if n is None or n < 0:
            newpos = self.len
        else:
            newpos = min(self.pos+n, self.len)
        r = self.buf[self.pos:newpos]
        self.pos = newpos
        return r

    def readline(self, length=None):
        r"""Read one entire line from the file.

        A trailing newline character is kept in the string (but may be absent
        when a file ends with an incomplete line). If the size argument is
        present and non-negative, it is a maximum byte count (including the
        trailing newline) and an incomplete line may be returned.

        An empty string is returned only when EOF is encountered immediately.

        Note: Unlike stdio's fgets(), the returned string contains null
        characters ('\\0') if they occurred in the input.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        i = self.buf.find('\\n', self.pos)
        if i < 0:
            newpos = self.len
        else:
            newpos = i+1
        if length is not None and length >= 0:
            if self.pos + length < newpos:
                newpos = self.pos + length
        r = self.buf[self.pos:newpos]
        self.pos = newpos
        return r

    def readlines(self, sizehint = 0):
        """Read until EOF using readline() and return a list containing the
        lines thus read.

        If the optional sizehint argument is present, instead of reading up
        to EOF, whole lines totalling approximately sizehint bytes (or more
        to accommodate a final whole line).
        """
        total = 0
        lines = []
        line = self.readline()
        while line:
            lines.append(line)
            total += len(line)
            if 0 < sizehint <= total:
                break
            line = self.readline()
        return lines

    def truncate(self, size=None):
        """Truncate the file's size.

        If the optional size argument is present, the file is truncated to
        (at most) that size. The size defaults to the current position.
        The current file position is not changed unless the position
        is beyond the new file size.

        If the specified size exceeds the file's current size, the
        file remains unchanged.
        """
        _complain_ifclosed(self.closed)
        if size is None:
            size = self.pos
        elif size < 0:
            raise IOError(22, "Negative size not allowed")
        elif size < self.pos:
            self.pos = size
        self.buf = self.getvalue()[:size]
        self.len = size

    def write(self, s):
        """Write a string to the file.

        There is no return value.
        """
        _complain_ifclosed(self.closed)
        if not s: return
        # Force s to be a string or unicode
        if not isinstance(s, str):
            s = str(s)
        spos = self.pos
        slen = self.len
        if spos == slen:
            self.buflist.append(s)
            self.len = self.pos = spos + len(s)
            return
        if spos > slen:
            self.buflist.append('\\0'*(spos - slen))
            slen = spos
        newpos = spos + len(s)
        if spos < slen:
            if self.buflist:
                self.buf += ''.join(self.buflist)
            self.buflist = [self.buf[:spos], s, self.buf[newpos:]]
            self.buf = ''
            if newpos > slen:
                slen = newpos
        else:
            self.buflist.append(s)
            slen = newpos
        self.len = slen
        self.pos = newpos

    def writelines(self, iterable):
        """Write a sequence of strings to the file. The sequence can be any
        iterable object producing strings, typically a list of strings. There
        is no return value.

        (The name is intended to match readlines(); writelines() does not add
        line separators.)
        """
        write = self.write
        for line in iterable:
            write(line)

    def flush(self):
        """Flush the internal buffer
        """
        _complain_ifclosed(self.closed)

    def getvalue(self):
        """
        Retrieve the entire contents of the "file" at any time before
        the StringIO object's close() method is called.

        The StringIO object can accept either Unicode or 8-bit strings,
        but mixing the two may take some care. If both are used, 8-bit
        strings that cannot be interpreted as 7-bit ASCII (that use the
        8th bit) will cause a UnicodeError to be raised when getvalue()
        is called.
        """
        _complain_ifclosed(self.closed)
        if self.buflist:
            self.buf += ''.join(self.buflist)
            self.buflist = []
        return self.buf
`,"src/lib/stringold.py":`import _sk_fail; _sk_fail._("stringold")
`,"src/lib/stringprep.py":`import _sk_fail; _sk_fail._("stringprep")
`,"src/lib/struct.py":`import _sk_fail; _sk_fail._("struct")
`,"src/lib/subprocess.py":`import _sk_fail; _sk_fail._("subprocess")
`,"src/lib/sunau.py":`import _sk_fail; _sk_fail._("sunau")
`,"src/lib/sunaudio.py":`import _sk_fail; _sk_fail._("sunaudio")
`,"src/lib/symbol.py":`import _sk_fail; _sk_fail._("symbol")
`,"src/lib/symtable.py":`import _sk_fail; _sk_fail._("symtable")
`,"src/lib/tabnanny.py":`import _sk_fail; _sk_fail._("tabnanny")
`,"src/lib/tarfile.py":`import _sk_fail; _sk_fail._("tarfile")
`,"src/lib/telnetlib.py":`import _sk_fail; _sk_fail._("telnetlib")
`,"src/lib/tempfile.py":`import _sk_fail; _sk_fail._("tempfile")
`,"src/lib/test/ann_module.py":`

"""
The module for testing variable annotations.
Empty lines above are for good reason (testing for correct line numbers)
"""

# from typing import Optional
# from functools import wraps

__annotations__[1] = 2

class C:

    x = 5; #y: Optional['C'] = None

# from typing import Tuple
x: int = 5; y: str = x;# f: Tuple[int, int]

class M(type):

    __annotations__['123'] = 123
    o: type = object

(pars): bool = True

class D(C):
    j: str = 'hi'; k: str= 'bye'

# from types import new_class
# h_class = new_class('H', (C,))
# j_class = new_class('J')

class F():
    z: int = 5
    def __init__(self, x):
        pass

class Y(F):
    def __init__(self):
        super(F, self).__init__(123)

class Meta(type):
    def __new__(meta, name, bases, namespace):
        return super().__new__(meta, name, bases, namespace)

class S(metaclass = Meta):
    x: str = 'something'
    y: str = 'something else'

# def foo(x: int = 10):
#     def bar(y: List[str]):
#         x: str = 'yes'
#     bar()

# def dec(func):
#     @wraps(func)
#     def wrapper(*args, **kwargs):
#         return func(*args, **kwargs)
#     return wrapper
`,"src/lib/test/ann_module2.py":`"""
Some correct syntax for variable annotation here.
More examples are in test_grammar and test_parser.
"""

# from typing import no_type_check, ClassVar

i: int = 1
j: int
x: float = i/10

def f():
    # class C: ...
    class C: pass
    return C()

f().new_attr: object = object()

class C:
    def __init__(self, x: int) -> None:
        self.x = x

c = C(5)
c.new_attr: int = 10

__annotations__ = {}


# @no_type_check
# class NTC:
#     def meth(self, param: complex) -> None:
#         ...

# class CV:
#     var: ClassVar['CV']

# CV.var = CV()
`,"src/lib/test/ann_module3.py":`"""
Correct syntax for variable annotation that should fail at runtime
in a certain manner. More examples are in test_grammar and test_parser.
"""

def f_bad_ann():
    __annotations__[1] = 2

class C_OK:
    def __init__(self, x: int) -> None:
        self.x: no_such_name = x  # This one is OK as proposed by Guido

class D_bad_ann:
    def __init__(self, x: int) -> None:
        sfel.y: int = 0

def g_bad_ann():
    no_such_name.attr: int = 0
`,"src/lib/test/bad_getattr.py":`x = 1

__getattr__ = "Surprise!"
__dir__ = "Surprise again!"
`,"src/lib/test/bad_getattr2.py":`def __getattr__():
    "Bad one"

x = 1

def __dir__(bad_sig):
    return []
`,"src/lib/test/bad_getattr3.py":`def __getattr__(name):
    global __getattr__
    if name != 'delgetattr':
        raise AttributeError
    del __getattr__
    raise AttributeError
`,"src/lib/test/decimaltestdata/__init__.py":`import _sk_fail; _sk_fail._("decimaltestdata")
`,"src/lib/test/good_getattr.py":`x = 1

def __dir__():
    return ['a', 'b', 'c']

def __getattr__(name):
    if name == "yolo":
        raise AttributeError("Deprecated, use whatever instead")
    return f"There is {name}"

y = 2
`,"src/lib/test/test_support.py":`"""Supporting definitions for the Python regression tests."""

if __name__ != 'test.test_support':
    raise ImportError('test_support must be imported from the test package')

import unittest


# def run_unittest(*classes):
#     """Run tests from unittest.TestCase-derived classes."""
#     valid_types = (unittest.TestSuite, unittest.TestCase)
#     suite = unittest.TestSuite()
#     for cls in classes:
#         if isinstance(cls, str):
#             if cls in sys.modules:
#                 suite.addTest(unittest.findTestCases(sys.modules[cls]))
#             else:
#                 raise ValueError("str arguments must be keys in sys.modules")
#         elif isinstance(cls, valid_types):
#             suite.addTest(cls)
#         else:
#             suite.addTest(unittest.makeSuite(cls))
#     _run_suite(suite)

def run_unittest(*classes):
    """Run tests from unittest.TestCase-derived classes."""
    for cls in classes:
        print cls
        if issubclass(cls, unittest.TestCase):
            cls().main()
        else:
            print "Don't know what to do with ", cls
`,"src/lib/test/__init__.py":`__author__ = 'bmiller'

def testEqual(actual, expected):
    if type(expected) == type(1):
        if actual == expected:
            print('Pass')
            return True
    elif type(expected) == type(1.11):
        if abs(actual-expected) < 0.00001:
            print('Pass')
            return True
    else:
        if actual == expected:
            print('Pass')
            return True
    print('Test Failed: expected ' + str(expected) + ' but got ' + str(actual))
    return False

def testNotEqual(actual, expected):
    pass

`,"src/lib/textwrap.py":`"""Text wrapping and filling.
"""

# Copyright (C) 1999-2001 Gregory P. Ward.
# Copyright (C) 2002, 2003 Python Software Foundation.
# Written by Greg Ward <gward@python.net>

import re, string

__all__ = ['TextWrapper', 'wrap', 'fill', 'dedent', 'indent', 'shorten']

# Hardcode the recognized whitespace characters to the US-ASCII
# whitespace characters.  The main reason for doing this is that
# some Unicode spaces (like \\u00a0) are non-breaking whitespaces.
_whitespace = '\\t\\n\\x0b\\x0c\\r '

class TextWrapper:
    """
    Object for wrapping/filling text.  The public interface consists of
    the wrap() and fill() methods; the other methods are just there for
    subclasses to override in order to tweak the default behaviour.
    If you want to completely replace the main wrapping algorithm,
    you'll probably have to override _wrap_chunks().
    Several instance attributes control various aspects of wrapping:
      width (default: 70)
        the maximum width of wrapped lines (unless break_long_words
        is false)
      initial_indent (default: "")
        string that will be prepended to the first line of wrapped
        output.  Counts towards the line's width.
      subsequent_indent (default: "")
        string that will be prepended to all lines save the first
        of wrapped output; also counts towards each line's width.
      expand_tabs (default: true)
        Expand tabs in input text to spaces before further processing.
        Each tab will become 0 .. 'tabsize' spaces, depending on its position
        in its line.  If false, each tab is treated as a single character.
      tabsize (default: 8)
        Expand tabs in input text to 0 .. 'tabsize' spaces, unless
        'expand_tabs' is false.
      replace_whitespace (default: true)
        Replace all whitespace characters in the input text by spaces
        after tab expansion.  Note that if expand_tabs is false and
        replace_whitespace is true, every tab will be converted to a
        single space!
      fix_sentence_endings (default: false)
        Ensure that sentence-ending punctuation is always followed
        by two spaces.  Off by default because the algorithm is
        (unavoidably) imperfect.
      break_long_words (default: true)
        Break words longer than 'width'.  If false, those words will not
        be broken, and some lines might be longer than 'width'.
      break_on_hyphens (default: true)
        Allow breaking hyphenated words. If true, wrapping will occur
        preferably on whitespaces and right after hyphens part of
        compound words.
      drop_whitespace (default: true)
        Drop leading and trailing whitespace from lines.
      max_lines (default: None)
        Truncate wrapped lines.
      placeholder (default: ' [...]')
        Append to the last line of truncated text.
    """

    unicode_whitespace_trans = {}
    # uspace = ord(' ')
    uspace = ' '
    for x in _whitespace:
        # unicode_whitespace_trans[ord(x)] = uspace
        unicode_whitespace_trans[x] = uspace

    # This funky little regex is just the trick for splitting
    # text up into word-wrappable chunks.  E.g.
    #   "Hello there -- you goof-ball, use the -b option!"
    # splits into
    #   Hello/ /there/ /--/ /you/ /goof-/ball,/ /use/ /the/ /-b/ /option!
    # (after stripping out empty strings).
    wordsep_re = re.compile(
        r'(\\s+|'                                  # any whitespace
        r'[^\\s\\w]*\\w+[^0-9\\W]-(?=\\w+[^0-9\\W]))')  # hyphenated words
    em_dash = re.compile(r'(\\s+|'                                  # any whitespace
                         r'[^\\s\\w]*\\w+[^0-9\\W]-(?=\\w+[^0-9\\W])|'   # hyphenated words
                         r'(?!^)-{2,}(?=\\w))')                     # em-dash

                         
    # This less funky little regex just split on recognized spaces. E.g.
    #   "Hello there -- you goof-ball, use the -b option!"
    # splits into
    #   Hello/ /there/ /--/ /you/ /goof-ball,/ /use/ /the/ /-b/ /option!/
    wordsep_simple_re = re.compile(r'(\\s+)')


    # XXX this is not locale- or charset-aware -- string.lowercase
    # is US-ASCII only (and therefore English-only)
    sentence_end_re = re.compile(r'[a-z]'             # lowercase letter
                                 r'[\\.\\!\\?]'          # sentence-ending punct.
                                 r'[\\"\\']?'           # optional end-of-quote
                                 r'\\Z')               # end of chunk
    sentence_end_re = r'[a-z][\\.\\!\\?][\\"\\']?'

    def __init__(self,
                 width=70,
                 initial_indent="",
                 subsequent_indent="",
                 expand_tabs=True,
                 replace_whitespace=True,
                 fix_sentence_endings=False,
                 break_long_words=True,
                 drop_whitespace=True,
                 break_on_hyphens=True,
                 tabsize=8,
                 max_lines=None,
                 placeholder=' [...]'):
        self.width = width
        self.initial_indent = initial_indent
        self.subsequent_indent = subsequent_indent
        self.expand_tabs = expand_tabs
        self.replace_whitespace = replace_whitespace
        self.fix_sentence_endings = fix_sentence_endings
        self.break_long_words = break_long_words
        self.drop_whitespace = drop_whitespace
        self.break_on_hyphens = break_on_hyphens
        self.tabsize = tabsize
        self.max_lines = max_lines
        self.placeholder = placeholder


    # -- Private methods -----------------------------------------------
    # (possibly useful for subclasses to override)

    def _munge_whitespace(self, text):
        """_munge_whitespace(text : string) -> string
        Munge whitespace in text: expand tabs and convert all other
        whitespace characters to spaces.  Eg. " foo\\\\tbar\\\\n\\\\nbaz"
        becomes " foo    bar  baz".
        """
        if self.expand_tabs:
            text = text.expandtabs(self.tabsize)
        if self.replace_whitespace:
            for key, val in self.unicode_whitespace_trans.items():
                text = text.replace(key, val)
        return text


    def _split(self, text):
        """_split(text : string) -> [string]
        Split the text to wrap into indivisible chunks.  Chunks are
        not quite the same as words; see _wrap_chunks() for full
        details.  As an example, the text
          Look, goof-ball -- use the -b option!
        breaks into the following chunks:
          'Look,', ' ', 'goof-', 'ball', ' ', '--', ' ',
          'use', ' ', 'the', ' ', '-b', ' ', 'option!'
        if break_on_hyphens is True, or in:
          'Look,', ' ', 'goof-ball', ' ', '--', ' ',
          'use', ' ', 'the', ' ', '-b', ' ', option!'
        otherwise.
        """
        if self.break_on_hyphens is True:
            chunks = self.wordsep_re.split(text)
            if "--" in text:
                chunks = [item 
                            for sublist in [self.em_dash.split(chunk) for chunk in chunks] 
                                for item in sublist]
        else:
            chunks = self.wordsep_simple_re.split(text)
        chunks = [c for c in chunks if c]
        return chunks

    def _fix_sentence_endings(self, chunks):
        """_fix_sentence_endings(chunks : [string])
        Correct for sentence endings buried in 'chunks'.  Eg. when the
        original text contains "... foo.\\\\nBar ...", munge_whitespace()
        and split() will convert that to [..., "foo.", " ", "Bar", ...]
        which has one too few spaces; this method simply changes the one
        space to two.
        """
        i = 0
        # patsearch = self.sentence_end_re.search
        while i < len(chunks)-1:
            if chunks[i+1] == " " and re.search(self.sentence_end_re, chunks[i]) and chunks[i][-1] in ".!?\\"\\'":
                chunks[i+1] = "  "
                i += 2
            else:
                i += 1

    def _handle_long_word(self, reversed_chunks, cur_line, cur_len, width):
        """_handle_long_word(chunks : [string],
                             cur_line : [string],
                             cur_len : int, width : int)
        Handle a chunk of text (most likely a word, not whitespace) that
        is too long to fit in any line.
        """
        # Figure out when indent is larger than the specified width, and make
        # sure at least one character is stripped off on every pass
        if width < 1:
            space_left = 1
        else:
            space_left = width - cur_len

        # If we're allowed to break long words, then do so: put as much
        # of the next chunk onto the current line as will fit.
        if self.break_long_words:
            cur_line.append(reversed_chunks[-1][:space_left])
            reversed_chunks[-1] = reversed_chunks[-1][space_left:]

        # Otherwise, we have to preserve the long word intact.  Only add
        # it to the current line if there's nothing already there --
        # that minimizes how much we violate the width constraint.
        elif not cur_line:
            cur_line.append(reversed_chunks.pop())

        # If we're not allowed to break long words, and there's already
        # text on the current line, do nothing.  Next time through the
        # main loop of _wrap_chunks(), we'll wind up here again, but
        # cur_len will be zero, so the next line will be entirely
        # devoted to the long word that we can't handle right now.

    def _wrap_chunks(self, chunks):
        """_wrap_chunks(chunks : [string]) -> [string]
        Wrap a sequence of text chunks and return a list of lines of
        length 'self.width' or less.  (If 'break_long_words' is false,
        some lines may be longer than this.)  Chunks correspond roughly
        to words and the whitespace between them: each chunk is
        indivisible (modulo 'break_long_words'), but a line break can
        come between any two chunks.  Chunks should not have internal
        whitespace; ie. a chunk is either all whitespace or a "word".
        Whitespace chunks will be removed from the beginning and end of
        lines, but apart from that whitespace is preserved.
        """
        lines = []
        if self.width <= 0:
            raise ValueError("invalid width %r (must be > 0)" % self.width)
        if self.max_lines is not None:
            if self.max_lines > 1:
                indent = self.subsequent_indent
            else:
                indent = self.initial_indent
            if len(indent) + len(self.placeholder.lstrip()) > self.width:
                raise ValueError("placeholder too large for max width")

        # Arrange in reverse order so items can be efficiently popped
        # from a stack of chucks.
        chunks.reverse()

        while chunks:

            # Start the list of chunks that will make up the current line.
            # cur_len is just the length of all the chunks in cur_line.
            cur_line = []
            cur_len = 0

            # Figure out which static string will prefix this line.
            if lines:
                indent = self.subsequent_indent
            else:
                indent = self.initial_indent

            # Maximum width for this line.
            width = self.width - len(indent)

            # First chunk on line is whitespace -- drop it, unless this
            # is the very beginning of the text (ie. no lines started yet).
            if self.drop_whitespace and chunks[-1].strip() == '' and lines:
                del chunks[-1]

            while chunks:
                l = len(chunks[-1])

                # Can at least squeeze this chunk onto the current line.
                if cur_len + l <= width:
                    cur_line.append(chunks.pop())
                    cur_len += l

                # Nope, this line is full.
                else:
                    break

            # The current line is full, and the next chunk is too big to
            # fit on *any* line (not just this one).
            if chunks and len(chunks[-1]) > width:
                self._handle_long_word(chunks, cur_line, cur_len, width)
                cur_len = sum(map(len, cur_line))

            # If the last chunk on this line is all whitespace, drop it.
            if self.drop_whitespace and cur_line and cur_line[-1].strip() == '':
                cur_len -= len(cur_line[-1])
                del cur_line[-1]

            if cur_line:
                if (self.max_lines is None or
                    len(lines) + 1 < self.max_lines or
                    (not chunks or
                     self.drop_whitespace and
                     len(chunks) == 1 and
                     not chunks[0].strip()) and cur_len <= width):
                    # Convert current line back to a string and store it in
                    # list of all lines (return value).
                    lines.append(indent + ''.join(cur_line))
                else:
                    while cur_line:
                        if (cur_line[-1].strip() and
                            cur_len + len(self.placeholder) <= width):
                            cur_line.append(self.placeholder)
                            lines.append(indent + ''.join(cur_line))
                            break
                        cur_len -= len(cur_line[-1])
                        del cur_line[-1]
                    else:
                        if lines:
                            prev_line = lines[-1].rstrip()
                            if (len(prev_line) + len(self.placeholder) <=
                                    self.width):
                                lines[-1] = prev_line + self.placeholder
                                break
                        lines.append(indent + self.placeholder.lstrip())
                    break

        return lines

    def _split_chunks(self, text):
        text = self._munge_whitespace(text)
        return self._split(text)

    # -- Public interface ----------------------------------------------

    def wrap(self, text):
        """wrap(text : string) -> [string]
        Reformat the single paragraph in 'text' so it fits in lines of
        no more than 'self.width' columns, and return a list of wrapped
        lines.  Tabs in 'text' are expanded with string.expandtabs(),
        and all other whitespace characters (including newline) are
        converted to space.
        """
        chunks = self._split_chunks(text)
        if self.fix_sentence_endings:
            self._fix_sentence_endings(chunks)
        return self._wrap_chunks(chunks)

    def fill(self, text):
        """fill(text : string) -> string
        Reformat the single paragraph in 'text' to fit in lines of no
        more than 'self.width' columns, and return a new string
        containing the entire wrapped paragraph.
        """
        return "\\n".join(self.wrap(text))


# -- Convenience interface ---------------------------------------------

def wrap(text, width=70, **kwargs):
    """Wrap a single paragraph of text, returning a list of wrapped lines.
    Reformat the single paragraph in 'text' so it fits in lines of no
    more than 'width' columns, and return a list of wrapped lines.  By
    default, tabs in 'text' are expanded with string.expandtabs(), and
    all other whitespace characters (including newline) are converted to
    space.  See TextWrapper class for available keyword args to customize
    wrapping behaviour.
    """
    w = TextWrapper(width=width, **kwargs)
    return w.wrap(text)

def fill(text, width=70, **kwargs):
    """Fill a single paragraph of text, returning a new string.
    Reformat the single paragraph in 'text' to fit in lines of no more
    than 'width' columns, and return a new string containing the entire
    wrapped paragraph.  As with wrap(), tabs are expanded and other
    whitespace characters converted to space.  See TextWrapper class for
    available keyword args to customize wrapping behaviour.
    """
    w = TextWrapper(width=width, **kwargs)
    return w.fill(text)

def shorten(text, width, **kwargs):
    """Collapse and truncate the given text to fit in the given width.
    The text first has its whitespace collapsed.  If it then fits in
    the *width*, it is returned as is.  Otherwise, as many words
    as possible are joined and then the placeholder is appended::
        >>> textwrap.shorten("Hello  world!", width=12)
        'Hello world!'
        >>> textwrap.shorten("Hello  world!", width=11)
        'Hello [...]'
    """
    w = TextWrapper(width=width, max_lines=1, **kwargs)
    return w.fill(' '.join(text.strip().split()))


# -- Loosely related functionality -------------------------------------

# _whitespace_only_re = re.compile('^[ \\t]+$', re.MULTILINE)
# _leading_whitespace_re = re.compile('(^[ \\t]*)(?:[^ \\t\\n])', re.MULTILINE)

def dedent(text):
    """Remove any common leading whitespace from every line in \`text\`.
    This can be used to make triple-quoted strings line up with the left
    edge of the display, while still presenting them in the source code
    in indented form.
    Note that tabs and spaces are both treated as whitespace, but they
    are not equal: the lines "  hello" and "\\\\thello" are
    considered to have no common leading whitespace.
    Entirely blank lines are normalized to a newline character.
    """
    # Look for the longest leading string of spaces and tabs common to
    # all lines.
    margin = None

    indents = re.findall(r'(^[ \\t]*)(?:[^ \\t\\n])',text, re.MULTILINE)
    for indent in indents:
        if margin is None:
            margin = indent

        # Current line more deeply indented than previous winner:
        # no change (previous winner is still on top).
        elif indent.startswith(margin):
            pass

        # Current line consistent with and no deeper than previous winner:
        # it's the new winner.
        elif margin.startswith(indent):
            margin = indent

        # Find the largest common whitespace between current line and previous
        # winner.
        else:
            for i, (x, y) in enumerate(zip(margin, indent)):
                if x != y:
                    margin = margin[:i]
                    break
    # sanity check (testing/debugging only)
    if 0 and margin:
        for line in text.split("\\n"):
            assert not line or line.startswith(margin), \\
                   "line = %r, margin = %r" % (line, margin)

    if margin:
        lines = [line[len(margin):] 
                    if line.strip()
                        else line.strip() 
                            for line in text.split("\\n")]
        text = "\\n".join(lines)
    return text


def indent(text, prefix, predicate=None):
    """Adds 'prefix' to the beginning of selected lines in 'text'.
    If 'predicate' is provided, 'prefix' will only be added to the lines
    where 'predicate(line)' is True. If 'predicate' is not provided,
    it will default to adding 'prefix' to all non-empty lines that do not
    consist solely of whitespace characters.
    """
    if predicate is None:
        def predicate(line):
            return line.strip()

    def prefixed_lines():
        for line in text.splitlines(True):
            yield (prefix + line if predicate(line) else line)
    return ''.join(prefixed_lines())


if __name__ == "__main__":
    #print dedent("\\tfoo\\n\\tbar")
    #print dedent("  \\thello there\\n  \\t  how are you?")
    print(dedent("Hello there.\\n  This is indented."))`,"src/lib/this.py":`import _sk_fail; _sk_fail._("this")
`,"src/lib/threading.py":`import _sk_fail; _sk_fail._("threading")
`,"src/lib/timeit.py":`import _sk_fail; _sk_fail._("timeit")
`,"src/lib/toaiff.py":`import _sk_fail; _sk_fail._("toaiff")
`,"src/lib/trace.py":`import _sk_fail; _sk_fail._("trace")
`,"src/lib/traceback.py":`import _sk_fail; _sk_fail._("traceback")
`,"src/lib/tty.py":`import _sk_fail; _sk_fail._("tty")
`,"src/lib/types.py":`"""
This file was modified from CPython.
Copyright (c) 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010,
2011, 2012, 2013, 2014, 2015 Python Software Foundation; All Rights Reserved
"""
"""Define names for all type symbols known in the standard interpreter.
Types that are part of optional modules (e.g. array) are not listed.
"""
import sys

# Iterators in Python aren't a matter of type but of protocol.  A large
# and changing number of builtin types implement *some* flavor of
# iterator.  Don't check the type!  Use hasattr to check for both
# "__iter__" and "next" attributes instead.
MappingProxyType = type(type.__dict__)
WrapperDescriptorType = type(object.__init__)
MethodWrapperType = type(object().__str__)
MethodDescriptorType = type(str.join)
ClassMethodDescriptorType = type(dict.__dict__['fromkeys'])

NoneType = type(None)
TypeType = type
ObjectType = object
IntType = int
try:
    LongType = long
except: pass
FloatType = float
BooleanType = bool
try:
    ComplexType = complex
except NameError:
    pass
StringType = str

# StringTypes is already outdated.  Instead of writing "type(x) in
# types.StringTypes", you should use "isinstance(x, basestring)".  But
# we keep around for compatibility with Python 2.2.
try:
    UnicodeType = unicode
    StringTypes = (StringType, UnicodeType)
except NameError:
    StringTypes = (StringType,)

BufferType = buffer

TupleType = tuple
ListType = list
DictType = DictionaryType = dict

def _f(): pass
FunctionType = type(_f)
LambdaType = type(lambda: None)         # Same as FunctionType
#CodeType = type(_f.func_code)

def _g():
    yield 1
GeneratorType = type(_g())

class _C:
    def _m(self): pass
ClassType = type(_C)
UnboundMethodType = type(_C._m)         # Same as MethodType
_x = _C()
InstanceType = type(_x)
MethodType = type(_x._m)
BuiltinFunctionType = type(len)
BuiltinMethodType = type([].append)     # Same as BuiltinFunctionType

ModuleType = type(sys)
FileType = file
try:
    XRangeType = xrange
except NameError:
    pass

# try:
#     raise TypeError
# except TypeError:
#     tb = sys.exc_info()[2]
#     TracebackType = type(tb)
#     FrameType = type(tb.tb_frame)
#     del tb

SliceType = slice
EllipsisType = type(Ellipsis)

# DictProxyType = type(TypeType.__dict__)
NotImplementedType = type(NotImplemented)

# For Jython, the following two types are identical
# GetSetDescriptorType = type(FunctionType.func_code)
# MemberDescriptorType = type(FunctionType.func_globals)

del sys, _f, _g, _C, _x                           # Not for export
__all__ = list(n for n in globals() if n[:1] != '_')

GenericAlias = type(type[int])`,"src/lib/unittest/gui.py":`import document
from unittest import TestCase

class TestCaseGui(TestCase):
     def __init__(self):
          TestCase.__init__(self)
          self.divid = document.currentDiv()
          self.mydiv = document.getElementById(self.divid)
          res = document.getElementById(self.divid+'_unit_results')
          if res:
              self.resdiv = res
              res.innerHTML = ''
          else:
              self.resdiv = document.createElement('div')
              self.resdiv.setAttribute('id',self.divid+'_unit_results')
              self.resdiv.setAttribute('class','unittest-results')
              self.mydiv.appendChild(self.resdiv)


     def main(self):
         t = document.createElement('table')
         self.resTable = t
         self.resdiv.appendChild(self.resTable)

         headers = ['Result','Actual Value','Expected Value','Notes']
         row = document.createElement('tr')
         for item in headers:
             head = document.createElement('th')
             head.setAttribute('class','ac-feedback')
             head.innerHTML = item
             head.setCSS('text-align','center')
             row.appendChild(head)
         self.resTable.appendChild(row)

         for func in self.tlist:
             try:
                 self.setUp()
                 func()
                 self.tearDown()
             except Exception as e:
                 self.appendResult('Error', None, None, e)
                 self.numFailed += 1
                 self.showSummary()

     def appendResult(self,res,actual,expected,param):
         trimActual = False
         if len(str(actual)) > 15:
             trimActual = True
             actualType = type(actual)
         trimExpected = False
         if len(str(expected)) > 15:
             trimExpected = True
             expectedType = type(expected)
         row = document.createElement('tr')
         err = False
         if res == 'Error':
             err = True
             msg = 'Error: %s' % param
             errorData = document.createElement('td')
             errorData.setAttribute('class','ac-feedback')
             errorData.innerHTML = 'ERROR'
             errorData.setCSS('background-color','#de8e96')
             errorData.setCSS('text-align','center')
             row.appendChild(errorData)
         elif res:
             passed = document.createElement('td')
             passed.setAttribute('class','ac-feedback')
             passed.innerHTML = 'Pass'
             passed.setCSS('background-color','#83d382')
             passed.setCSS('text-align','center')
             row.appendChild(passed)
             self.numPassed += 1
         else:
             fail = document.createElement('td')
             fail.setAttribute('class','ac-feedback')
             fail.innerHTML = 'Fail'
             fail.setCSS('background-color','#de8e96')
             fail.setCSS('text-align','center')
             row.appendChild(fail)
             self.numFailed += 1


         act = document.createElement('td')
         act.setAttribute('class','ac-feedback')
         if trimActual:
             actHTML = str(actual)[:5] + "..." + str(actual)[-5:]
             if actualType == str:
                 actHTML = repr(actHTML)
             act.innerHTML = actHTML
         else:
             act.innerHTML = repr(actual)
         act.setCSS('text-align','center')
         row.appendChild(act)

         expect = document.createElement('td')
         expect.setAttribute('class','ac-feedback')

         if trimExpected:
             expectedHTML = str(expected)[:5] + "..." + str(expected)[-5:]
             if expectedType == str:
                 expectedHTML = repr(expectedHTML)
             expect.innerHTML = expectedHTML
         else:
             expect.innerHTML = repr(expected)
         expect.setCSS('text-align','center')
         row.appendChild(expect)
         inp = document.createElement('td')
         inp.setAttribute('class','ac-feedback')

         if err:
             inp.innerHTML = msg
         else:
             inp.innerHTML = param
         inp.setCSS('text-align','center')
         row.appendChild(inp)
         self.resTable.appendChild(row)


     def showSummary(self):
         pct = self.numPassed / (self.numPassed+self.numFailed) * 100
         pTag = document.createElement('p')
         pTag.innerHTML = "You passed: " + str(pct) + "% of the tests"
         self.resdiv.appendChild(pTag)
`,"src/lib/unittest/__init__.py":`__author__ = 'bmiller'
'''
This is the start of something that behaves like
the unittest module from cpython.

'''
import re

class _AssertRaisesContext(object):
    """A context manager used to implement TestCase.assertRaises* methods."""
    def __init__(self, expected, test_case):
        self.test_case = test_case
        self.expected = expected
        self.exception = None

    def _is_subtype(self, expected, basetype):
        if isinstance(expected, tuple):
            return all(self._is_subtype(e, basetype) for e in expected)
        return isinstance(expected, type) and issubclass(expected, basetype)

    def handle(self, args, kwargs):
        """
        If args is empty, assertRaises is being used as a
        context manager, so return self.
        If args is not empty, call a callable passing positional and keyword
        arguments.
        """
        try:
            if not self._is_subtype(self.expected, BaseException):
                raise TypeError('assertRaises() arg 1 must be an exception type or tuple of exception types')
            if not args:
                return self

            callable_obj = args[0]
            args = args[1:]
            with self:
                callable_obj(*args, **kwargs) 

        finally:
            # bpo-23890: manually break a reference cycle
            self = None

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, tb):
        res = True
        feedback = ""
        self.exception = exc_value
        try:
            act_exc = exc_type.__name__
        except AttributeError:
            act_exc = str(exc_type)
        try:
            exp_exc = self.expected.__name__
        except AttributeError:
            exp_exc = str(self.expected)

        if exc_type is None:
            res = False
            feedback = "{} not raised".format(exp_exc)
        elif not issubclass(exc_type, self.expected):
            res = False
            feedback = "Expected {} but got {}".format(exp_exc, act_exc)

        self.test_case.appendResult(res, act_exc, exp_exc, feedback)
        return True


class TestCase(object):
    def __init__(self):
        self.numPassed = 0
        self.numFailed = 0
        self.assertPassed = 0
        self.assertFailed = 0
        self.verbosity = 1
        self.tlist = []
        testNames = {}
        for name in dir(self):
            if name[:4] == 'test' and name not in testNames:
                self.tlist.append(getattr(self,name))
                testNames[name]=True

    def setUp(self):
        pass

    def tearDown(self):
        pass
    
    def cleanName(self,funcName):
        return funcName.__func__.__name__

    def main(self):

        for func in self.tlist:
            if self.verbosity > 1:
                print('Running %s' % self.cleanName(func))
            try:
                self.setUp()
                self.assertPassed = 0
                self.assertFailed = 0
                func()
                self.tearDown()
                if self.assertFailed == 0:
                    self.numPassed += 1
                else:
                    self.numFailed += 1
                    print('Tests failed in %s ' % self.cleanName(func))
            except Exception as e:
                self.assertFailed += 1
                self.numFailed += 1
                print('Test threw exception in %s (%s)' % (self.cleanName(func), e))
        self.showSummary()

    def assertEqual(self, actual, expected, feedback=""):
        res = actual==expected
        if not res and feedback == "":
            feedback = "Expected %s to equal %s" % (str(actual),str(expected))
        self.appendResult(res, actual ,expected, feedback)

    def assertNotEqual(self, actual, expected, feedback=""):
        res = actual != expected
        if not res and feedback == "":
            feedback = "Expected %s to not equal %s" % (str(actual),str(expected))
        self.appendResult(res, actual, expected, feedback)

    def assertTrue(self,x, feedback=""):
        res = bool(x) is True
        if not res and feedback == "":
            feedback = "Expected %s to be True" % (str(x))
        self.appendResult(res, x, True, feedback)

    def assertFalse(self,x, feedback=""):
        res = not bool(x)
        if not res and feedback == "":
            feedback = "Expected %s to be False" % (str(x))
        self.appendResult(res, x, False, feedback)

    def assertIs(self,a,b, feedback=""):
        res = a is b
        if not res and feedback == "":
            feedback = "Expected %s to be the same object as %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsNot(self,a,b, feedback=""):
        res = a is not b
        if not res and feedback == "":
            feedback = "Expected %s to not be the same object as %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsNone(self,x, feedback=""):
        res = x is None
        if not res and feedback == "":
            feedback = "Expected %s to be None" % (str(x))
        self.appendResult(res, x, None, feedback)

    def assertIsNotNone(self,x, feedback=""):
        res = x is not None
        if not res and feedback == "":
            feedback = "Expected %s to not be None" % (str(x))
        self.appendResult(res, x, None, feedback)

    def assertIn(self, a, b, feedback=""):
        res = a in b
        if not res and feedback == "":
            feedback = "Expected %s to be in %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotIn(self, a, b, feedback=""):
        res = a not in b
        if not res and feedback == "":
            feedback = "Expected %s to not be in %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertIsInstance(self,a,b, feedback=""):
        res = isinstance(a,b)
        if not res and feedback == "":
            feedback = "Expected %s to be an instance of %s" % (str(a), str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotIsInstance(self,a,b, feedback=""):
        res = not isinstance(a,b)
        if not res and feedback == "":
            feedback = "Expected %s to not be an instance of %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertRegex(self, text, expected_regex, feedback=""):
        """Fail the test unless the text matches the regular expression."""
        if isinstance(expected_regex, (str, )): #bytes
            assert expected_regex, "expected_regex must not be empty."
            expected_regex = re.compile(expected_regex)
        if not expected_regex.search(text):
            res = False
            feedback = "Regex didn't match: %r not found in %r" % (
                repr(expected_regex), text)
        else:
            res = True
        self.appendResult(res, text, expected_regex, feedback)

    def assertNotRegex(self, text, unexpected_regex, feedback=""):
        """Fail the test if the text matches the regular expression."""
        if isinstance(unexpected_regex, (str, )): # bytes
            unexpected_regex = re.compile(unexpected_regex)
        match = unexpected_regex.search(text)
        if match:
            feedback = 'Regex matched: %r matches %r in %r' % (
                text[match.start() : match.end()],
                repr(unexpected_regex),
                text)
            # _formatMessage ensures the longMessage option is respected
        self.appendResult(not bool(match), text, unexpected_regex, feedback)

    def assertAlmostEqual(self, a, b, places=7, feedback="", delta=None):

        if delta is not None:
            res = abs(a-b) <= delta
        else:
            if places is None:
                places = 7
            res = round(a-b, places) == 0
        
        if not res and feedback == "":
            feedback = "Expected %s to equal %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertNotAlmostEqual(self, a, b, places=7, feedback="", delta=None):

        if delta is not None:
            res = not (a == b) and abs(a - b) > delta
        else:
            if places is None:
                places = 7

            res = round(a-b, places) != 0

        if not res and feedback == "":
            feedback = "Expected %s to not equal %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertGreater(self,a,b, feedback=""):
        res = a > b
        if not res and feedback == "":
            feedback = "Expected %s to be greater than %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertGreaterEqual(self,a,b, feedback=""):
        res = a >= b
        if not res and feedback == "":
            feedback = "Expected %s to be >= %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertLess(self, a, b, feedback=""):
        res = a < b
        if not res and feedback == "":
            feedback = "Expected %s to be less than %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def assertLessEqual(self,a,b, feedback=""):
        res = a <= b
        if not res and feedback == "":
            feedback = "Expected %s to be <= %s" % (str(a),str(b))
        self.appendResult(res, a, b, feedback)

    def appendResult(self,res,actual,expected,feedback):
        if res:
            msg = 'Pass'
            self.assertPassed += 1
        else:
            msg = 'Fail: ' +  feedback
            print(msg)
            self.assertFailed += 1

    def assertRaises(self, expected_exception, *args, **kwargs):
        context = _AssertRaisesContext(expected_exception, self)
        try:
            return context.handle(args, kwargs)
        finally:
            # bpo-23890: manually break a reference cycle
            context = None

    def fail(self, msg=None):
        if msg is None:
            msg = 'Fail'
        else:
            msg = 'Fail: ' + msg
        print(msg)
        self.assertFailed += 1

    def showSummary(self):
        pct = self.numPassed / (self.numPassed+self.numFailed) * 100
        print("Ran %d tests, passed: %d failed: %d\\n" % (self.numPassed+self.numFailed,
                                               self.numPassed, self.numFailed))



def main(verbosity=1):
    glob = globals() # globals() still needs work
    for name in glob:
        if type(glob[name]) == type and issubclass(glob[name], TestCase):
            try:
                tc = glob[name]()
                tc.verbosity = verbosity
                tc.main()
            except:
                print("Uncaught Error in: ", name)
`,"src/lib/urllib2.py":`import _sk_fail; _sk_fail._("urllib2")
`,"src/lib/urlparse.py":`import _sk_fail; _sk_fail._("urlparse")
`,"src/lib/user.py":`import _sk_fail; _sk_fail._("user")
`,"src/lib/UserDict.py":`import _sk_fail; _sk_fail._("UserDict")
`,"src/lib/UserList.py":`import _sk_fail; _sk_fail._("UserList")
`,"src/lib/UserString.py":`import _sk_fail; _sk_fail._("UserString")
`,"src/lib/uu.py":`import _sk_fail; _sk_fail._("uu")
`,"src/lib/uuid.py":`import _sk_fail; _sk_fail._("uuid")
`,"src/lib/warnings.py":`import _sk_fail; _sk_fail._("warnings")
`,"src/lib/wave.py":`import _sk_fail; _sk_fail._("wave")
`,"src/lib/weakref.py":`import _sk_fail; _sk_fail._("weakref")
`,"src/lib/whichdb.py":`import _sk_fail; _sk_fail._("whichdb")
`,"src/lib/wsgiref/__init__.py":`import _sk_fail; _sk_fail._("wsgiref")
`,"src/lib/xdrlib.py":`import _sk_fail; _sk_fail._("xdrlib")
`,"src/lib/xml/dom/__init__.py":`import _sk_fail; _sk_fail._("dom")
`,"src/lib/xml/etree/__init__.py":`import _sk_fail; _sk_fail._("etree")
`,"src/lib/xml/parsers/__init__.py":`import _sk_fail; _sk_fail._("parsers")
`,"src/lib/xml/sax/__init__.py":`import _sk_fail; _sk_fail._("sax")
`,"src/lib/xml/__init__.py":`import _sk_fail; _sk_fail._("xml")
`,"src/lib/xmllib.py":`import _sk_fail; _sk_fail._("xmllib")
`,"src/lib/xmlrpclib.py":`import _sk_fail; _sk_fail._("xmlrpclib")
`,"src/lib/zipfile.py":`import _sk_fail; _sk_fail._("zipfile")
`,"src/lib/_abcoll.py":`import _sk_fail; _sk_fail._("_abcoll")
`,"src/lib/_LWPCookieJar.py":`import _sk_fail; _sk_fail._("_LWPCookieJar")
`,"src/lib/_MozillaCookieJar.py":`import _sk_fail; _sk_fail._("_MozillaCookieJar")
`,"src/lib/_sk_fail.py":`class NotImplementedImportError(ImportError, NotImplementedError): pass

def _(name):
    msg = "{} is not yet implemented in Skulpt".format(name)
    raise NotImplementedImportError(msg, name=name)
`,"src/lib/_threading_local.py":`import _sk_fail; _sk_fail._("_threading_local")
`,"src/lib/__future__.py":`import _sk_fail;_sk_fail._("__future__")
`,"src/lib/__phello__.foo.py":`import _sk_fail; _sk_fail._("__phello__.foo")
`,"src/builtin/sys.js":'var $builtinmodule=function(i){var t,n={},e=[],u=Sk.getSysArgv();for(t=0;t<u.length;++t)e.push(new Sk.builtin.str(u[t]));n.argv=new Sk.builtins.list(e),n.copyright=new Sk.builtin.str("Copyright 2009-2010 Scott Graham.\\nAll Rights Reserved.\\n"),Sk.__future__.python3?(n.version=new Sk.builtin.str("3.7(ish) [Skulpt]"),n.version_info=new Sk.builtin.tuple([new Sk.builtin.int_(3),new Sk.builtin.int_(7)])):(n.version=new Sk.builtin.str("2.7(ish) [Skulpt]"),n.version_info=new Sk.builtin.tuple([new Sk.builtin.int_(2),new Sk.builtin.int_(7)])),n.maxint=new Sk.builtin.int_(Math.pow(2,53)-1),n.maxsize=new Sk.builtin.int_(Math.pow(2,53)-1),n.modules=Sk.sysmodules,n.path=Sk.realsyspath,n.getExecutionLimit=new Sk.builtin.func((function(){return null===Sk.execLimit?Sk.builtin.none.none$:new Sk.builtin.int_(Sk.execLimit)})),n.setExecutionLimit=new Sk.builtin.func((function(i){if(null===Sk.execLimit)throw new Sk.builtin.NotImplementedError("Execution limiting is not enabled");void 0!==i&&(Sk.execLimit=Sk.builtin.asnum$(i))})),n.resetTimeout=new Sk.builtin.func((function(){Sk.execStart=new Date})),n.getYieldLimit=new Sk.builtin.func((function(){return null===Sk.yieldLimit?Sk.builtin.none.none$:new Sk.builtin.int_(Sk.yieldLimit)})),n.setYieldLimit=new Sk.builtin.func((function(i){if(null===Sk.yieldLimit)throw new Sk.builtin.NotImplementedError("Yielding is not enabled");void 0!==i&&(Sk.yieldLimit=Sk.builtin.asnum$(i))})),n.debug=new Sk.builtin.func((function(){return Sk.builtin.none.none$}));const l=Sk.builtin.make_structseq("sys","float_info",{max:"DBL_MAX -- maximum representable finite float",max_exp:"DBL_MAX_EXP -- maximum int e such that radix**(e-1) is representable",max_10_exp:"DBL_MAX_10_EXP -- maximum int e such that 10**e is representable",min:"DBL_MIN -- Minimum positive normalized float",min_exp:"DBL_MIN_EXP -- minimum int e such that radix**(e-1) is a normalized float",min_10_exp:"DBL_MIN_10_EXP -- minimum int e such that 10**e is a normalized",dig:"DBL_DIG -- digits",mant_dig:"DBL_MANT_DIG -- mantissa digits",epsilon:"DBL_EPSILON -- Difference between 1 and the next representable float",radix:"FLT_RADIX -- radix of exponent",rounds:"FLT_ROUNDS -- rounding mode"});n.float_info=new l([Number.MAX_VALUE,Math.floor(Math.log2(Number.MAX_VALUE)),Math.floor(Math.log10(Number.MAX_VALUE)),Number.MIN_VALUE,Math.ceil(Math.log2(Number.MIN_VALUE)),Math.ceil(Math.log10(Number.MIN_VALUE)),15,Math.log2(Number.MAX_SAFE_INTEGER),Number.EPSILON,2,1].map((i=>Sk.ffi.remapToPy(i))));const o=Sk.builtin.make_structseq("sys","int_info",{bits_per_digit:"size of a digit in bits",sizeof_digit:"size in bytes of the C type used to represent a digit"});return n.int_info=new o([30,4].map((i=>Sk.ffi.remapToPy(i)))),n.__stdout__=new Sk.builtin.file(new Sk.builtin.str("/dev/stdout"),new Sk.builtin.str("w")),n.__stdin__=new Sk.builtin.file(new Sk.builtin.str("/dev/stdin"),new Sk.builtin.str("r")),n.stdout=n.__stdout__,n.stdin=n.__stdin__,n};',"src/lib/array.js":`function $builtinmodule(e){var n={},t=["c","b","B","u","h","H","i","I","l","L","f","d"];return n.__name__=new Sk.builtin.str("array"),n.array=Sk.misceval.buildClass(n,(function(e,n){n.__init__=new Sk.builtin.func((function(e,n,i){if(Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,3),-1==t.indexOf(Sk.ffi.remapToJs(n)))throw new Sk.builtin.ValueError("bad typecode (must be c, b, B, u, h, H, i, I, l, L, f or d)");if(i&&!Sk.builtin.checkIterable(i))throw new Sk.builtin.TypeError("iteration over non-sequence");if(e.$d.mp$ass_subscript(new Sk.builtin.str("typecode"),n),e.$d.mp$ass_subscript(new Sk.builtin.str("__module__"),new Sk.builtin.str("array")),e.typecode=n,void 0===i)e.internalIterable=new Sk.builtin.list;else if(i instanceof Sk.builtin.list)e.internalIterable=i;else{e.internalIterable=new Sk.builtin.list;for(let n=Sk.abstr.iter(i),t=n.tp$iternext();void 0!==t;t=n.tp$iternext())Sk.misceval.callsimArray(e.internalIterable.append,[e.internalIterable,t])}})),n.__repr__=new Sk.builtin.func((function(e){var n=Sk.ffi.remapToJs(e.typecode),t="";return Sk.ffi.remapToJs(e.internalIterable).length&&(t="c"==Sk.ffi.remapToJs(e.typecode)?", '"+Sk.ffi.remapToJs(e.internalIterable).join("")+"'":", "+Sk.ffi.remapToJs(Sk.misceval.callsimArray(e.internalIterable.__repr__,[e.internalIterable]))),new Sk.builtin.str("array('"+n+"'"+t+")")})),n.__str__=n.__repr__,n.__getattribute__=new Sk.builtin.func((function(e,n){return e.tp$getattr(n)})),n.append=new Sk.builtin.func((function(e,n){return Sk.misceval.callsimArray(e.internalIterable.append,[e.internalIterable,n]),Sk.builtin.none.none$})),n.extend=new Sk.builtin.func((function(e,n){if(Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,2),!Sk.builtin.checkIterable(n))throw new Sk.builtin.TypeError("iteration over non-sequence");for(let t=Sk.abstr.iter(n),i=t.tp$iternext();void 0!==i;i=t.tp$iternext())Sk.misceval.callsimArray(e.internalIterable.append,[e.internalIterable,i])}))}),"array",[]),n}`,"src/lib/collections.js":`function $builtinmodule(t){const e={};return Sk.misceval.chain(Sk.importModule("keyword",!1,!0),(t=>(e._iskeyword=t.$d.iskeyword,Sk.importModule("itertools",!1,!0))),(t=>(e._chain=t.$d.chain,e._starmap=t.$d.starmap,e._repeat=t.$d.repeat,Sk.importModule("operator",!1,!0))),(t=>{e._itemgetter=t.$d.itemgetter}),(()=>collections_mod(e)))}function collections_mod(t){function counterNumberSlot(e){return function(i){if(void 0!==i&&!(i instanceof t.Counter))return Sk.builtin.NotImplemented.NotImplemented$;const s=new t.Counter;return e.call(this,s,i),s}}function counterInplaceSlot(t,e){return function(i){if(!(i instanceof Sk.builtin.dict))throw new Sk.builtin.TypeError("Counter "+t+"= "+Sk.abstr.typeName(i)+" is not supported");return e.call(this,i),this.keep$positive()}}t.__all__=new Sk.builtin.list(["deque","defaultdict","namedtuple","Counter","OrderedDict"].map((t=>new Sk.builtin.str(t)))),t.defaultdict=Sk.abstr.buildNativeClass("collections.defaultdict",{constructor:function defaultdict(t,e){this.default_factory=t,Sk.builtin.dict.call(this,e)},base:Sk.builtin.dict,methods:{copy:{$meth(){return this.$copy()},$flags:{NoArgs:!0}},__copy__:{$meth(){return this.$copy()},$flags:{NoArgs:!0}},__missing__:{$meth(t){if(Sk.builtin.checkNone(this.default_factory))throw new Sk.builtin.KeyError(Sk.misceval.objectRepr(t));{const e=Sk.misceval.callsimArray(this.default_factory,[]);return this.mp$ass_subscript(t,e),e}},$flags:{OneArg:!0}}},getsets:{default_factory:{$get(){return this.default_factory},$set(t){t=t||Sk.builtin.none.none$,this.default_factory=t}}},slots:{tp$doc:"defaultdict(default_factory[, ...]) --\\x3e dict with default factory\\n\\nThe default factory is called without arguments to produce\\na new value when a key is not present, in __getitem__ only.\\nA defaultdict compares equal to a dict with the same items.\\nAll remaining arguments are treated the same as if they were\\npassed to the dict constructor, including keyword arguments.\\n",tp$init(t,e){const i=t.shift();if(void 0===i)this.default_factory=Sk.builtin.none.none$;else{if(!Sk.builtin.checkCallable(i)&&!Sk.builtin.checkNone(i))throw new Sk.builtin.TypeError("first argument must be callable");this.default_factory=i}return Sk.builtin.dict.prototype.tp$init.call(this,t,e)},$r(){const t=Sk.misceval.objectRepr(this.default_factory),e=Sk.builtin.dict.prototype.$r.call(this).v;return new Sk.builtin.str("defaultdict("+t+", "+e+")")}},proto:{$copy(){const e=[];return Sk.misceval.iterFor(Sk.abstr.iter(this),(t=>{e.push(t),e.push(this.mp$subscript(t))})),new t.defaultdict(this.default_factory,e)}}}),t.Counter=Sk.abstr.buildNativeClass("Counter",{constructor:function Counter(){this.$d=new Sk.builtin.dict,Sk.builtin.dict.apply(this)},base:Sk.builtin.dict,methods:{elements:{$flags:{NoArgs:!0},$meth(){const e=t._chain.tp$getattr(new Sk.builtin.str("from_iterable")),i=t._starmap,s=t._repeat,n=Sk.misceval.callsimArray;return n(e,[n(i,[s,n(this.tp$getattr(this.str$items))])])}},most_common:{$flags:{NamedArgs:["n"],Defaults:[Sk.builtin.none.none$]},$meth(t){const e=this.sq$length();t=Sk.builtin.checkNone(t)||(t=Sk.misceval.asIndexOrThrow(t))>e?e:t<0?0:t;const i=this.$items().sort(((t,e)=>Sk.misceval.richCompareBool(t[1],e[1],"Lt")?1:Sk.misceval.richCompareBool(t[1],e[1],"Gt")?-1:0));return new Sk.builtin.list(i.slice(0,t).map((t=>new Sk.builtin.tuple(t))))}},update:{$flags:{FastCall:!0},$meth(t,e){return Sk.abstr.checkArgsLen("update",t,0,1),this.counter$update(t,e)}},subtract:{$flags:{FastCall:!0},$meth(t,e){Sk.abstr.checkArgsLen("subtract",t,0,1);const i=t[0];if(void 0!==i)if(i instanceof Sk.builtin.dict)for(let s=Sk.abstr.iter(i),n=s.tp$iternext();void 0!==n;n=s.tp$iternext()){const t=this.mp$subscript(n);this.mp$ass_subscript(n,Sk.abstr.numberBinOp(t,i.mp$subscript(n),"Sub"))}else for(let s=Sk.abstr.iter(i),n=s.tp$iternext();void 0!==n;n=s.tp$iternext()){const t=this.mp$subscript(n);this.mp$ass_subscript(n,Sk.abstr.numberBinOp(t,this.$one,"Sub"))}e=e||[];for(let s=0;s<e.length;s+=2){const t=new Sk.builtin.str(e[s]),i=this.mp$subscript(t);this.mp$ass_subscript(t,Sk.abstr.numberBinOp(i,e[s+1],"Sub"))}return Sk.builtin.none.none$}},__missing__:{$meth(t){return this.$zero},$flags:{OneArg:!0}},copy:{$meth(){return Sk.misceval.callsimArray(t.Counter,[this])},$flags:{NoArgs:!0}}},getsets:{__dict__:Sk.generic.getSetDict},slots:{tp$doc:"Dict subclass for counting hashable items.  Sometimes called a bag\\n    or multiset.  Elements are stored as dictionary keys and their counts\\n    are stored as dictionary values.\\n\\n    >>> c = Counter('abcdeabcdabcaba')  # count elements from a string\\n\\n    >>> c.most_common(3)                # three most common elements\\n    [('a', 5), ('b', 4), ('c', 3)]\\n    >>> sorted(c)                       # list all unique elements\\n    ['a', 'b', 'c', 'd', 'e']\\n    >>> ''.join(sorted(c.elements()))   # list elements with repetitions\\n    'aaaaabbbbcccdde'\\n    >>> sum(c.values())                 # total of all counts\\n    15\\n\\n    >>> c['a']                          # count of letter 'a'\\n    5\\n    >>> for elem in 'shazam':           # update counts from an iterable\\n    ...     c[elem] += 1                # by adding 1 to each element's count\\n    >>> c['a']                          # now there are seven 'a'\\n    7\\n    >>> del c['b']                      # remove all 'b'\\n    >>> c['b']                          # now there are zero 'b'\\n    0\\n\\n    >>> d = Counter('simsalabim')       # make another counter\\n    >>> c.update(d)                     # add in the second counter\\n    >>> c['a']                          # now there are nine 'a'\\n    9\\n\\n    >>> c.clear()                       # empty the counter\\n    >>> c\\n    Counter()\\n\\n    Note:  If a count is set to zero or reduced to zero, it will remain\\n    in the counter until the entry is deleted or the counter is cleared:\\n\\n    >>> c = Counter('aaabbc')\\n    >>> c['b'] -= 2                     # reduce the count of 'b' by two\\n    >>> c.most_common()                 # 'b' is still in, but its count is zero\\n    [('a', 3), ('c', 1), ('b', 0)]\\n\\n",tp$init(t,e){return Sk.abstr.checkArgsLen(this.tpjs_name,t,0,1),this.counter$update(t,e)},$r(){const t=this.size>0?Sk.builtin.dict.prototype.$r.call(this).v:"";return new Sk.builtin.str(Sk.abstr.typeName(this)+"("+t+")")},tp$as_sequence_or_mapping:!0,mp$ass_subscript(t,e){return void 0===e?this.mp$lookup(t)&&Sk.builtin.dict.prototype.mp$ass_subscript.call(this,t,e):Sk.builtin.dict.prototype.mp$ass_subscript.call(this,t,e)},tp$as_number:!0,nb$positive:counterNumberSlot((function(t){this.$items().forEach((([e,i])=>{Sk.misceval.richCompareBool(i,this.$zero,"Gt")&&t.mp$ass_subscript(e,i)}))})),nb$negative:counterNumberSlot((function(t){this.$items().forEach((([e,i])=>{Sk.misceval.richCompareBool(i,this.$zero,"Lt")&&t.mp$ass_subscript(e,Sk.abstr.numberBinOp(this.$zero,i,"Sub"))}))})),nb$subtract:counterNumberSlot((function(t,e){this.$items().forEach((([i,s])=>{const n=Sk.abstr.numberBinOp(s,e.mp$subscript(i),"Sub");Sk.misceval.richCompareBool(n,this.$zero,"Gt")&&t.mp$ass_subscript(i,n)})),e.$items().forEach((([e,i])=>{void 0===this.mp$lookup(e)&&Sk.misceval.richCompareBool(i,this.$zero,"Lt")&&t.mp$ass_subscript(e,Sk.abstr.numberBinOp(this.$zero,i,"Sub"))}))})),nb$add:counterNumberSlot((function(t,e){this.$items().forEach((([i,s])=>{const n=Sk.abstr.numberBinOp(s,e.mp$subscript(i),"Add");Sk.misceval.richCompareBool(n,this.$zero,"Gt")&&t.mp$ass_subscript(i,n)})),e.$items().forEach((([e,i])=>{void 0===this.mp$lookup(e)&&Sk.misceval.richCompareBool(i,this.$zero,"Gt")&&t.mp$ass_subscript(e,i)}))})),nb$inplace_add:counterInplaceSlot("+",(function(t){t.$items().forEach((([t,e])=>{const i=Sk.abstr.numberInplaceBinOp(this.mp$subscript(t),e,"Add");this.mp$ass_subscript(t,i)}))})),nb$inplace_subtract:counterInplaceSlot("-",(function(t){t.$items().forEach((([t,e])=>{const i=Sk.abstr.numberInplaceBinOp(this.mp$subscript(t),e,"Sub");this.mp$ass_subscript(t,i)}))})),nb$or:counterNumberSlot((function(t,e){this.$items().forEach((([i,s])=>{const n=e.mp$subscript(i),r=Sk.misceval.richCompareBool(s,n,"Lt")?n:s;Sk.misceval.richCompareBool(r,this.$zero,"Gt")&&t.mp$ass_subscript(i,r)})),e.$items().forEach((([e,i])=>{void 0===this.mp$lookup(e)&&Sk.misceval.richCompareBool(i,this.$zero,"Gt")&&t.mp$ass_subscript(e,i)}))})),nb$and:counterNumberSlot((function(t,e){this.$items().forEach((([i,s])=>{const n=e.mp$subscript(i),r=Sk.misceval.richCompareBool(s,n,"Lt")?s:n;Sk.misceval.richCompareBool(r,this.$zero,"Gt")&&t.mp$ass_subscript(i,r)}))})),nb$inplace_and:counterInplaceSlot("&",(function(t){this.$items().forEach((([e,i])=>{const s=t.mp$subscript(e);Sk.misceval.richCompareBool(s,i,"Lt")&&this.mp$ass_subscript(e,s)}))})),nb$inplace_or:counterInplaceSlot("|",(function(t){t.$items().forEach((([t,e])=>{Sk.misceval.richCompareBool(e,this.mp$subscript(t),"Gt")&&this.mp$ass_subscript(t,e)}))})),nb$reflected_and:null,nb$reflected_or:null,nb$reflected_add:null,nb$reflected_subtract:null},proto:{keep$positive(){return this.$items().forEach((([t,e])=>{Sk.misceval.richCompareBool(e,this.$zero,"LtE")&&this.mp$ass_subscript(t)})),this},$zero:new Sk.builtin.int_(0),$one:new Sk.builtin.int_(1),str$items:new Sk.builtin.str("items"),counter$update(t,e){const i=t[0];if(void 0!==i)if(Sk.builtin.checkMapping(i))if(this.sq$length())for(let s=Sk.abstr.iter(i),n=s.tp$iternext();void 0!==n;n=s.tp$iternext()){const t=this.mp$subscript(n);this.mp$ass_subscript(n,Sk.abstr.numberBinOp(t,i.mp$subscript(n),"Add"))}else this.update$common(t,void 0,"update");else for(let s=Sk.abstr.iter(i),n=s.tp$iternext();void 0!==n;n=s.tp$iternext()){const t=this.mp$subscript(n);this.mp$ass_subscript(n,Sk.abstr.numberBinOp(t,this.$one,"Add"))}if(e&&e.length)if(this.sq$length())for(let s=0;s<e.length;s+=2){const t=new Sk.builtin.str(e[s]),i=this.mp$subscript(t);this.mp$ass_subscript(t,Sk.abstr.numberBinOp(i,e[s+1],"Add"))}else this.update$common([],e,"update");return Sk.builtin.none.none$}},classmethods:{fromkeys:{$meth:function fromkeys(){throw new Sk.builtin.NotImplementedError("Counter.fromkeys() is undefined.  Use Counter(iterable) instead.")},$flags:{MinArgs:1,MaxArgs:2}}}}),t.OrderedDict=Sk.abstr.buildNativeClass("collections.OrderedDict",{constructor:function OrderedDict(){Sk.builtin.dict.call(this)},base:Sk.builtin.dict,slots:{tp$doc:"Dictionary that remembers insertion order",$r(){if(this.in$repr)return new Sk.builtin.str("...");this.in$repr=!0;let t=this.$items().map((([t,e])=>\`(\${Sk.misceval.objectRepr(t)}, \${Sk.misceval.objectRepr(e)})\`));return t=0===t.length?"":"["+t.join(", ")+"]",this.in$repr=!1,new Sk.builtin.str(Sk.abstr.typeName(this)+"("+t+")")},tp$richcompare(e,i){if("Eq"!==i&&"Ne"!==i)return Sk.builtin.NotImplemented.NotImplemented$;if(!(e instanceof t.OrderedDict))return Sk.builtin.dict.prototype.tp$richcompare.call(this,e,i);const s="Eq"==i,n=this.size;if(n!==e.size)return!s;const r=e.$items(),a=this.$items();for(let t=0;t<n;t++){const e=a[t],i=r[t],n=e[0],o=i[0];if(n!==o&&!Sk.misceval.isTrue(Sk.misceval.richCompareBool(n,o,"Eq")))return!s;const l=e[1],h=i[1];if(l!==h&&!Sk.misceval.isTrue(Sk.misceval.richCompareBool(l,h,"Eq")))return!s}return s}},methods:{popitem:{$flags:{NamedArgs:["last"],Defaults:[Sk.builtin.bool.true$]},$meth(t){const e=this.get$size();if(0===e)throw new Sk.builtin.KeyError("dictionary is empty");const[i,s]=this.$items()[Sk.misceval.isTrue(t)?e-1:0];return this.pop$item(i),new Sk.builtin.tuple([i,s])}},move_to_end:{$flags:{NamedArgs:["key","last"],Defaults:[Sk.builtin.bool.true$]},$meth(t,e){let i;for(let n in this.entries){const e=this.entries[n][0];if(e===t||Sk.misceval.richCompareBool(e,t,"Eq")){i=n;break}}if(void 0===i)throw new Sk.builtin.KeyError(t);const s=this.entries[i];return delete this.entries[i],Sk.misceval.isTrue(e)?this.entries[i]=s:this.entries={[i]:s,...this.entries},Sk.builtin.none.none$}}}}),t.deque=Sk.abstr.buildNativeClass("collections.deque",{constructor:function deque(t,e,i,s,n){this.head=i||0,this.tail=s||0,this.mask=n||1,this.maxlen=e,this.v=t||new Array(2)},slots:{tp$doc:"deque([iterable[, maxlen]]) --\\x3e deque object\\n\\nA list-like sequence optimized for data accesses near its endpoints.",tp$hash:Sk.builtin.none.none$,tp$new:Sk.generic.new,tp$init(t,e){let[i,s]=Sk.abstr.copyKeywordsToNamedArgs("deque",["iterable","maxlen"],t,e);if(void 0!==s&&!Sk.builtin.checkNone(s)){if(s=Sk.misceval.asIndexSized(s,Sk.builtin.OverflowError,"an integer is required"),s<0)throw new Sk.builtin.ValueError("maxlen must be non-negative");this.maxlen=s}this.$clear(),void 0!==i&&this.$extend(i)},tp$getattr:Sk.generic.getAttr,tp$richcompare(e,i){if(this===e&&Sk.misceval.opAllowsEquality(i))return!0;if(!(e instanceof t.deque))return Sk.builtin.NotImplemented.NotImplemented$;const s=e,n=this.v;e=e.v;const r=this.tail-this.head&this.mask,a=s.tail-s.head&s.mask;let o,l=Math.max(r,a);if(r===a)for(l=0;l<r&&l<a&&(o=Sk.misceval.richCompareBool(n[this.head+l&this.mask],e[s.head+l&s.mask],"Eq"),o);++l);if(l>=r||l>=a)switch(i){case"Lt":return r<a;case"LtE":return r<=a;case"Eq":return r===a;case"NotEq":return r!==a;case"Gt":return r>a;case"GtE":return r>=a}return"Eq"!==i&&("NotEq"===i||Sk.misceval.richCompareBool(n[this.head+l&this.mask],e[s.head+l&s.mask],i))},tp$iter(){return new e(this)},$r(){const t=[],e=this.tail-this.head&this.mask;if(this.$entered_repr)return new Sk.builtin.str("[...]");this.$entered_repr=!0;for(let s=0;s<e;s++)t.push(Sk.misceval.objectRepr(this.v[this.head+s&this.mask]));const i=Sk.abstr.typeName(this);return void 0!==this.maxlen?new Sk.builtin.str(i+"(["+t.filter(Boolean).join(", ")+"], maxlen="+this.maxlen+")"):(this.$entered_repr=void 0,new Sk.builtin.str(i+"(["+t.filter(Boolean).join(", ")+"])"))},tp$as_number:!0,nb$bool(){return 0!=(this.tail-this.head&this.mask)},tp$as_sequence_or_mapping:!0,sq$contains(t){for(let e=this.tp$iter(),i=e.tp$iternext();void 0!==i;i=e.tp$iternext())if(Sk.misceval.richCompareBool(i,t,"Eq"))return!0;return!1},sq$concat(e){if(!(e instanceof t.deque))throw new Sk.builtin.TypeError("can only concatenate deque (not '"+Sk.abstr.typeName(e)+"') to deque");const i=this.$copy();for(let t=e.tp$iter(),s=t.tp$iternext();void 0!==s;s=t.tp$iternext())i.$push(s);return i},sq$length(){return this.tail-this.head&this.mask},sq$repeat(t){t=Sk.misceval.asIndexOrThrow(t,"can't multiply sequence by non-int of type '{tp$name}'");const e=this.tail-this.head&this.mask,i=this.$copy();let s;t<=0&&i.$clear();for(let n=1;n<t;n++)for(let t=0;t<e;t++)s=this.head+t&this.mask,i.$push(this.v[s]);return i},mp$subscript(t){t=Sk.misceval.asIndexOrThrow(t);const e=this.tail-this.head&this.mask;if(t>=e||t<-e)throw new Sk.builtin.IndexError("deque index out of range");const i=(t>=0?this.head:this.tail)+t&this.mask;return this.v[i]},mp$ass_subscript(t,e){t=Sk.misceval.asIndexOrThrow(t);const i=this.tail-this.head&this.mask;if(t>=i||t<-i)throw new Sk.builtin.IndexError("deque index out of range");void 0===e?this.del$item(t):this.set$item(t,e)},nb$inplace_add(t){this.maxlen=void 0;for(let e=Sk.abstr.iter(t),i=e.tp$iternext();void 0!==i;i=e.tp$iternext())this.$push(i);return this},nb$inplace_multiply(t){(t=Sk.misceval.asIndexSized(t,Sk.builtin.OverflowError,"can't multiply sequence by non-int of type '{tp$name}'"))<=0&&this.$clear();const e=this.$copy(),i=this.tail-this.head&this.mask;for(let s=1;s<t;s++)for(let t=0;t<i;t++){const i=this.head+t&this.mask;e.$push(this.v[i])}return this.v=e.v,this.head=e.head,this.tail=e.tail,this.mask=e.mask,this}},methods:{append:{$meth(t){return this.$push(t),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Add an element to the right side of the deque."},appendleft:{$meth(t){return this.$pushLeft(t),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Add an element to the left side of the deque."},clear:{$meth(){return this.$clear(),Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove all elements from the deque."},__copy__:{$meth(){return this.$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a shallow copy of a deque."},copy:{$meth(){return this.$copy()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a shallow copy of a deque."},count:{$meth(t){const e=this.tail-this.head&this.mask;let i=0;for(let s=0;s<e;s++)Sk.misceval.richCompareBool(this.v[this.head+s&this.mask],t,"Eq")&&i++;return new Sk.builtin.int_(i)},$flags:{OneArg:!0},$textsig:null,$doc:"D.count(value) -> integer -- return number of occurrences of value"},extend:{$meth(t){return this.$extend(t),Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Extend the right side of the deque with elements from the iterable"},extendleft:{$meth(t){for(let e=Sk.abstr.iter(t),i=e.tp$iternext();void 0!==i;i=e.tp$iternext())this.$pushLeft(i);return Sk.builtin.none.none$},$flags:{OneArg:!0},$textsig:null,$doc:"Extend the left side of the deque with elements from the iterable"},index:{$meth(t,e,i){const s=this.$index(t,e,i);if(void 0!==s)return new Sk.builtin.int_(s);throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(t)+" is not in deque")},$flags:{MinArgs:1,MaxArgs:3},$textsig:null,$doc:"D.index(value, [start, [stop]]) -> integer -- return first index of value.\\nRaises ValueError if the value is not present."},insert:{$meth(t,e){t=Sk.misceval.asIndexOrThrow(t,"integer argument expected, got {tp$name}");const i=this.tail-this.head&this.mask;if(void 0!==this.maxlen&&i>=this.maxlen)throw new Sk.builtin.IndexError("deque already at its maximum size");t>i&&(t=i),t<=-i&&(t=0);const s=(t>=0?this.head:this.tail)+t&this.mask;let n=this.tail;for(this.tail=this.tail+1&this.mask;n!==s;){const t=n-1&this.mask;this.v[n]=this.v[t],n=t}return this.v[s]=e,this.head===this.tail&&this.$resize(this.v.length,this.v.length<<1),Sk.builtin.none.none$},$flags:{MinArgs:2,MaxArgs:2},$textsig:null,$doc:"D.insert(index, object) -- insert object before index"},pop:{$meth(){return this.$pop()},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove and return the rightmost element."},popleft:{$meth(){return this.$popLeft()},$flags:{NoArgs:!0},$textsig:null,$doc:"Remove and return the leftmost element."},remove:{$meth(t){const e=this.$index(t);if(void 0===e)throw new Sk.builtin.ValueError(Sk.misceval.objectRepr(t)+" is not in deque");let i=this.head+e&this.mask;for(;i!==this.tail;){const t=i+1&this.mask;this.v[i]=this.v[t],i=t}this.tail=this.tail-1&this.mask;var s=this.tail-this.head&this.mask;s<this.mask>>>1&&this.$resize(s,this.v.length>>>1)},$flags:{OneArg:!0},$textsig:null,$doc:"D.remove(value) -- remove first occurrence of value."},__reversed__:{$meth(){return new i(this)},$flags:{NoArgs:!0},$textsig:null,$doc:"D.__reversed__() -- return a reverse iterator over the deque"},reverse:{$meth(){const t=this.head,e=this.tail,i=this.mask,s=this.tail-this.head&this.mask;for(let n=0;n<~~(s/2);n++){const s=e-n-1&i,r=t+n&i,a=this.v[s];this.v[s]=this.v[r],this.v[r]=a}return Sk.builtin.none.none$},$flags:{NoArgs:!0},$textsig:null,$doc:"D.reverse() -- reverse *IN PLACE*"},rotate:{$meth(t){t=void 0===t?1:Sk.misceval.asIndexSized(t,Sk.builtin.OverflowError);const e=this.head,i=this.tail;if(0===t||e===i)return this;if(this.head=e-t&this.mask,this.tail=i-t&this.mask,t>0)for(let s=1;s<=t;s++){const t=e-s&this.mask,n=i-s&this.mask;this.v[t]=this.v[n],this.v[n]=void 0}else for(let s=0;s>t;s--){const t=i-s&this.mask,n=e-s&this.mask;this.v[t]=this.v[n],this.v[n]=void 0}return Sk.builtin.none.none$},$flags:{MinArgs:0,MaxArgs:1},$textsig:null,$doc:"Rotate the deque n steps to the right (default n=1).  If n is negative, rotates left."}},classmethods:Sk.generic.classGetItem,getsets:{maxlen:{$get(){return void 0===this.maxlen?Sk.builtin.none.none$:new Sk.builtin.int_(this.maxlen)},$doc:"maximum size of a deque or None if unbounded"}},proto:{$clear(){this.head=0,this.tail=0,this.mask=1,this.v=new Array(2)},$copy(){return new t.deque(this.v.slice(0),this.maxlen,this.head,this.tail,this.mask)},$extend(t){for(let e=Sk.abstr.iter(t),i=e.tp$iternext();void 0!==i;i=e.tp$iternext())this.$push(i)},set$item(t,e){const i=(t>=0?this.head:this.tail)+t&this.mask;this.v[i]=e},del$item(t){let e=(t>=0?this.head:this.tail)+t&this.mask;for(;e!==this.tail;){const t=e+1&this.mask;this.v[e]=this.v[t],e=t}const i=this.tail-this.head&this.mask;this.tail=this.tail-1&this.mask,i<this.mask>>>1&&this.$resize(i,this.v.length>>>1)},$push(t){this.v[this.tail]=t,this.tail=this.tail+1&this.mask,this.head===this.tail&&this.$resize(this.v.length,this.v.length<<1);const e=this.tail-this.head&this.mask;return void 0!==this.maxlen&&e>this.maxlen&&this.$popLeft(),this},$pushLeft(t){this.head=this.head-1&this.mask,this.v[this.head]=t,this.head===this.tail&&this.$resize(this.v.length,this.v.length<<1);const e=this.tail-this.head&this.mask;return void 0!==this.maxlen&&e>this.maxlen&&this.$pop(),this},$pop(){if(this.head===this.tail)throw new Sk.builtin.IndexError("pop from an empty deque");this.tail=this.tail-1&this.mask;const t=this.v[this.tail];this.v[this.tail]=void 0;const e=this.tail-this.head&this.mask;return e<this.mask>>>1&&this.$resize(e,this.v.length>>>1),t},$popLeft(){if(this.head===this.tail)throw new Sk.builtin.IndexError("pop from an empty deque");const t=this.v[this.head];this.v[this.head]=void 0,this.head=this.head+1&this.mask;const e=this.tail-this.head&this.mask;return e<this.mask>>>1&&this.$resize(e,this.v.length>>>1),t},$resize(t,e){const i=this.head,s=this.mask;if(this.head=0,this.tail=t,this.mask=e-1,0===i)return void(this.v.length=e);const n=new Array(e);for(let r=0;r<t;r++)n[r]=this.v[i+r&s];this.v=n},$index(t,e,i){const s=this.tail-this.head&this.mask;e=void 0===e?0:Sk.misceval.asIndexOrThrow(e),i=void 0===i?s:Sk.misceval.asIndexOrThrow(i);const n=this.head,r=this.mask,a=this.v;i=i>=0?i:i<-s?0:s+i;for(let o=e>=0?e:e<-s?0:s+e;o<i;o++)if(a[n+o&r]===t)return o},sk$asarray(){const t=[],e=this.tail-this.head&this.mask;for(let i=0;i<e;++i){const e=this.head+i&this.mask;t.push(this.v[e])}return t}}});const e=Sk.abstr.buildIteratorClass("_collections._deque_iterator",{constructor:function _deque_iterator(t){this.$index=0,this.dq=t.v,this.$length=t.tail-t.head&t.mask,this.$head=t.head,this.$tail=t.tail,this.$mask=t.mask},iternext(){if(this.$index>=this.$length)return;const t=(this.$index>=0?this.$head:this.$tail)+this.$index&this.$mask;return this.$index++,this.dq[t]},methods:{__length_hint__:{$meth:function __length_hint__(){return new Sk.builtin.int_(this.$length-this.$index)},$flags:{NoArgs:!0}}}}),i=Sk.abstr.buildIteratorClass("_collections._deque_reverse_iterator",{constructor:function _deque_reverse_iterator(t){this.$index=(t.tail-t.head&t.mask)-1,this.dq=t.v,this.$head=t.head,this.$mask=t.mask},iternext(){if(this.$index<0)return;const t=this.$head+this.$index&this.$mask;return this.$index--,this.dq[t]},methods:{__length_hint__:Sk.generic.iterReverseLengthHintMethodDef}}),s=new RegExp(/^[0-9].*/),n=new RegExp(/^[0-9_].*/),r=new RegExp(/^\\w*$/),a=/,/g,o=/\\s+/;function namedtuple(e,i,l,h,c){if(e=e.tp$str(),Sk.misceval.isTrue(Sk.misceval.callsimArray(t._iskeyword,[e])))throw new Sk.builtin.ValueError("Type names and field names cannot be a keyword: '"+Sk.misceval.objectRepr(e)+"'");const u=e.$jsstr();if(s.test(u)||!r.test(u)||!u)throw new Sk.builtin.ValueError("Type names and field names must be valid identifiers: '"+u+"'");let m,d;if(Sk.builtin.checkString(i))m=i.$jsstr().replace(a," ").split(o),1==m.length&&""===m[0]&&(m=[]),d=m.map((t=>new Sk.builtin.str(t)));else{m=[],d=[];for(let t=Sk.abstr.iter(i),e=t.tp$iternext();void 0!==e;e=t.tp$iternext())e=e.tp$str(),d.push(e),m.push(e.$jsstr())}let p=new Set;if(Sk.misceval.isTrue(l))for(let s=0;s<m.length;s++)(Sk.misceval.isTrue(Sk.misceval.callsimArray(t._iskeyword,[d[s]]))||n.test(m[s])||!r.test(m[s])||!m[s]||p.has(m[s]))&&(m[s]="_"+s,d[s]=new Sk.builtin.str("_"+s)),p.add(m[s]);else for(let s=0;s<m.length;s++){if(Sk.misceval.isTrue(Sk.misceval.callsimArray(t._iskeyword,[d[s]])))throw new Sk.builtin.ValueError("Type names and field names cannot be a keyword: '"+m[s]+"'");if(n.test(m[s]))throw new Sk.builtin.ValueError("Field names cannot start with an underscore: '"+m[s]+"'");if(!r.test(m[s])||!m[s])throw new Sk.builtin.ValueError("Type names and field names must be valid identifiers: '"+m[s]+"'");if(p.has(m[s]))throw new Sk.builtin.ValueError("Encountered duplicate field name: '"+m[s]+"'");p.add(m[s])}const $=new Sk.builtin.tuple(d),k=[];let b=[];if(!Sk.builtin.checkNone(h)){if(b=Sk.misceval.arrayFromIterable(h),b.length>m.length)throw new Sk.builtin.TypeError("Got more default values than field names");for(let t=0,e=d.length-b.length;e<d.length;t++,e++)k.push(d[e]),k.push(b[t])}const f=new Sk.builtin.dict(k);function _make(t,e){return t.prototype.tp$new(Sk.misceval.arrayFromIterable(e))}function _asdict(t){const e=[];for(let i=0;i<t._fields.v.length;i++)e.push(t._fields.v[i]),e.push(t.v[i]);return new Sk.builtin.dict(e)}function _replace(t,e){const i=(t=new Sk.builtin.dict(t)).tp$getattr(new Sk.builtin.str("pop")),s=Sk.abstr.gattr(e,new Sk.builtin.str("_make")),n=Sk.misceval.callsimArray,r=n(s,[n(Sk.builtin.map_,[i,$,e])]);if(t.sq$length()){const e=t.sk$asarray();throw new Sk.builtin.ValueError("Got unexpectd field names: ["+e.map((t=>"'"+t.$jsstr()+"'"))+"]")}return r}_make.co_varnames=["_cls","iterable"],_asdict.co_varnames=["self"],_replace.co_kwargs=1,_replace.co_varnames=["_self"];const S={};for(let s=0;s<m.length;s++)S[d[s].$mangled]=new Sk.builtin.property(new t._itemgetter([new Sk.builtin.int_(s)]),void 0,void 0,new Sk.builtin.str("Alias for field number "+s));return Sk.abstr.buildNativeClass(u,{constructor:function NamedTuple(){},base:Sk.builtin.tuple,slots:{tp$doc:u+"("+m.join(", ")+")",tp$new(t,e){t=Sk.abstr.copyKeywordsToNamedArgs("__new__",m,t,e,b);const i=new this.constructor;return Sk.builtin.tuple.call(i,t),i},$r(){const t=this.v.map(((t,e)=>m[e]+"="+Sk.misceval.objectRepr(t)));return new Sk.builtin.str(Sk.abstr.typeName(this)+"("+t.join(", ")+")")}},proto:Object.assign({__module__:Sk.builtin.checkNone(c)?Sk.globals.__name__:c,__slots__:new Sk.builtin.tuple,_fields:$,_field_defaults:f,_make:new Sk.builtin.classmethod(new Sk.builtin.func(_make)),_asdict:new Sk.builtin.func(_asdict),_replace:new Sk.builtin.func(_replace)},S)})}return namedtuple.co_argcount=2,namedtuple.co_kwonlyargcount=3,namedtuple.$kwdefs=[Sk.builtin.bool.false$,Sk.builtin.none.none$,Sk.builtin.none.none$],namedtuple.co_varnames=["typename","field_names","rename","defaults","module"],t.namedtuple=new Sk.builtin.func(namedtuple),t}`,"src/lib/datetime.js":'function $builtinmodule(){const{isTrue:t,richCompareBool:e,asIndexOrThrow:n,asIndexSized:i,objectRepr:s,opAllowsEquality:o,callsimArray:r,callsimOrSuspendArray:a}=Sk.misceval,{numberBinOp:$,typeName:c,buildNativeClass:h,checkArgsLen:m,objectHash:u,copyKeywordsToNamedArgs:l}=Sk.abstr,{int_:f,float_:d,str:w,bytes:_,tuple:p,bool:{true$:g},none:{none$:y},NotImplemented:{NotImplemented$:b},TypeError:z,ValueError:v,OverflowError:M,ZeroDivisionError:A,NotImplementedError:x,checkNumber:N,checkFloat:S,checkString:k,checkInt:O,asnum$:I,round:E,getattr:T}=Sk.builtin,{remapToPy:D,remapToJs:R}=Sk.ffi,intRound=t=>E(t).nb$int(),q=$,C=new w("auto"),U=new w("utcoffset"),Y=new w("tzname"),j=new w("as_integer_ratio"),F=new w("dst"),H=new w("isoformat"),J=new w("replace"),B=new w("fromtimestamp"),G=new w("fromordinal"),L=new w("utcfromtimestamp"),X=new w("strftime"),P=new w("fromutc"),W=new f(0),Z=new d(0),K=new f(7),V=new f(60),Q=new f(3600),tt=new f(1e3),et=new f(1e6),nt=new d(1e6),it=new f(86400),st=new d(86400);let ot=null;function pyDivMod(t,e){return q(t,e,"DivMod").v}function $divMod(t,e){if("number"!=typeof t||"number"!=typeof e)return t=JSBI.BigInt(t),e=JSBI.BigInt(e),[JSBI.toNumber(JSBI.divide(t,e)),JSBI.toNumber(JSBI.remainder(t,e))];if(0===e)throw new A("integer division or modulo by zero");return[Math.floor(t/e),t-Math.floor(t/e)*e]}function modf(t){const e=(t=I(t))<0?-1:1;return t=Math.abs(t),[new d(e*(t-Math.floor(t))),new d(e*Math.floor(t))]}function _d(t,e="0",n=2){return t.toString().padStart(n,e)}const rt=/^[0-9]+$/;function _as_integer(t){if(!rt.test(t))throw new Error;return parseInt(t)}function _as_int_ratio(t){let e=r(t.tp$getattr(j));if(!(e instanceof p))throw new z("unexpected return type from as_integer_ratio(): expected tuple, got \'"+c(e)+"\'");if(e=e.v,2!==e.length)throw new v("as_integer_ratio() must return a 2-tuple");return e}return Sk.misceval.chain(Sk.importModule("time",!1,!0),(a=>{const $=a.$d,E={__name__:new w("datetime"),__all__:new Sk.builtin.list(["date","datetime","time","timedelta","timezone","tzinfo","MINYEAR","MAXYEAR"].map((t=>new w(t))))};function _cmp(t,e){for(let n=0;n<t.length;n++)if(t[n]!==e[n])return t[n]>e[n]?1:-1;return 0}function _do_compare(t,e,n){const i=t.$cmp(e,n);switch(n){case"Lt":return i<0;case"LtE":return i<=0;case"Eq":return 0===i;case"NotEq":return 0!==i;case"Gt":return i>0;case"GtE":return i>=0}}const j=9999;E.MINYEAR=new f(1),E.MAXYEAR=new f(j);const rt=3652059,at=[-1,31,28,31,30,31,30,31,31,30,31,30,31],$t=[-1];let ct=0;function _is_leap(t){return t%4==0&&(t%100!=0||t%400==0)}function _days_before_year(t){const e=t-1;return 365*e+Math.floor(e/4)-Math.floor(e/100)+Math.floor(e/400)}function _days_before_month(t,e){return $t[e]+(e>2&&_is_leap(t))}function _ymd2ord(t,e,n){return _days_before_year(t)+_days_before_month(t,e)+n}at.slice(1).forEach((t=>{$t.push(ct),ct+=t}));const ht=_days_before_year(401),mt=_days_before_year(101),ut=_days_before_year(5);function _ord2ymd(t){if((t=n(t))>Number.MAX_SAFE_INTEGER)throw new M("Python int too large to convert to js number");if(t<1)throw new v("ordinal must be >= 1");let e,i,s,o;t-=1,[e,t]=$divMod(t,ht);let r=400*e+1;if([i,t]=$divMod(t,mt),[s,t]=$divMod(t,ut),[o,t]=$divMod(t,365),r+=100*i+4*s+o,4===o||4===i)return[r-1,12,31].map((t=>new f(t)));const a=3===o&&(24!==s||3===i);let $=t+50>>5,c=$t[$]+($>2&&a);return c>t&&($-=1,c-=at[$]+(2===$&&a)),[r,$,(t-=c)+1].map((t=>new f(t)))}const lt=[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ft=[null,"Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function _build_struct_time(t,e,n,i,s,o,r){const a=(_ymd2ord(t,e,n)+6)%7,c=_days_before_month(t,e)+n;return $.struct_time.tp$call([new p([t,e,n,i,s,o,a,c,r].map((t=>new f(t))))])}const dt={hours:t=>_d(t),minutes:(t,e)=>_d(t)+":"+_d(e),seconds:(t,e,n)=>_d(t)+":"+_d(e)+":"+_d(n),milliseconds:(t,e,n,i)=>_d(t)+":"+_d(e)+":"+_d(n)+"."+_d(i,"0",3),microseconds:(t,e,n,i)=>_d(t)+":"+_d(e)+":"+_d(n)+"."+_d(i,"0",6)};function _format_time(t,e,n,i,s="auto"){if("string"!=typeof s&&!k(s))throw new z("must be str, not "+c(s));"auto"===(s=s.toString())?s=i?"microseconds":"seconds":"milliseconds"===s&&(i=Math.floor(i/1e3));let o=dt[s];if(void 0===o)throw new v("Unknown timespec value");return o(t,e,n,i)}function _format_offset(t){let e,n="";if(t!==y){let i,s,o;return t.$days<0?(e="-",t=new wt(-t.$days,-t.$secs,-t.$micro)):e="+",[i,s]=pyDivMod(t,pt),[s,o]=pyDivMod(s,gt),n+=e+`${_d(i)}:${_d(s)}`,(o.$secs||o.$micro)&&(n+=":"+_d(o.$secs,"0",2),o.$micro&&(n+="."+_d(o.$micro,"0",6))),n}}function _wrap_strftime(t,e,n){let i=null,s=null,o=null,a=[],c=0;const h=e.length;for(;c<h;){let n=e[c];if(c+=1,"%"===n)if(c<h)if(n=e[c],c+=1,"f"===n)null===i&&(i=_d(t.$micro||0,"0",6)),a.push(i);else if("z"===n){if(null===s){s="";const e=t.tp$getattr(U);if(void 0!==e){let t=r(e);if(t!==y){let e,n,i,o="+";t.$days<0&&(t=new wt(-t.$days,-t.$secs,-t.$micro),o="-"),[e,i]=pyDivMod(t,pt),[n,i]=pyDivMod(i,gt),e=e,n=n;const r=i.$secs,a=t.$micro;s=a?o+_d(e)+_d(n)+_d(r)+"."+_d(a,"0",6):r?o+_d(e)+_d(n)+_d(r):o+_d(e)+_d(n)}}}a.push(s)}else if("Z"===n){if(null===o){o="";const e=t.tp$getattr(Y);if(void 0!==e){let t=r(e);if(t!==y){const e=t.tp$getattr(J);if(o=r(e,[new w("%"),new w("%%")]),!k(o))throw new z("tzname.replace() did not return a string")}}}a.push(o)}else a.push("%",n);else a.push("%");else a.push(n)}return a=a.join(""),$.strftime.tp$call([new w(a),n])}function _parse_isoformat_date(t){const e=_as_integer(t.slice(0,4));if("-"!==t[4])throw new v("Invalid date separator: "+t[4]);const n=_as_integer(t.slice(5,7));if("-"!==t[7])throw new v("Invalid date separator: "+t[7]);return[e,n,_as_integer(t.slice(8,10))].map((t=>new f(t)))}function _parse_hh_mm_ss_ff(t){const e=t.length,n=[0,0,0,0];let i=0;for(let s=0;s<3;s++){if(e-i<2)throw new v("Incomplete time component");n[s]=_as_integer(t.slice(i,i+2)),i+=2;const o=t.substr(i,1);if(!o||s>=2)break;if(":"!==o)throw new v("Invalid time separator: "+o);i+=1}if(i<e){if("."!==t[i])throw new v("Invalid microsecond component");{i+=1;const s=e-i;if(3!==s&&6!==s)throw new v("Invalid microsecond component");n[3]=_as_integer(t.slice(i)),3===s&&(n[3]*=1e3)}}return n}function _parse_isoformat_time(t){if(t.length<2)throw new v("Isoformat time too short");const e=t.indexOf("-")+1||t.indexOf("+")+1;let n,i=_parse_hh_mm_ss_ff(e>0?t.slice(0,e-1):t),s=y;if(e>0){if(n=t.slice(e),![5,8,15].includes(n.length))throw new v("Malformed time zone string");const i=_parse_hh_mm_ss_ff(n);if(i.every((t=>0===t)))s=St.prototype.utc;else{const n="-"===t[e-1]?-1:1,o=new wt(0,n*(3600*i[0]+60*i[1]+i[2]),n*i[3]);s=new St(o)}}return i=i.map((t=>new f(t))),i.push(s),i}function _check_tzname(t){if(t!==y&&!k(t))throw new z("tzinfo.tzname() must return None or string, not \'"+c(t)+"\'")}function _check_utc_offset(t,n){if(n!==y){if(!(n instanceof wt))throw new z(`tzinfo.${t}() must return None or timedelta, not \'${c(n)}\'`);if(!e(zt,n,"Lt")||!e(n,_t,"Lt"))throw new v(`${t}()=${n.toString()}, must be strictly between -timedelta(hours=24) and timedelta(hours=24)`)}}function _check_date_fields(t,e=null,i=null){if(null===e||null===i){throw new z(`function missing required argument \'${null===i?"day":"month"}\' (pos ${null===i?"3":"2"})`)}if(t=n(t),e=n(e),i=n(i),!(1<=t&&t<=j))throw new v("year must be in 1..9999",new f(t));if(!(1<=e&&e<=12))throw new v("month must be in 1..12",new f(e));const s=function _days_in_month(t,e){return 2===e&&_is_leap(t)?29:at[e]}(t,e);if(!(1<=i&&i<=s))throw new v("day must be in 1.."+s,new f(i));return[t,e,i]}function _check_time_fields(t,e,i,s,o){if(t=n(t),e=n(e),i=n(i),s=n(s),o=n(o),!(0<=t&&t<=23))throw new v("hour must be in 0..23",new f(t));if(!(0<=e&&e<=59))throw new v("minute must be in 0..59",new f(e));if(!(0<=i&&i<=59))throw new v("second must be in 0..59",new f(i));if(!(0<=s&&s<=999999))throw new v("microsecond must be in 0..999999",new f(s));if(0!==o&&1!==o)throw new v("fold must be either 0 or 1",new f(o));return[t,e,i,s,o]}function _check_tzinfo_arg(t){if(t!==y&&!(t instanceof Mt))throw new z("tzinfo argument must be None or of a tzinfo subclass")}function _divide_and_round(t,e){let[n,i]=$divMod(t,e);return i*=2,((e>0?i>e:i<e)||i===e&&Math.abs(n)%2==1)&&(n+=1),n}const wt=E.timedelta=h("datetime.timedelta",{constructor:function timedelta(t=0,e=0,n=0){let i,s;if([i,n]=$divMod(n,1e6),e+=i,[s,e]=$divMod(e,86400),t+=s,this.$days=t,this.$secs=e,this.$micro=n,this.$hashcode=-1,Math.abs(t)>999999999)throw new M(`days=${t}; must have magnitude <= 999999999`)},slots:{tp$new(t,e){let i,s,o,r,a,$,c,[h,m,u,d,w,_,p]=l("timedelta",["days","seconds","microseconds","milliseconds","minutes","hours","weeks"],t,e,new Array(7).fill(W));i=s=o=W,h=q(h,q(p,K,"Mult"),"Add"),m=q(m,q(q(w,V,"Mult"),q(_,Q,"Mult"),"Add"),"Add"),u=q(u,q(d,tt,"Mult"),"Add"),S(h)?([r,h]=modf(h),[a,$]=modf(q(r,st,"Mult")),s=new f($),i=new f(h)):(a=Z,i=h),S(m)?([c,m]=modf(m),m=new f(m),c=q(c,a,"Add")):c=a,[h,m]=pyDivMod(m,it),i=q(i,h,"Add"),s=q(s,new f(m),"Add");const g=q(c,nt,"Mult");if(S(u)?(u=intRound(q(u,g,"Add")),[m,u]=pyDivMod(u,et),[h,m]=pyDivMod(m,it),i=q(i,h,"Add"),s=q(s,m,"Add")):(u=new f(u),[m,u]=pyDivMod(u,et),[h,m]=pyDivMod(m,it),i=q(i,h,"Add"),s=q(s,m,"Add"),u=intRound(q(u,g,"Add"))),[m,o]=pyDivMod(u,et),s=q(s,m,"Add"),[h,s]=pyDivMod(s,it),i=q(i,h,"Add"),i=n(i),s=n(s),o=n(o),Math.abs(i)>999999999)throw new M("timedelta # of days is too large: "+h.toString());if(this===wt.prototype)return new wt(i,s,o);{const t=new this.constructor;return wt.call(t,i,s,o),t}},$r(){const t=[];return this.$days&&t.push(`days=${this.$days}`),this.$secs&&t.push(`seconds=${this.$secs}`),this.$micro&&t.push(`microseconds=${this.$micro}`),t.length||t.push("0"),new w(`${this.tp$name}(${t.join(", ")})`)},tp$str(){const t=this.$secs%60;let e=Math.floor(this.$secs/60);const n=Math.floor(e/60);e%=60;let i=`${n}:${_d(e)}:${_d(t)}`;if(this.$days){i=`${this.$days} day${function plural(t){return 1!==Math.abs(t)?"s":""}(this.$days)}, `+i}return this.$micro&&(i+=`.${_d(this.$micro,"0",6)}`),new w(i)},tp$as_number:!0,nb$add(t){return t instanceof wt?new wt(this.$days+t.$days,this.$secs+t.$secs,this.$micro+t.$micro):b},nb$subtract(t){return t instanceof wt?new wt(this.$days-t.$days,this.$secs-t.$secs,this.$micro-t.$micro):b},nb$positive(){return this},nb$negative(){return new wt(-this.$days,-this.$secs,-this.$micro)},nb$abs(){return this.$days<0?this.nb$negative():this},nb$multiply(t){if(O(t))return t=i(t,M),new wt(this.$days*t,this.$secs*t,this.$micro*t);if(S(t)){const e=this.$toMicrosecs();let[s,o]=_as_int_ratio(t);return s=i(s,M),o=n(o),new wt(0,0,_divide_and_round(e*s,o))}return b},nb$floor_divide(t){const e=this.$toMicrosecs();if(t instanceof wt){const n=t.$toMicrosecs();if(0===n)throw new A("integer division or modulo by zero");return new f(Math.floor(e/n))}if(O(t)){if(0===(t=i(t,M)))throw new A("integer division or modulo by zero");return new wt(0,0,Math.floor(e/t))}return b},nb$divide(t){const e=this.$toMicrosecs();if(t instanceof wt){if(0===t.$toMicrosecs())throw new A("integer division or modulo by zero");return new d(e/t.$toMicrosecs())}if(O(t))return t=n(t),new wt(0,0,_divide_and_round(e,t));if(S(t)){let[s,o]=_as_int_ratio(t);return s=n(s),o=i(o,M),new wt(0,0,_divide_and_round(o*e,s))}return b},nb$remainder(t){if(!(t instanceof wt))return b;const e=this.$toMicrosecs(),n=t.$toMicrosecs();if(0===n)throw new A("integer division or modulo by zero");const i=e-Math.floor(e/n)*n;return new wt(0,0,i)},nb$divmod(t){if(!(t instanceof wt))return b;const e=this.$toMicrosecs(),n=t.$toMicrosecs(),[i,s]=$divMod(e,n);return new p([new f(i),new wt(0,0,s)])},tp$richcompare(t,e){return t instanceof wt?_do_compare(this,t,e):b},tp$hash(){return-1===this.$hashcode&&(this.$hashcode=u(new p(this.$getState().map((t=>new f(t)))))),this.$hashcode},nb$bool(){return 0!==this.$days||0!==this.$secs||0!==this.$micro}},methods:{total_seconds:{$meth(){return new d(((86400*this.$days+this.$secs)*10**6+this.$micro)/10**6)},$flags:{NoArgs:!0},$doc:"Total seconds in the duration."},__reduce__:{$meth(){return new p([this.ob$type,new p(this.$getState().map((t=>D(t))))])},$flags:{NoArgs:!0},$textsig:null,$doc:"__reduce__() -> (cls, state)"}},getsets:{days:{$get(){return new f(this.$days)},$doc:"Number of days."},seconds:{$get(){return new f(this.$secs)},$doc:"Number of seconds (>= 0 and less than 1 day)."},microseconds:{$get(){return new f(this.$micro)},$doc:"Number of microseconds (>= 0 and less than 1 second)."}},proto:{$toMicrosecs(){return 1e6*(86400*this.$days+this.$secs)+this.$micro},$cmp(t){return _cmp(this.$getState(),t.$getState())},$getState(){return[this.$days,this.$secs,this.$micro]}}});wt.prototype.min=new wt(-999999999),wt.prototype.max=new wt(999999999,86399,999999),wt.prototype.resolution=new wt(0,0,1);const _t=new wt(1),pt=new wt(0,3600),gt=new wt(0,60),yt=new wt(0,1),bt=new wt(0),zt=new wt(-1),vt=E.date=h("datetime.date",{constructor:function date(t,e,n){this.$year=t,this.$month=e,this.$day=n,this.$hashcode=-1},slots:{tp$new(t,e){let n,[i,s,o]=l("date",["year","month","day"],t,e,[null,null]);if(null===s&&i instanceof _&&4===(n=i.valueOf()).length&&1<=n[2]&&n[2]<=12){const t=new this.constructor;return t.$setState(n),t}if([i,s,o]=_check_date_fields(i,s,o),this===vt.prototype)return new vt(i,s,o);{const t=new this.constructor;return vt.call(t,i,s,o),t}},$r(){return new w(`${this.tp$name}(${this.$year}, ${this.$month}, ${this.$day})`)},tp$str(){return this.tp$getattr(H).tp$call([])},tp$richcompare(t,e){return t instanceof vt?_do_compare(this,t,e):b},tp$hash(){return-1===this.$hashcode&&(this.$hashcode=u(this.$getState())),this.$hashcode},tp$as_number:!0,nb$add(t){if(t instanceof wt){const e=this.$toOrdinal()+t.$days;if(0<e&&e<=rt)return this.ob$type.tp$getattr(G).tp$call([new f(e)]);throw new M("result out of range")}return b},nb$subtract(t){if(t instanceof wt)return q(this,new wt(-t.$days),"Add");if(t instanceof vt){const e=this.$toOrdinal(),n=t.$toOrdinal();return new wt(e-n)}return b},nb$reflected_subtract:null},classmethods:{fromtimestamp:{$meth:function fromtimestamp(t){const[e,n,i]=$.localtime.tp$call([t]).v;return this.tp$call([e,n,i])},$flags:{OneArg:!0},$textsig:null,$doc:"timestamp -> local date from a POSIX timestamp (like time.time())."},fromordinal:{$meth:function fromordinal(t){return this.tp$call(_ord2ymd(t))},$flags:{OneArg:!0},$textsig:null,$doc:"int -> date corresponding to a proleptic Gregorian ordinal."},fromisocalendar:{$meth:function fromisocalendar(t,e,i){if(t=n(t),e=n(e),i=n(i),!(1<=t&&t<=j))throw new v(`Year is out of range: ${t}`);let s,o;if(!(0<e&&e<53)&&(s=!0,53===e&&(o=_ymd2ord(t,1,1)%7,(4===o||3===o&&_is_leap(t))&&(s=!1)),s))throw new v(`Invalid week: ${e}`);if(!(0<i&&i<8))throw new v(`Invalid weekday: ${i} (range is [1, 7])`);const r=7*(e-1)+(i-1),a=_isoweek1monday(t)+r;return this.tp$call(_ord2ymd(a))},$flags:{NamedArgs:["year","week","day"]},$textsig:null,$doc:"int -> date corresponding to a proleptic Gregorian ordinal."},fromisoformat:{$meth:function fromisoformat(t){if(!k(t))throw new z("fromisoformat: argument must be str");t=t.toString();try{if(10!==t.length)throw new Error;return this.tp$call(_parse_isoformat_date(t))}catch(e){throw new v("Invalid isoformat string: \'"+t+"\'")}},$flags:{OneArg:!0},$textsig:null,$doc:"str -> Construct a date from the output of date.isoformat()"},today:{$meth:function today(){const t=$.time.tp$call([]);return this.tp$getattr(B).tp$call([t])},$flags:{NoArgs:!0},$textsig:null,$doc:"Current date or datetime:  same as self.__class__.fromtimestamp(time.time())."}},methods:{ctime:{$meth:function ctime(){const t=this.$toOrdinal()%7||7,e=ft[t],n=lt[this.$month];return new w(`${e} ${n} ${_d(this.$day," ",2)} 00:00:00 ${_d(this.$year,"0",4)}`)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return ctime() style string."},strftime:{$meth:function strftime(t){if(!k(t))throw new z("must be str, not "+c(t));return _wrap_strftime(this,t=t.toString(),this.$timetuple())},$flags:{OneArg:!0},$textsig:null,$doc:"format -> strftime() style string."},__format__:{$meth:function __format__(t){if(!k(t))throw new z("must be str, not "+c(t));return t!==w.$empty?this.tp$getattr(X).tp$call([t]):this.tp$str()},$flags:{OneArg:!0},$textsig:null,$doc:"Formats self with strftime."},timetuple:{$meth:function timetuple(){return this.$timetuple()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return time tuple, compatible with time.localtime()."},isocalendar:{$meth:function isocalendar(){let t=this.$year,e=_isoweek1monday(t);const n=_ymd2ord(this.$year,this.$month,this.$day);let[i,s]=$divMod(n-e,7);return i<0?(t-=1,e=_isoweek1monday(t),[i,s]=$divMod(n-e,7)):i>=52&&n>=_isoweek1monday(t+1)&&(t+=1,i=0),new At(new f(t),new f(i+1),new f(s+1))},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a 3-tuple containing ISO year, week number, and weekday."},isoformat:{$meth:function isoformat(){return this.$isoformat()},$flags:{NoArgs:!0},$textsig:null,$doc:"Return string in ISO 8601 format, YYYY-MM-DD."},isoweekday:{$meth:function isoweekday(){return new f(this.$toOrdinal()%7||7)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return the day of the week represented by the date.\\nMonday == 1 ... Sunday == 7"},toordinal:{$meth:function toordinal(){return new f(this.$toOrdinal())},$flags:{NoArgs:!0},$textsig:null,$doc:"Return proleptic Gregorian ordinal.  January 1 of year 1 is day 1."},weekday:{$meth:function weekday(){return new f((this.$toOrdinal()+6)%7)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return the day of the week represented by the date.\\nMonday == 0 ... Sunday == 6"},replace:{$meth:function replace(t,e,n){return t===y&&(t=new f(this.$year)),e===y&&(e=new f(this.$month)),n===y&&(n=new f(this.$day)),this.ob$type.tp$call([t,e,n])},$flags:{NamedArgs:["year","month","day"],Defaults:[y,y,y]},$textsig:null,$doc:"Return date with new specified fields."},__reduce__:{$meth(){return new p([this.ob$type,new p([this.$getState()])])},$flags:{NoArgs:!0},$textsig:null,$doc:"__reduce__() -> (cls, state)"}},getsets:{year:{$get(){return new f(this.$year)},$doc:"year (1-9999)"},month:{$get(){return new f(this.$month)},$doc:"month (1-12)"},day:{$get(){return new f(this.$day)},$doc:"day (1-31)"}},proto:{$cmp(t){return _cmp([this.$year,this.$month,this.$day],[t.$year,t.$month,t.$day])},$getState(){const[t,e]=$divMod(this.$year,256);return new _([t,e,this.$month,this.$day])},$setState(t){const[e,n,i,s]=t,o=256*e+n;this.$year=o,this.$month=i,this.$day=s},$toOrdinal(){return _ymd2ord(this.$year,this.$month,this.$day)},$isoformat(){return new w(`${_d(this.$year,"0",4)}-${_d(this.$month,"0",2)}-${_d(this.$day,"0",2)}`)},$timetuple(){return _build_struct_time(this.$year,this.$month,this.$day,this.$hour||0,this.$min||0,this.$sec||0,-1)},$strftime(t=""){return _wrap_strftime(this,t.toString(),this.$timetuple())}}});vt.prototype.min=new vt(1,1,1),vt.prototype.max=new vt(9999,12,31),vt.prototype.resolution=new wt(1);const Mt=E.tzinfo=h("datetime.tzinfo",{constructor:function tzinfo(){},methods:{tzname:{$meth:function tzname(t){throw new x("tzinfo subclass must override tzname()")},$flags:{OneArg:!0},$textsig:null,$doc:"datetime -> string name of time zone."},utcoffset:{$meth:function utcoffset(t){throw new x("tzinfo subclass must override utcoffset()")},$flags:{OneArg:!0},$textsig:null,$doc:"datetime -> timedelta showing offset from UTC, negative values indicating West of UTC"},dst:{$meth:function dst(t){throw new x("tzinfo subclass must override dst()")},$flags:{OneArg:!0},$textsig:null,$doc:"datetime -> DST offset as timedelta positive east of UTC."},fromutc:{$meth:function fromutc(e){if(!(e instanceof Nt))throw new z("fromutc() requires a datetime argument");if(e.$tzinfo!==this)throw new v("dt.tzinfo is not self");const n=r(e.tp$getattr(U));if(n===y)throw new v("fromutc() requires a non-None utcoffset() result");let i=r(e.tp$getattr(F));if(i===y)throw new v("fromutc() requires a non-None dst() result");const s=q(n,i,"Sub");if(t(s)&&(e=q(e,s,"Add"),i=r(e.tp$getattr(F)),i===y))throw new v("fromutc(): dt.dst gave inconsistent results; cannot convert");return q(e,i,"Add")},$flags:{OneArg:!0},$textsig:null,$doc:"datetime in UTC -> datetime in local time."},__reduce__:{$meth(){let e,n;const i=T(this,new w("__getinitargs__"),y);e=i!==y?r(i,[]):new p;const s=T(this,new w("__getstate__"),y);return s!==y?n=r(s,[]):(n=T(this,new w("__dict__"),y),n=t(n)?n:y),new p(n===y?[this.ob$type,e]:[this.ob$type,e,n])},$flags:{NoArgs:!0},$textsig:null,$doc:"-> (cls, state)"}}}),At=h("datetime.IsoCalendarDate",{base:p,constructor:function IsoCalendarDate(t,e,n){this.y=t,this.w=e,this.wd=n,p.call(this,[t,e,n])},slots:{tp$new(t,e){const[n,i,s]=l("IsoCalendarDate",["year","week","weekday"],t,e);return new this.constructor(n,i,s)},$r(){return new w(`${this.tp$name}(year=${this.y}, week=${this.w}, weekday=${this.wd})`)}},getsets:{year:{$get(){return this.y}},week:{$get(){return this.w}},weekday:{$get(){return this.wd}}}}),xt=E.time=h("datetime.time",{constructor:function time(t=0,e=0,n=0,i=0,s=null,o=0){this.$hour=t,this.$min=e,this.$sec=n,this.$micro=i,this.$tzinfo=s||y,this.$fold=o,this.$hashcode=-1},slots:{tp$new(t,e){m("time",t,0,5);let n,[i,s,o,r,a,$]=l("time",["hour","minute","second","microsecond","tzinfo","fold"],t,e,[W,W,W,W,y,W]);if(i instanceof _&&6===(n=i.valueOf()).length&&(127&n[0])<24){const t=new this.constructor;return t.$setState(n,s===W?y:s),t}if([i,s,o,r,$]=_check_time_fields(i,s,o,r,$),_check_tzinfo_arg(a),this===xt.prototype)return new xt(i,s,o,r,a,$);{const t=new this.constructor;return xt.call(t,i,s,o,r,a,$),t}},tp$richcompare(t,e){return t instanceof xt?_do_compare(this,t,e):b},tp$hash(){if(-1===this.$hashcode){const e=this.$fold?r(this.tp$getattr(J),[],["fold",W]):this,n=r(e.tp$getattr(U));if(t(n)){let[t,e]=pyDivMod(new wt(0,3600*this.$hour+60*this.$min).nb$subtract(n),pt);e=e.nb$floor_divide(gt),0<=t&&t<=24?(t=I(t),e=I(e),this.$hashcode=u(new xt(t,e,this.$sec,this.$micro))):this.$hashcode=u(new p([t,e,new f(this.$sec),new f(this.$micro)]))}else this.$hashcode=u(e.$getState()[0])}return this.$hashcode},$r(){let t;return t=0!==this.$micro?`, ${this.$sec}, ${this.$micro}`:0!==this.$sec?`, ${this.$sec}`:"",t=`${this.tp$name}(${this.$hour}, ${this.$min}${t})`,this.$tzinfo!==y&&(t=t.slice(0,-1)+", tzinfo="+s(this.$tzinfo)+")"),this.$fold&&(t=t.slice(0,-1)+", fold=1)"),new w(t)},tp$str(){return this.tp$getattr(H).tp$call([])}},methods:{isoformat:{$meth:function isoformat(t){let e=_format_time(this.$hour,this.$min,this.$sec,this.$micro,t);const n=this.$tzstr();return n&&(e+=n),new w(e)},$flags:{NamedArgs:["timespec"],Defaults:[C]},$textsig:null,$doc:"Return string in ISO 8601 format, [HH[:MM[:SS[.mmm[uuu]]]]][+HH:MM].\\n\\ntimespec specifies what components of the time to include.\\n"},strftime:{$meth:function strftime(t){if(!k(t))throw new z("must be str, not "+c(t));return _wrap_strftime(this,t=t.toString(),new p([1900,1,1,this.$hour,this.$min,this.$sec,0,1,-1].map((t=>new f(t)))))},$flags:{OneArg:!0},$textsig:null,$doc:"format -> strftime() style string."},__format__:{$meth:function __format__(t){if(!k(t))throw new z("must be str, not "+c(t));return t!==w.$empty?this.tp$getattr(X).tp$call([t]):this.tp$str()},$flags:{OneArg:!0},$textsig:null,$doc:"Formats self with strftime."},utcoffset:{$meth:function utcoffset(){if(this.$tzinfo===y)return y;const t=this.$tzinfo.tp$getattr(U),e=r(t,[y]);return _check_utc_offset("utcoffset",e),e},$flags:{NoArgs:!0},$textsig:null,$doc:"Return self.tzinfo.utcoffset(self)."},tzname:{$meth:function tzname(){if(this.$tzinfo===y)return y;const t=this.$tzinfo.tp$getattr(Y),e=r(t,[y]);return _check_tzname(e),e},$flags:{NoArgs:!0},$textsig:null,$doc:"Return self.tzinfo.tzname(self)."},dst:{$meth:function dst(){if(this.$tzinfo===y)return y;const t=this.$tzinfo.tp$getattr(F),e=r(t,[y]);return _check_utc_offset("dst",e),e},$flags:{NoArgs:!0},$textsig:null,$doc:"Return self.tzinfo.dst(self)."},replace:{$meth:function replace(t,e){m("replace",t,0,5);let[n,i,s,o,r,a]=l("replace",["hour","minute","second","microsecond","tzinfo","fold"],t,e,[y,y,y,y,g,y]);return n===y&&(n=new f(this.$hour)),i===y&&(i=new f(this.$min)),s===y&&(s=new f(this.$sec)),o===y&&(o=new f(this.$micro)),r===g&&(r=this.$tzinfo),a===y&&(a=new f(this.$fold)),this.ob$type.tp$call([n,i,s,o,r],["fold",a])},$flags:{FastCall:!0},$textsig:null,$doc:"Return time with new specified fields."},__reduce_ex__:{$meth(t){return new p([this.ob$type,new p(this.$getState(R(t)))])},$flags:{OneArg:!0},$textsig:null,$doc:"__reduce_ex__(proto) -> (cls, state)"},__reduce__:{$meth(){return this.tp$getattr(new w("__reduce_ex__")).tp$call([new f(2)])},$flags:{NoArgs:!0},$textsig:null,$doc:"__reduce__() -> (cls, state)"}},classmethods:{fromisoformat:{$meth:function fromisoformat(t){if(!k(t))throw new z("fromisoformat: argument must be str");t=t.toString();try{return this.tp$call(_parse_isoformat_time(t))}catch{throw new v("Invalid isofrmat string: \'"+t+"\'")}},$flags:{OneArg:!0},$textsig:null,$doc:"string -> time from time.isoformat() output"}},getsets:{hour:{$get(){return new f(this.$hour)}},minute:{$get(){return new f(this.$min)}},second:{$get(){return new f(this.$sec)}},microsecond:{$get(){return new f(this.$micro)}},tzinfo:{$get(){return this.$tzinfo}},fold:{$get(){return new f(this.$fold)}}},proto:{$cmp(t,n){const s=this.$tzinfo,o=t.$tzinfo;let a,$,c;if(a=$=y,s===o?c=!0:(a=r(this.tp$getattr(U)),$=r(t.tp$getattr(U)),c=e(a,$,"Eq")),c)return _cmp([this.$hour,this.$min,this.$sec,this.$micro],[t.$hour,t.$min,t.$sec,t.$micro]);if(a===y||$===y){if("Eq"===n||"NotEq"===n)return 2;throw new z("cannot compare naive and aware times")}const h=60*this.$hour+this.$min-i(a.nb$floor_divide(gt)),m=60*t.$hour+t.$min-i($.nb$floor_divide(gt));return _cmp([h,this.$sec,this.$micro],[m,t.$sec,t.$micro])},$tzstr(){return _format_offset(r(this.tp$getattr(U)))},$getState(t=3){let[e,n]=$divMod(this.$micro,256),[i,s]=$divMod(e,256),o=this.$hour;this.$fold&&t>3&&(o+=128);const r=new _([o,this.$min,this.$sec,i,s,n]);return this.$tzinfo===y?[r]:[r,this.$tzinfo]},$setState(t,e){const[n,i,s,o,r,a]=t;n>127?(this.$fold=1,this.$hour=n-128):(this.$fold=0,this.$hour=n),this.$min=i,this.$sec=s,this.$micro=(o<<8|r)<<8|a,this.$tzinfo=e}}});xt.prototype.min=new xt(0,0,0),xt.prototype.max=new xt(23,59,59,999999),xt.prototype.resolution=new wt;const Nt=E.datetime=h("datetime.datetime",{base:vt,constructor:function datetime(t,e,n,i=0,s=0,o=0,r=0,a=null,$=0){this.$year=t,this.$month=e,this.$day=n,this.$hour=i,this.$min=s,this.$sec=o,this.$micro=r,this.$tzinfo=a||y,this.$fold=$,this.$hashcode=-1},slots:{tp$new(t,e){m("datetime",t,0,9);let n,[i,s,o,r,a,$,c,h,u]=l("time",["year","month","day","hour","minute","second","microsecond","tzinfo","fold"],t,e,[null,null,W,W,W,W,y,W]);if(i instanceof _&&10===(n=i.valueOf()).length&&(127&n[2])<=12){const t=new this.constructor;return t.$setState(n,null===s?y:s),t}if([i,s,o]=_check_date_fields(i,s,o),[r,a,$,c,u]=_check_time_fields(r,a,$,c,u),_check_tzinfo_arg(h),this===Nt.prototype)return new Nt(i,s,o,r,a,$,c,h,u);{const t=new this.constructor;return Nt.call(t,i,s,o,r,a,$,c,h,u),t}},$r(){const t=[this.$year,this.$month,this.$day,this.$hour,this.$min,this.$sec,this.$micro];0===t[t.length-1]&&t.pop(),0===t[t.length-1]&&t.pop();let e=`${this.tp$name}(${t.join(", ")})`;return this.$tzinfo!==y&&(e=e.slice(0,-1)+", tzinfo="+s(this.$tzinfo)+")"),this.$fold&&(e=e.slice(0,-1)+", fold=1)"),new w(e)},tp$str(){return this.tp$getattr(H).tp$call([],["sep",new w(" ")])},tp$richcompare(t,e){if(t instanceof Nt)return _do_compare(this,t,e);if(!(t instanceof vt))return b;if("Eq"===e||"NotEq"===e)return"NotEq"===e;throw new z(`can\'t compare \'${c(this)}\' to \'${c(t)}\'`)},tp$as_number:!0,nb$add(t){if(!(t instanceof wt))return b;let e=new wt(this.$toOrdinal(),3600*this.$hour+60*this.$min+this.$sec,this.$micro);e=q(e,t,"Add");let[n,i]=$divMod(e.$secs,3600),[s,o]=$divMod(i,60);if(0<e.$days&&e.$days<=rt)return this.ob$type.tp$getattr(new w("combine")).tp$call([vt.tp$call(_ord2ymd(e.$days)),new xt(n,s,o,e.$micro,this.$tzinfo)]);throw new M("result out of range")},nb$subtract(t){if(!(t instanceof Nt))return t instanceof wt?this.nb$add(t.nb$negative()):b;const n=this.$toOrdinal(),i=t.$toOrdinal(),s=this.$sec+60*this.$min+3600*this.$hour,o=t.$sec+60*t.$min+3600*t.$hour,a=new wt(n-i,s-o,this.$micro-t.$micro);if(this.$tzinfo===t.$tzinfo)return a;const $=r(this.tp$getattr(U)),c=r(t.tp$getattr(U));if(e($,c,"Eq"))return a;if($===y||c===y)throw new z("cannot mix naive and timezone-aware time");return a.nb$add(c).nb$subtract($)},nb$reflected_subtract:null,tp$hash(){if(-1===this.$hashcode){const t=this.$fold?r(this.tp$getattr(J),[],["fold",W]):this,e=r(t.tp$getattr(U));if(e===y)this.$hashcode=u(t.$getState()[0]);else{const t=_ymd2ord(this.$year,this.$month,this.$day),n=3600*this.$hour+60*this.$min+this.$sec;this.$hashcode=u(new wt(t,n,this.$micro).nb$subtract(e))}}return this.$hashcode}},methods:{date:{$meth:function _date(){return new vt(this.$year,this.$month,this.$day)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return date object with same year, month and day."},time:{$meth:function _time(){return new xt(this.$hour,this.$min,this.$sec,this.$micro,y,this.$fold)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return time object with same time but with tzinfo=None."},timetz:{$meth:function timetz(){return new xt(this.$hour,this.$min,this.$sec,this.$micro,this.$tzinfo,this.$fold)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return time object with same time and tzinfo."},ctime:{$meth:function ctime(){const t=this.$toOrdinal()%7||7,e=ft[t],n=lt[this.$month];return new w(`${e} ${n} ${_d(this.$day," ",2)} ${_d(this.$hour,"0",2)}:${_d(this.$min,"0",2)}:${_d(this.$sec,"0",2)} ${_d(this.$year,"0",4)}`)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return ctime() style string."},timetuple:{$meth:function timetuple(){let e=r(this.tp$getattr(F));return e=e===y?-1:t(e)?1:0,_build_struct_time(this.$year,this.$month,this.$day,this.$hour,this.$min,this.$sec,e)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return time tuple, compatible with time.localtime()."},timestamp:{$meth:function timestamp(){if(this.$tzinfo===y){let t=this.$mkTime();return t=I(t),new d(t+this.$micro/1e6)}{const t=q(this,kt,"Sub");return new d(((86400*t.$days+t.$secs)*10**6+t.$micro)/10**6)}},$flags:{NoArgs:!0},$textsig:null,$doc:"Return POSIX timestamp as float."},utctimetuple:{$meth:function utctimetuple(){const e=r(this.tp$getattr(U));let n=this;return t(e)&&(n=q(n,e,"Sub")),_build_struct_time(n.$year,n.$month,n.$day,n.$hour,n.$min,n.$sec,0)},$flags:{NoArgs:!0},$textsig:null,$doc:"Return UTC time tuple, compatible with time.localtime()."},isoformat:{$meth:function isoformat(t,e){if(!k(t))throw new z("sep must be str, not "+c(t));let n=`${_d(this.$year,"0",4)}-${_d(this.$month,"0",2)}-${_d(this.$day,"0",2)}`+t.toString();n+=_format_time(this.$hour,this.$min,this.$sec,this.$micro,e);const i=_format_offset(r(this.tp$getattr(U)));return i&&(n+=i),new w(n)},$flags:{NamedArgs:["sep","timespec"],Defaults:[new w("T"),C]},$textsig:null,$doc:"[sep] -> string in ISO 8601 format, YYYY-MM-DDT[HH[:MM[:SS[.mmm[uuu]]]]][+HH:MM].\\nsep is used to separate the year from the time, and defaults to \'T\'.\\ntimespec specifies what components of the time to include (allowed values are \'auto\', \'hours\', \'minutes\', \'seconds\', \'milliseconds\', and \'microseconds\').\\n"},utcoffset:{$meth:function utcoffset(){if(this.$tzinfo===y)return y;const t=this.$tzinfo.tp$getattr(U),e=r(t,[this]);return _check_utc_offset("utcoffset",e),e},$flags:{NoArgs:!0},$textsig:null,$doc:"Return self.tzinfo.utcoffset(self)."},tzname:{$meth:function tzname(){if(this.$tzinfo===y)return y;const t=this.$tzinfo.tp$getattr(Y),e=r(t,[this]);return _check_tzname(e),e},$flags:{NoArgs:!0},$textsig:null,$doc:"Return self.tzinfo.tzname(self)."},dst:{$meth:function dst(){if(this.$tzinfo===y)return y;const t=this.$tzinfo.tp$getattr(F),e=r(t,[this]);return _check_utc_offset("dst",e),e},$flags:{NoArgs:!0},$textsig:null,$doc:"Return self.tzinfo.dst(self)."},replace:{$meth:function replace(t,e){m("replace",t,0,8);let[n,i,s,o,r,a,$,c,h]=l("replace",["year","month","day","hour","minute","second","microsecond","tzinfo","fold"],t,e,[y,y,y,y,y,y,y,g,y]);return n===y&&(n=new f(this.$year)),i===y&&(i=new f(this.$month)),s===y&&(s=new f(this.$day)),o===y&&(o=new f(this.$hour)),r===y&&(r=new f(this.$min)),a===y&&(a=new f(this.$sec)),$===y&&($=new f(this.$micro)),c===g&&(c=this.$tzinfo),h===y&&(h=new f(this.$fold)),this.ob$type.tp$call([n,i,s,o,r,a,$,c],["fold",h])},$flags:{FastCall:!0},$textsig:null,$doc:"Return datetime with new specified fields."},astimezone:{$meth:function astimezone(t){if(t===y)t=this.$localTimezone();else if(!(t instanceof Mt))throw new z("tz argument must be an instance of tzinfo");let e,n=this.$tzinfo;if(n===y?(n=this.$localTimezone(),e=r(n.tp$getattr(U),[this])):(e=r(n.tp$getattr(U),[this]),e===y&&(n=r(this.tp$getattr(J),[],["tzinfo",y]).$localTimezone(),e=r(n.tp$getattr(U),[this]))),t===n)return this;const i=r(this.nb$subtract(e).tp$getattr(J),[],["tzinfo",t]);return t.tp$getattr(P).tp$call([i])},$flags:{NamedArgs:["tz"],Defaults:[y]},$textsig:null,$doc:"tz -> convert to local time in new timezone tz\\n"},__reduce_ex__:{$meth(t){return new p([this.ob$type,new p(this.$getState(R(t)))])},$flags:{OneArg:!0},$textsig:null,$doc:"__reduce_ex__(proto) -> (cls, state)"},__reduce__:{$meth(){return this.tp$getattr(new w("__reduce_ex__")).tp$call([new f(2)])},$flags:{NoArgs:!0},$textsig:null,$doc:"__reduce__() -> (cls, state)"}},classmethods:{now:{$meth:function now(t){const e=$.time.tp$call([]);return this.tp$getattr(B).tp$call([e,t])},$flags:{NamedArgs:["tz"],Defaults:[y]},$textsig:"($type, /, tz=None)",$doc:"Returns new datetime object representing current time local to tz.\\n\\n  tz\\n    Timezone object.\\n\\nIf no tz is specified, uses local timezone."},utcnow:{$meth:function utcnow(){const t=$.time.tp$call([]);return this.tp$getattr(L).tp$call([t])},$flags:{NoArgs:!0},$textsig:null,$doc:"Return a new datetime representing UTC day and time."},fromtimestamp:{$meth:function fromtimestamp(t,e){return _check_tzinfo_arg(e),this.prototype.$fromtimestamp.call(this,t,e!==y,e)},$flags:{NamedArgs:["timestamp","tz"],Defaults:[y]},$textsig:null,$doc:"timestamp[, tz] -> tz\'s local time from POSIX timestamp."},utcfromtimestamp:{$meth:function utcfromtimestamp(t){return this.prototype.$fromtimestamp.call(this,t,!0,y)},$flags:{OneArg:!0},$textsig:null,$doc:"Construct a naive UTC datetime from a POSIX timestamp."},strptime:{$meth:function strptime(t,e){return null===ot?Sk.misceval.chain(Sk.importModule("_strptime",!1,!0),(n=>(ot=n.tp$getattr(new w("_strptime_datetime")),ot.tp$call([this,t,e])))):ot.tp$call([this,t,e])},$flags:{MinArgs:2,MaxArgs:2},$textsig:null,$doc:"string, format -> new datetime parsed from a string (like time.strptime())."},combine:{$meth:function combine(t,e,n){if(!(t instanceof vt))throw new z("date argument must be a date instance");if(!(e instanceof xt))throw new z("time argument must be a time instance");n===g&&(n=e.$tzinfo);const i=[t.$year,t.$month,t.$day,e.$hour,e.$min,e.$sec,e.$micro].map((t=>new f(t)));return i.push(n),this.tp$call(i,["fold",new f(e.$fold)])},$flags:{NamedArgs:["date","time","tzinfo"],Defaults:[g]},$textsig:null,$doc:"date, time -> datetime with same date and time fields"},fromisoformat:{$meth:function fromisoformat(t){if(!k(t))throw new z("fromisoformat: argument must be str");const e=(t=t.toString()).slice(0,10),n=t.slice(11);let i,s;try{i=_parse_isoformat_date(e)}catch(o){throw new v("Invalid isoformat string: \'"+t+"\'")}if(n)try{s=_parse_isoformat_time(n)}catch(o){throw new v("Invalid isoformat string: \'"+t+"\'")}else s=[W,W,W,W,y];return this.tp$call(i.concat(s))},$flags:{OneArg:!0},$textsig:null,$doc:"string -> datetime from datetime.isoformat() output"}},getsets:{hour:{$get(){return new f(this.$hour)}},minute:{$get(){return new f(this.$min)}},second:{$get(){return new f(this.$sec)}},microsecond:{$get(){return new f(this.$micro)}},tzinfo:{$get(){return this.$tzinfo}},fold:{$get(){return new f(this.$fold)}}},proto:{$cmp(n,i){const s=this.$tzinfo,o=n.$tzinfo;let a,$,c;if(a=$=y,s===o)c=!0;else{if(a=r(this.tp$getattr(U)),$=r(n.tp$getattr(U)),"Eq"===i||"NotEq"===i){const t=r(this.tp$getattr(J),[],["fold",new f(Number(!this.$fold))]);if(e(a,r(t.tp$getattr(U)),"NotEq"))return 2;const i=r(n.tp$getattr(J),[],["fold",new f(Number(!n.$fold))]);if(e($,r(i.tp$getattr(U)),"NotEq"))return 2}c=e(a,$,"Eq")}if(c)return _cmp([this.$year,this.$month,this.$day,this.$hour,this.$min,this.$sec,this.$micro],[n.$year,n.$month,n.$day,n.$hour,n.$min,n.$sec,n.$micro]);if(a===y||$===y){if("Eq"===i||"NotEq"===i)return 2;throw new z("cannot compare naive and aware datetimes")}const h=this.nb$subtract(n);return h.$days<0?-1:t(h)?1:0},$mkTime(){const t=new Nt(1970,1,1),e=this.nb$subtract(t).nb$floor_divide(yt);function local(e){const[n,i,s,o,r,a]=$.localtime.tp$call([e]).v;return Nt.tp$call([n,i,s,o,r,a]).nb$subtract(t).nb$floor_divide(yt)}let n,i,s=local(e).nb$subtract(e),o=e.nb$subtract(s),r=local(o);if(r.ob$eq(e)){if(n=o.nb$add([new f(-86400),new f(86400)][this.$fold]),i=local(n).nb$subtract(n),s.ob$eq(i))return o}else i=r.nb$subtract(o);n=e.nb$subtract(i);if(local(n).ob$eq(e))return n;if(r.ob$eq(e))return o;const a=o.ob$ge(n)?o:n;return[a,o===a?n:o][this.$fold]},$fromtimestamp(t,n,s){let o;if(!N(t))throw new z("a number is required, (got \'"+c(t)+"\'");[o,t]=modf(t);let a=intRound(q(o,nt,"Mult"));a=a.v,t=t.v,a>=1e6?(t+=1,a-=1e6):a<0&&(t-=1,a+=1e6),t=new f(t),Number.isInteger(a)||(a=Math.trunc(a)),a=new f(a);const h=n?$.gmtime:$.localtime;function converter(t){return h.tp$call([t]).v}let[m,u,l,d,_,p]=converter(t);p=new f(Math.min(i(p),59));let g=r(this,[m,u,l,d,_,p,a,s]);if(s===y){const n=86400;[m,u,l,d,_,p]=converter(q(t,new f(n),"Sub"));const i=r(this,[m,u,l,d,_,p,a,s]),o=q(q(g,i,"Sub"),new wt(0,n),"Sub");if(o.$days<0){[m,u,l,d,_,p]=converter(q(t,q(o,yt,"FloorDiv"),"Add"));const n=r(this,[m,u,l,d,_,p,a,s]);e(n,g,"Eq")&&(g.$fold=1)}}else g=r(s.tp$getattr(new w("fromutc")),[g]);return g},$localTimezone(){let t;t=this.$tzinfo===y?this.$mkTime():this.nb$subtract(kt).nb$floor_divide(yt);const e=$.localtime.tp$call([t]),n=(Nt.tp$call(e.v.slice(0,6)),e.tp$getattr(new w("tm_gmtoff"))),i=e.tp$getattr(new w("tm_zone"));return new St(wt.tp$call([W,n]),i)},$getState(t=3){let[e,n]=$divMod(this.$year,256),[i,s]=$divMod(this.$micro,256),[o,r]=$divMod(i,256),a=this.$month;this.$fold&&t>3&&(a+=128);const $=new _([e,n,a,this.$day,this.$hour,this.$min,this.$sec,o,r,s]);return this.$tzinfo===y?[$]:[$,this.$tzinfo]},$setState(t,e){const[n,i,s,o,r,a,$,c,h,m]=t;s>127?(this.$fold=1,this.$month=s-128):(this.$fold=0,this.$month=s),this.$year=256*n+i,this.$day=o,this.$hour=r,this.$min=a,this.$sec=$,this.$micro=(c<<8|h)<<8|m,this.$tzinfo=e}}});function _isoweek1monday(t){const e=_ymd2ord(t,1,1),n=(e+6)%7;let i=e-n;return n>3&&(i+=7),i}Nt.prototype.min=new Nt(1,1,1),Nt.prototype.max=new Nt(9999,12,31,23,59,59,999999),Nt.prototype.resolution=new wt(0,0,1);const St=E.timezone=h("datetime.timezone",{base:Mt,constructor:function timezone(t,n){if(this.$offset=t,this.$name=n||y,!e(this.$minoffset,t,"LtE")||!e(this.$maxoffset,t,"GtE"))throw new v("offset must be a timedelta strictly between -timedelta(hours=24) and timedelta(hours=24).")},slots:{tp$new(e,n){let[i,s]=l("timezone",["offset","name"],e,n,[null]);if(!(i instanceof wt))throw new z("offset must be a timedelta");if(null===s){if(!t(i))return this.utc;s=y}else if(!k(s))throw new z("name must be a string");if(this===St.prototype)return new St(i,s);{const t=new this.constructor;return St.call(t,i,s),t}},tp$richcompare(t,n){if(!(t instanceof St))return b;const i=e(this.$offset,t.$offset,"Eq");return"NotEq"===n?!i:"Eq"===n||i&&o(n)?i:b},$r(){return this===this.utc?new w("datetime.timezone.utc"):this.$name===y?new w(`${this.tp$name}(${s(this.$offset)})`):new w(`${this.tp$name}(${s(this.$offset)}, ${s(this.$name)})`)},tp$str(){return this.tp$getattr(Y).tp$call([y])},tp$hash(){return u(this.$offset)}},methods:{tzname:{$meth:function tzname(t){if(t instanceof Nt||t===y)return this.$name===y?this.$nameFromOff(this.$offset):this.$name;throw new z("tzname() argument must be a datetime instance or None")},$flags:{OneArg:!0},$textsig:null,$doc:"If name is specified when timezone is created, returns the name.  Otherwise returns offset as \'UTC(+|-)HH:MM\'."},utcoffset:{$meth:function utcoffset(t){if(t instanceof Nt||t===y)return this.$offset;throw new z("utcoffset() argument must be a datetime instance or None")},$flags:{OneArg:!0},$textsig:null,$doc:"Return fixed offset."},dst:{$meth:function dst(t){if(t instanceof Nt||t===y)return y;throw new z("dst() argument must be a datetime instance or None")},$flags:{OneArg:!0},$textsig:null,$doc:"Return None."},fromutc:{$meth:function fromutc(t){if(t instanceof Nt){if(t.$tzinfo!==this)throw new v("fromutc: dt.tzinfo is not self");return q(t,this.$offset,"Add")}throw new z("fromutc() argument must be a datetime instance or None")},$flags:{OneArg:!0},$textsig:null,$doc:"datetime in UTC -> datetime in local time."},__getinitargs__:{$meth(){return this.$name===y?new p([this.$offset]):new p([this.$offset,this.$name])},$flags:{NoArgs:!0}}},proto:{$maxoffset:new wt(0,86399,999999),$minoffset:new wt(-1,0,1),$nameFromOff(n){if(!t(n))return new w("UTC");let i,s,o,r,a,$;return e(n,bt,"Lt")?(i="-",n=n.nb$negative()):i="+",[s,o]=pyDivMod(n,pt),[r,o]=pyDivMod(o,gt),a=o.$secs,$=o.$micro,new w($?`UTC${i}${_d(s)}:${_d(r)}:${_d(a)}.${_d($,"0",6)}`:a?`UTC${i}${_d(s)}:${_d(r)}:${_d(a)}`:`UTC${i}${_d(s)}:${_d(r)}`)}}});St.prototype.utc=new St(new wt(0)),St.prototype.min=new St(new wt(0,-86340,0)),St.prototype.max=new St(new wt(0,86340,0));const kt=new Nt(1970,1,1,0,0,0,0,St.prototype.utc);return E}))}',"src/lib/document.js":'var $builtinmodule=function(n){var e,t={__name__:new Sk.builtin.str("document")};return t.getElementById=new Sk.builtin.func((function(n){var e=document.getElementById(n.v);return e?Sk.misceval.callsimArray(t.Element,[e]):Sk.builtin.none.none$})),t.createElement=new Sk.builtin.func((function(n){var e=document.createElement(n.v);if(e)return Sk.misceval.callsimArray(t.Element,[e])})),t.getElementsByTagName=new Sk.builtin.func((function(n){for(var e=document.getElementsByTagName(n.v),i=[],u=e.length-1;u>=0;u--)i.push(Sk.misceval.callsimArray(t.Element,[e[u]]));return new Sk.builtin.list(i)})),t.getElementsByClassName=new Sk.builtin.func((function(n){for(var e=document.getElementsByClassName(n.v),i=[],u=0;u<e.length;u++)i.push(Sk.misceval.callsimArray(t.Element,[e[u]]));return new Sk.builtin.list(i)})),t.getElementsByName=new Sk.builtin.func((function(n){for(var e=document.getElementsByName(n.v),i=[],u=0;u<e.length;u++)i.push(Sk.misceval.callsimArray(t.Element,[e[u]]));return new Sk.builtin.list(i)})),t.currentDiv=new Sk.builtin.func((function(){if(void 0!==Sk.divid)return new Sk.builtin.str(Sk.divid);throw new Sk.builtin.AttributeError("There is no value set for divid")})),e=function(n,e){e.__init__=new Sk.builtin.func((function(n,e){n.v=e,n.innerHTML=e.innerHTML,n.innerText=e.innerText,void 0!==e.value&&(n.value=e.value,Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str("value"),new Sk.builtin.str(n.value))),void 0!==e.checked&&(n.checked=e.checked,Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str("checked"),new Sk.builtin.str(n.checked))),Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str("innerHTML"),new Sk.builtin.str(n.innerHTML)),Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str("innerText"),new Sk.builtin.str(n.innerText))})),e.tp$getattr=Sk.generic.getAttr,e.__setattr__=new Sk.builtin.func((function(n,e,t){"innerHTML"===(e=Sk.ffi.remapToJs(e))&&(n.innerHTML=t,n.v.innerHTML=t.v,Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str("innerHTML"),t)),"innerText"===e&&(n.innerText=t,n.v.innerText=t.v,Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str("innerText"),t))})),e.appendChild=new Sk.builtin.func((function(n,e){n.v.appendChild(e.v)})),e.removeChild=new Sk.builtin.func((function(n,e){n.v.removeChild(e.v)})),e.getCSS=new Sk.builtin.func((function(n,e){return new Sk.builtin.str(n.v.style[e.v])})),e.setCSS=new Sk.builtin.func((function(n,e,t){n.v.style[e.v]=t.v})),e.getAttribute=new Sk.builtin.func((function(n,e){var t=n.v.getAttribute(e.v);return t?new Sk.builtin.str(t):Sk.builtin.none.none$})),e.setAttribute=new Sk.builtin.func((function(n,e,t){n.v.setAttribute(e.v,t.v)})),e.getProperty=new Sk.builtin.func((function(n,e){var t=n.v[e.v];return t?new Sk.builtin.str(t):Sk.builtin.none.none$})),e.__str__=new Sk.builtin.func((function(n){return console.log(n.v.tagName),new Sk.builtin.str(n.v.tagName)})),e.__repr__=new Sk.builtin.func((function(n){return new Sk.builtin.str("[DOM Element]")}))},t.Element=Sk.misceval.buildClass(t,e,"Element",[]),t};',"src/lib/functools.js":`function $builtinmodule(){const t={};return Sk.misceval.chain(Sk.importModule("collections",!1,!0),(e=>(t._namedtuple=e.$d.namedtuple,functools_mod(t))))}function functools_mod(t){const{object:e,int_:n,str:r,list:s,tuple:a,dict:i,none:{none$:o},bool:{false$:c},NotImplemented:{NotImplemented$:_},bool:l,func:p,method:u,TypeError:h,RuntimeError:d,ValueError:f,NotImplementedError:m,AttributeErrror:w,OverflowError:g,checkNone:$,checkBool:y,checkCallable:k,checkClass:b}=Sk.builtin,{callsimArray:x,callsimOrSuspendArray:A,iterFor:S,chain:E,isIndex:v,asIndexSized:N,isTrue:P,richCompareBool:j,objectRepr:R}=Sk.misceval,{remapToPy:z}=Sk.ffi,{buildNativeClass:q,setUpModuleMethods:T,keywordArrayFromPyDict:I,keywordArrayToPyDict:D,objectHash:C,lookupSpecial:M,copyKeywordsToNamedArgs:W,typeName:F,iter:U,gattr:O}=Sk.abstr,{getSetDict:G,getAttr:B,setAttr:K}=Sk.generic;function proxyFail(t){return new p((()=>{throw new m(t+" is not yet implemented in skulpt")}))}Object.assign(t,{__name__:new r("functools"),__doc__:new r("Tools for working with functions and callable objects"),__all__:new s(["update_wrapper","wraps","WRAPPER_ASSIGNMENTS","WRAPPER_UPDATES","total_ordering","cmp_to_key","cache","lru_cache","reduce","partial","partialmethod","singledispatch","singledispatchmethod","cached_property"].map((t=>new r(t)))),WRAPPER_ASSIGNMENTS:new a(["__module__","__name__","__qualname__","__doc__","__annotations__"].map((t=>new r(t)))),WRAPPER_UPDATES:new a([new r("__dict__")]),singledispatch:proxyFail("singledispatch"),singledispatchmethod:proxyFail("singledispatchmethod"),cached_property:proxyFail("cached_property")});const L=new r("cache_parameters");function _lru_cache(e,n){if(n||(n=c),v(e))(e=N(e,g))<0&&(e=0);else{if(k(e)&&y(n)){const r=e,s=new V(r,e=128,n);return s.tp$setattr(L,new p((()=>z({maxsize:e,typed:n})))),A(t.update_wrapper,[s,r])}if(!$(e))throw new h("Expected first argument to be an integer, a callable, or None")}return new p((r=>{const s=new V(r,e,n);return s.tp$setattr(L,new p((()=>z({maxsize:e,typed:n})))),A(t.update_wrapper,[s,r])}))}const H=t._CacheInfo=x(t._namedtuple,["CacheInfo",["hits","misses","maxsize","currsize"]].map((t=>z(t))),["module",new r("functools")]),V=q("functools._lru_cache_wrapper",{constructor:function _lru_cache_wrapper(t,e,n,r){if(!k(t))throw new h("the first argument must be callable");let s;if($(e))s=infinite_lru_cache_wrapper,e=-1;else{if(!v(e))throw new h("maxsize should be integer or None");(e=N(e,g))<0&&(e=0),s=0===e?uncached_lru_cache_wrapper:bounded_lru_cache_wrapper}this.root={},this.root.prev=this.root.next=this.root,this.wrapper=s,this.maxsize=e,this.typed=n,this.cache=new i([]),this.func=t,this.misses=this.hits=0,this.$d=new i([])},slots:{tp$new(t,e){const[n,r,s,a]=W("_lru_cache_wrapper",["user_function","maxsize","typed","cache_info_type"],t,e);return new V(n,r,s,a)},tp$call(t,e){return this.wrapper(t,e)},tp$descr_get(t,e){return null===t?this:new u(this,t)},tp$doc:"Create a cached callable that wraps another function.\\n\\nuser_function:      the function being cached\\n\\nmaxsize:  0         for no caching\\n          None      for unlimited cache size\\n          n         for a bounded cache\\n\\ntyped:    False     cache f(3) and f(3.0) as identical calls\\n          True      cache f(3) and f(3.0) as distinct calls\\n\\ncache_info_type:    namedtuple class with the fields:\\n                        hits misses currsize maxsize\\n"},methods:{cache_info:{$meth(){return A(H,[this.hits,this.misses,-1===this.maxsize?o:this.maxsize,this.cache.get$size()].map((t=>z(t))))},$flags:{NoArgs:!0},$doc:"Report cache statistics"},cache_clear:{$meth(){return this.hits=this.misses=0,this.root={},this.root.next=this.root.prev=this.root,A(this.cache.tp$getattr(new r("clear"),!0))},$flags:{NoArgs:!0},$doc:"Clear the cache and cache statistics"},__deepcopy__:{$meth(t){return this},$flags:{OneArg:!0}},__copy__:{$meth(){return this},$flags:{NoArgs:!0}}},getsets:{__dict__:G}});function infinite_lru_cache_wrapper(t,e){const n=_make_key(t,e,this.typed),r=this.cache.mp$lookup(n);return void 0!==r?(this.hits++,r):(this.misses++,E(A(this.func,t,e),(t=>(this.cache.mp$ass_subscript(n,t),t))))}function uncached_lru_cache_wrapper(t,e){return this.misses++,A(this.func,t,e)}function bounded_lru_cache_wrapper(t,e){const n=_make_key(t,e,this.typed),r=this.cache.mp$lookup(n);if(void 0!==r){const{result:t}=r;return lru_cache_extract_link(r),lru_cache_append_link(this,r),this.hits++,t}return this.misses++,E(A(this.func,t,e),(t=>{if(void 0!==this.cache.mp$lookup(n))return t;if(this.cache.get$size()<this.maxsize||this.root.next===this.root){const e={key:n,result:t};return this.cache.mp$ass_subscript(n,e),lru_cache_append_link(this,e),t}const e=this.root.next;lru_cache_extract_link(e);if(void 0===this.cache.pop$item(e.key))throw function lru_cache_prepend_link(t,e){const n=t.root,r=n.next;r.prev=n.next=e,e.prev=n,e.next=r}(this,e),new d("cached item removed unexpectedly");return e.key=n,e.result=t,this.cache.mp$ass_subscript(n,e),lru_cache_append_link(this,e),t}))}function lru_cache_extract_link(t){const{prev:e,next:n}=t;e.next=t.next,n.prev=t.prev}function lru_cache_append_link(t,e){const n=t.root,r=n.prev;r.next=n.prev=e,e.prev=r,e.next=n}const J=q("_HachedSeq",{base:s,constructor:function _HachedSeq(t){this.$hashval=C(new a(t)),s.call(this,t)},slots:{tp$hash(){return this.$hashval}}}),Q=new e,X=new Set([n,r]);function _make_key(t,e,n){const s=t.slice(0),i=[];if(e&&e.length){s.push(Q);for(let t=0;t<e.length;t+=2){const n=e[t+1];i.push(n),s.push(new a([new r(e[t]),n]))}}if(P(n))s.push(...t.map((t=>t.ob$type)),...i.map((t=>t.ob$type)));else if(1===s.length&&X.has(s[0].ob$type))return s[0];return new J(s)}function partial_adjust_args_kwargs(t,e){if(t=this.arg_arr.concat(t),e){e=D(e);const t=this.kwdict.dict$copy();t.dict$merge(e),e=I(t)}else e=I(this.kwdict);return{args:t,kwargs:e}}function partial_new(t,e){if(t.length<1)throw new h("type 'partial' takes at least 1 argument");let n,r,s=t.shift();if(s instanceof this.sk$builtinBase){const t=s;s=t.fn,n=t.arg_arr,r=t.kwdict}this.check$func(s),n&&(t=n.concat(t));let a=D(e=e||[]);if(r){const t=r.dict$copy();t.dict$merge(a),a=t}if(this.sk$builtinBase===this.constructor)return new this.constructor(s,t,a);{const e=new this.constructor;return this.sk$builtinBase.call(e,s,t,a),e}}function partial_repr(){if(this.in$repr)return new r("...");this.in$repr=!0;const t=[R(this.fn)];return this.arg_arr.forEach((e=>{t.push(R(e))})),this.kwdict.$items().forEach((([e,n])=>{t.push(e.toString()+"="+R(n))})),this.in$repr=!1,new r(this.tp$name+"("+t.join(", ")+")")}t.partial=q("functools.partial",{constructor:function partial(t,e,n){this.fn=t,this.arg_arr=e,this.arg_tup=new a(e),this.kwdict=n,this.in$repr=!1,this.$d=new i([])},slots:{tp$new:partial_new,tp$call(t,e){return({args:t,kwargs:e}=this.adj$args_kws(t,e)),this.fn.tp$call(t,e)},tp$doc:"partial(func, *args, **keywords) - new function with partial application\\n    of the given arguments and keywords.\\n",$r:partial_repr,tp$getattr:B,tp$setattr:K},getsets:{func:{$get(){return this.fn},$doc:"function object to use in future partial calls"},args:{$get(){return this.arg_tup},$doc:"tuple of arguments to future partial calls"},keywords:{$get(){return this.kwdict},$doc:"dictionary of keyword arguments to future partial calls"},__dict__:G},methods:{},classmethods:Sk.generic.classGetItem,proto:{adj$args_kws:partial_adjust_args_kwargs,check$func(t){if(!k(t))throw new h("the first argument must be callable")}}}),t.partialmethod=q("functools.partialmethod",{constructor:function partialmethod(t,e,n){this.fn=t,this.arg_arr=e,this.arg_tup=new a(e),this.kwdict=n},slots:{tp$new:partial_new,tp$doc:"Method descriptor with partial application of the given arguments\\n    and keywords.\\n\\n    Supports wrapping existing descriptors and handles non-descriptor\\n    callables as instance methods.\\n    ",$r:partial_repr,tp$descr_get(e,n){let r;if(this.fn.tp$descr_get){const s=this.fn.tp$descr_get(e,n);if(s!==this.fn){if(!k(s))throw new h("type 'partial' requires a callable");r=new t.partial(s,this.arg_arr.slice(0),this.kwdict.dict$copy());const e=M(s,this.str$self);void 0!==e&&r.tp$setattr(this.str$self,e)}}return void 0===r&&(r=this.make$unbound().tp$descr_get(e,n)),r}},methods:{_make_unbound_method:{$meth(){return this.make$unbound()},$flags:{NoArgs:!0}}},classmethods:Sk.generic.classGetItem,getsets:{func:{$get(){return this.fn},$doc:"function object to use in future partial calls"},args:{$get(){return this.arg_tup},$doc:"tuple of arguments to future partial calls"},keywords:{$get(){return this.kwdict},$doc:"dictionary of keyword arguments to future partial calls"},__dict__:G},proto:{str$self:new r("__self__"),make$unbound(){const t=this;function _method(e,n){const r=e.shift();return({args:e,kwargs:n}=t.adj$args_kws(e,n)),e.unshift(r),A(t.fn,e,n)}return _method.co_fastcall=!0,new p(_method)},adj$args_kws:partial_adjust_args_kwargs,check$func(t){if(!k(t)&&void 0===t.tp$descr_get)throw new h(R(t)+" is not callable or a descriptor")}}});const Y={__lt__:r.$lt,__le__:r.$le,__gt__:r.$gt,__ge__:r.$ge};function from_slot(t,e){const n=Y[t];function compare_slot(t,r){let s=x(t.tp$getattr(n),[r]);return s===_?s:(s=P(s),new l(e(s,t,r)))}return compare_slot.co_name=n,compare_slot}const Z=from_slot("__lt__",((t,e,n)=>!t&&j(e,n,"NotEq"))),tt=from_slot("__lt__",((t,e,n)=>t||j(e,n,"Eq"))),et=from_slot("__lt__",(t=>!t)),nt=from_slot("__le__",((t,e,n)=>!t||j(e,n,"Eq"))),rt=from_slot("__le__",((t,e,n)=>t&&j(e,n,"NotEq"))),st=from_slot("__le__",(t=>!t)),at=from_slot("__gt__",((t,e,n)=>!t&&j(e,n,"NotEq"))),it=from_slot("__gt__",((t,e,n)=>t||j(e,n,"Eq"))),ot=from_slot("__gt__",(t=>!t)),ct=from_slot("__ge__",((t,e,n)=>!t||j(e,n,"Eq"))),_t=from_slot("__ge__",((t,e,n)=>t&&j(e,n,"NotEq"))),lt=from_slot("__ge__",(t=>!t)),pt={__lt__:{__gt__:new p(Z),__le__:new p(tt),__ge__:new p(et)},__le__:{__ge__:new p(nt),__lt__:new p(rt),__gt__:new p(st)},__gt__:{__lt__:new p(at),__ge__:new p(it),__le__:new p(ot)},__ge__:{__le__:new p(ct),__gt__:new p(_t),__lt__:new p(lt)}},ut={__lt__:"ob$lt",__le__:"ob$le",__gt__:"ob$gt",__ge__:"ob$ge"};const ht=new n(0),dt=q("functools.KeyWrapper",{constructor:function(t,e){this.cmp=t,this.obj=e},slots:{tp$call(t,e){const[n]=W("K",["obj"],t,e,[]);return new dt(this.cmp,n)},tp$richcompare(t,e){if(!(t instanceof dt))throw new h("other argument must be K instance");const n=this.obj,r=t.obj;if(!n||!r)throw new w("object");const s=A(this.cmp,[n,r]);return E(s,(t=>j(t,ht,e)))},tp$getattr:B,tp$hash:o},getsets:{obj:{$get(){return this.obj||o},$set(t){this.obj=t},$doc:"Value wrapped by a key function."}}}),ft=new r("update"),mt=new r("__wrapped__");return T("functools",t,{cache:{$meth:function cache(t){return A(_lru_cache(o),[t])},$flags:{OneArg:!0},$doc:'Simple lightweight unbounded cache.  Sometimes called "memoize".',$textsig:"($module, user_function, /)"},lru_cache:{$meth:_lru_cache,$flags:{NamedArgs:["maxsize","typed"],Defaults:[new n(128),c]},$doc:"Least-recently-used cache decorator.\\n\\nIf *maxsize* is set to None, the LRU features are disabled and the cache\\ncan grow without bound.\\n\\nIf *typed* is True, arguments of different types will be cached separately.\\nFor example, f(3.0) and f(3) will be treated as distinct calls with\\ndistinct results.\\n\\nArguments to the cached function must be hashable.\\n\\nView the cache statistics named tuple (hits, misses, maxsize, currsize)\\nwith f.cache_info().  Clear the cache and statistics with f.cache_clear().\\nAccess the underlying function with f.__wrapped__.\\n\\nSee:  http://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)"},cmp_to_key:{$meth:function cmp_to_key(t){return new dt(t)},$flags:{NamedArgs:["mycmp"],Defaults:[]},$doc:"Convert a cmp= function into a key= function.",$textsig:"($module, cmp, /)"},reduce:{$meth:function reduce(t,e,n){const r=U(e);let s;return n=n||r.tp$iternext(!0),E(n,(e=>{if(void 0===e)throw new h("reduce() of empty sequence with no initial value");return s=e,S(r,(e=>E(A(t,[s,e]),(t=>{s=t}))))}),(()=>s))},$flags:{MinArgs:2,MaxArgs:3},$doc:"reduce(function, sequence[, initial]) -> value\\n\\nApply a function of two arguments cumulatively to the items of a sequence,\\nfrom left to right, so as to reduce the sequence to a single value.\\nFor example, reduce(lambda x, y: x+y, [1, 2, 3, 4, 5]) calculates\\n((((1+2)+3)+4)+5).  If initial is present, it is placed before the items\\nof the sequence in the calculation, and serves as a default when the\\nsequence is empty.",$textsig:"($module, function, sequence[, initial], /)"},total_ordering:{$meth:function total_ordering(t){const n=[];if(!b(t))throw new h("total ordering only supported for type objects not '"+F(t)+"'");if(Object.keys(pt).forEach((r=>{const s=ut[r];t.prototype[s]!==e.prototype[s]&&n.push(r)})),!n.length)throw new f("must define atleast one ordering operation: <, >, <=, >=");const r=n[0];return Object.entries(pt[r]).forEach((([e,r])=>{n.includes(e)||t.tp$setattr(Y[e],r)})),t},$flags:{OneArg:!0},$doc:"Class decorator that fills in missing ordering methods"},update_wrapper:{$meth:function update_wrapper(t,e,n,r){let s,a=U(n);for(let i=a.tp$iternext();void 0!==i;i=a.tp$iternext())void 0!==(s=e.tp$getattr(i))&&t.tp$setattr(i,s);a=U(r);for(let o=a.tp$iternext();void 0!==o;o=a.tp$iternext()){s=e.tp$getattr(o)||new i([]);const n=O(t,o),r=O(n,ft);x(r,[s])}return t.tp$setattr(mt,e),t},$flags:{NamedArgs:["wrapper","wrapped","assigned","updated"],Defaults:[t.WRAPPER_ASSIGNMENTS,t.WRAPPER_UPDATES]},$doc:"Update a wrapper function to look like the wrapped function\\n\\n       wrapper is the function to be updated\\n       wrapped is the original function\\n       assigned is a tuple naming the attributes assigned directly\\n       from the wrapped function to the wrapper function (defaults to\\n       functools.WRAPPER_ASSIGNMENTS)\\n       updated is a tuple naming the attributes of the wrapper that\\n       are updated with the corresponding attribute from the wrapped\\n       function (defaults to functools.WRAPPER_UPDATES)\\n    ",$textsig:"($module, /, wrapper, wrapped, assigned=('__module__', '__name__', '__qualname__', '__doc__', '__annotations__'), updated=('__dict__',))"},wraps:{$meth:function wraps(e,n,r){const s=["wrapped",e,"assigned",n,"updated",r];return A(t.partial,[t.update_wrapper],s)},$flags:{NamedArgs:["wrapped","assigned","updated"],Defaults:[t.WRAPPER_ASSIGNMENTS,t.WRAPPER_UPDATES]},$doc:"Decorator factory to apply update_wrapper() to a wrapper function\\n\\n       Returns a decorator that invokes update_wrapper() with the decorated\\n       function as the wrapper argument and the arguments to wraps() as the\\n       remaining arguments. Default arguments are as for update_wrapper().\\n       This is a convenience function to simplify applying partial() to\\n       update_wrapper().\\n    ",$textsig:"($module, /, wrapped, assigned=('__module__', '__name__', '__qualname__', '__doc__', '__annotations__'), updated=('__dict__',))"}}),t}`,"src/lib/image.js":'var ImageMod,$builtinmodule;ImageMod||((ImageMod={}).canvasLib=[]),$builtinmodule=function(e){var n,t,i,a,u,l,r,s={__name__:new Sk.builtin.str("image")};return s.Image=Sk.misceval.buildClass(s,(function(e,n){u=function(e){e.width=e.image.width,e.height=e.image.height,e.delay=0,e.updateCount=0,e.updateInterval=1,e.lastx=0,e.lasty=0,e.canvas=document.createElement("canvas"),e.canvas.height=e.height,e.canvas.width=e.width,e.ctx=e.canvas.getContext("2d"),e.ctx.drawImage(e.image,0,0),e.imagedata=e.ctx.getImageData(0,0,e.width,e.height)},n.__init__=new Sk.builtin.func((function(e,n){var t;Sk.builtin.pyCheckArgsLen("__init__",arguments.length,2,2);try{e.image=document.getElementById(Sk.ffi.remapToJs(n)),u(e)}catch(i){e.image=null}if(null==e.image)return(t=new Sk.misceval.Suspension).resume=function(){if(t.data.error)throw new Sk.builtin.IOError(t.data.error.message)},t.data={type:"Sk.promise",promise:new Promise((function(t,i){var a=new Image;a.crossOrigin="",a.onerror=function(){i(Error("Failed to load URL: "+a.src))},a.onload=function(){e.image=this,u(e),t()},a.src=r(n)}))},t})),r=function(e){var n,t,i="function"==typeof Sk.imageProxy?Sk.imageProxy:function(e){return(n=document.createElement("a")).href=t,window.location.host!==n.host?Sk.imageProxy+"/"+e:e};return t=i(t=Sk.ffi.remapToJs(e))},l=function(e,n,t){if(n<0||t<0||n>=e.width||t>=e.height)throw new Sk.builtin.ValueError("Pixel index out of range.")};var setdelay=function(e,n,t){var i;Sk.builtin.pyCheckArgsLen("setdelay",arguments.length,2,3),e.delay=Sk.ffi.remapToJs(n),i=Sk.builtin.asnum$(t),e.updateInterval=i||1};n.set_delay=new Sk.builtin.func(setdelay),n.setDelay=new Sk.builtin.func(setdelay);var getpixels=function(e){var n,t=[];for(Sk.builtin.pyCheckArgsLen("getpixels",arguments.length,1,1),n=0;n<e.image.height*e.image.width;n++)t[n]=Sk.misceval.callsimArray(e.getPixel,[e,n%e.image.width,Math.floor(n/e.image.width)]);return new Sk.builtin.tuple(t)};n.get_pixels=new Sk.builtin.func(getpixels),n.getPixels=new Sk.builtin.func(getpixels),n.getData=new Sk.builtin.func((function(e){var n,t,i,a,u,r,s,c=[];for(Sk.builtin.pyCheckArgsLen("getData",arguments.length,1,1),n=0;n<e.image.height*e.image.width;n++)t=n%e.image.width,i=Math.floor(n/e.image.width),l(e,t,i),s=4*i*e.width+4*t,a=e.imagedata.data[s],u=e.imagedata.data[s+1],r=e.imagedata.data[s+2],c[n]=new Sk.builtin.tuple([new Sk.builtin.int_(a),new Sk.builtin.int_(u),new Sk.builtin.int_(r)]);return new Sk.builtin.list(c)}));var getpixel=function(e,n,t){var i,a,u,r;return Sk.builtin.pyCheckArgsLen("getpixel",arguments.length,3,3),n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t),l(e,n,t),r=4*t*e.width+4*n,i=e.imagedata.data[r],u=e.imagedata.data[r+1],a=e.imagedata.data[r+2],Sk.misceval.callsimArray(s.Pixel,[i,u,a,n,t])};n.get_pixel=new Sk.builtin.func(getpixel),n.getPixel=new Sk.builtin.func(getpixel),a=function(e,n,t){var i=new Sk.misceval.Suspension;return i.resume=function(){return Sk.builtin.none.none$},i.data={type:"Sk.promise",promise:new Promise((function(i,a){e.updateCount++,e.updateCount%e.updateInterval==0?(e.lastx+e.updateInterval>=e.width?e.lastCtx.putImageData(e.imagedata,e.lastUlx,e.lastUly,0,e.lasty,e.width,2):e.lasty+e.updateInterval>=e.height?e.lastCtx.putImageData(e.imagedata,e.lastUlx,e.lastUly,e.lastx,0,2,e.height):e.lastCtx.putImageData(e.imagedata,e.lastUlx,e.lastUly,Math.min(n,e.lastx),Math.min(t,e.lasty),Math.max(Math.abs(n-e.lastx),1),Math.max(Math.abs(t-e.lasty),1)),e.lastx=n,e.lasty=t,e.delay>0?window.setTimeout(i,e.delay):i()):i()}))},i};var setpixel=function(e,n,t,i){var u;return Sk.builtin.pyCheckArgsLen("setpixel",arguments.length,4,4),n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t),l(e,n,t),u=4*t*e.width+4*n,e.imagedata.data[u]=Sk.builtin.asnum$(Sk.misceval.callsimArray(i.getRed,[i])),e.imagedata.data[u+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(i.getGreen,[i])),e.imagedata.data[u+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(i.getBlue,[i])),e.imagedata.data[u+3]=255,a(e,n,t)};n.set_pixel=new Sk.builtin.func(setpixel),n.setPixel=new Sk.builtin.func(setpixel);var setpixelat=function(e,n,t){var i,u,r;return Sk.builtin.pyCheckArgsLen("setpixelat",arguments.length,3,3),i=(n=Sk.builtin.asnum$(n))%e.image.width,u=Math.floor(n/e.image.width),l(e,i,u),r=4*u*e.width+4*i,e.imagedata.data[r]=Sk.builtin.asnum$(Sk.misceval.callsimArray(t.getRed,[t])),e.imagedata.data[r+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(t.getGreen,[t])),e.imagedata.data[r+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(t.getBlue,[t])),e.imagedata.data[r+3]=255,a(e,i,u)};n.set_pixel_at=new Sk.builtin.func(setpixelat),n.setPixelAt=new Sk.builtin.func(setpixelat);var updatepixel=function(e,n){var t,i,u;return Sk.builtin.pyCheckArgsLen("updatepixel",arguments.length,2,2),t=Sk.builtin.asnum$(Sk.misceval.callsimArray(n.getX,[n])),i=Sk.builtin.asnum$(Sk.misceval.callsimArray(n.getY,[n])),l(e,t,i),u=4*i*e.width+4*t,e.imagedata.data[u]=Sk.builtin.asnum$(Sk.misceval.callsimArray(n.getRed,[n])),e.imagedata.data[u+1]=Sk.builtin.asnum$(Sk.misceval.callsimArray(n.getGreen,[n])),e.imagedata.data[u+2]=Sk.builtin.asnum$(Sk.misceval.callsimArray(n.getBlue,[n])),e.imagedata.data[u+3]=255,a(e,t,i)};n.update_pixel=new Sk.builtin.func(updatepixel),n.updatePixel=new Sk.builtin.func(updatepixel);var getheight=function(e){return Sk.builtin.pyCheckArgsLen("getheight",arguments.length,1,1),new Sk.builtin.int_(e.height)};n.get_height=new Sk.builtin.func(getheight),n.getHeight=new Sk.builtin.func(getheight);var getwidth=function(e,n){return Sk.builtin.pyCheckArgsLen("getwidth",arguments.length,1,1),new Sk.builtin.int_(e.width)};n.get_width=new Sk.builtin.func(getwidth),n.getWidth=new Sk.builtin.func(getwidth),n.__getattr__=new Sk.builtin.func((function(e,n){return"height"===(n=Sk.ffi.remapToJs(n))?Sk.builtin.assk$(e.height):"width"===n?Sk.builtin.assk$(e.width):void 0})),n.__setattr__=new Sk.builtin.func((function(e,n,t){throw"height"===(n=Sk.ffi.remapToJs(n))||"width"===n?new Sk.builtin.Exception("Cannot change height or width they can only be set on creation"):new Sk.builtin.Exception("Unknown attribute: "+n)})),n.draw=new Sk.builtin.func((function(e,n,t,i){var a;return Sk.builtin.pyCheckArgsLen("draw",arguments.length,2,4),(a=new Sk.misceval.Suspension).resume=function(){return Sk.builtin.none.none$},a.data={type:"Sk.promise",promise:new Promise((function(a,u){var l;n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t),i=Sk.builtin.asnum$(i),l=Sk.misceval.callsimArray(n.getWin,[n]).getContext("2d"),void 0===t&&(t=0,i=0),e.lastUlx=t,e.lastUly=i,e.lastCtx=l,l.putImageData(e.imagedata,t,i),e.delay>0?window.setTimeout(a,e.delay):window.setTimeout(a,200)}))},a}))}),"Image",[]),i=function(e,n){n.__init__=new Sk.builtin.func((function(e,n,t){Sk.builtin.pyCheckArgsLen("__init__",arguments.length,3,3),e.width=Sk.builtin.asnum$(n),e.height=Sk.builtin.asnum$(t),e.canvas=document.createElement("canvas"),e.ctx=e.canvas.getContext("2d"),e.canvas.height=e.height,e.canvas.width=e.width,e.imagedata=e.ctx.getImageData(0,0,e.width,e.height)}))},s.EmptyImage=Sk.misceval.buildClass(s,i,"EmptyImage",[s.Image]),t=function(e,n){n.__init__=new Sk.builtin.func((function(e,n,t,i,a,u){Sk.builtin.pyCheckArgsLen("__init__",arguments.length,4,6),e.red=Sk.builtin.asnum$(n),e.green=Sk.builtin.asnum$(t),e.blue=Sk.builtin.asnum$(i),e.x=Sk.builtin.asnum$(a),e.y=Sk.builtin.asnum$(u)}));var getred=function(e){return Sk.builtin.pyCheckArgsLen("getred",arguments.length,1,1),Sk.builtin.assk$(e.red)};n.get_red=new Sk.builtin.func(getred),n.getRed=new Sk.builtin.func(getred);var getgreen=function(e){return Sk.builtin.pyCheckArgsLen("getgreen",arguments.length,1,1),Sk.builtin.assk$(e.green)};n.get_green=new Sk.builtin.func(getgreen),n.getGreen=new Sk.builtin.func(getgreen);var getblue=function(e){return Sk.builtin.pyCheckArgsLen("getblue",arguments.length,1,1),Sk.builtin.assk$(e.blue)};n.get_blue=new Sk.builtin.func(getblue),n.getBlue=new Sk.builtin.func(getblue);var getx=function(e){return Sk.builtin.pyCheckArgsLen("getx",arguments.length,1,1),Sk.builtin.assk$(e.x)};n.get_x=new Sk.builtin.func(getx),n.getX=new Sk.builtin.func(getx);var gety=function(e){return Sk.builtin.pyCheckArgsLen("gety",arguments.length,1,1),Sk.builtin.assk$(e.y)};n.get_y=new Sk.builtin.func(gety),n.getY=new Sk.builtin.func(gety);var setred=function(e,n){Sk.builtin.pyCheckArgsLen("setred",arguments.length,2,2),e.red=Sk.builtin.asnum$(n)};n.set_red=new Sk.builtin.func(setred),n.setRed=new Sk.builtin.func(setred);var setgreen=function(e,n){Sk.builtin.pyCheckArgsLen("setgreen",arguments.length,2,2),e.green=Sk.builtin.asnum$(n)};n.set_green=new Sk.builtin.func(setgreen),n.setGreen=new Sk.builtin.func(setgreen);var setblue=function(e,n){Sk.builtin.pyCheckArgsLen("setblue",arguments.length,2,2),e.blue=Sk.builtin.asnum$(n)};n.set_blue=new Sk.builtin.func(setblue),n.setBlue=new Sk.builtin.func(setblue),n.__getattr__=new Sk.builtin.func((function(e,n){return"red"===(n=Sk.ffi.remapToJs(n))?Sk.builtin.assk$(e.red):"green"===n?Sk.builtin.assk$(e.green):"blue"===n?Sk.builtin.assk$(e.blue):void 0})),n.__setattr__=new Sk.builtin.func((function(e,n,t){"red"!==(n=Sk.ffi.remapToJs(n))&&"green"!==n&&"blue"!==n||(e[n]=Sk.builtin.asnum$(t))}));var setx=function(e,n){Sk.builtin.pyCheckArgsLen("setx",arguments.length,2,2),e.x=Sk.builtin.asnum$(n)};n.set_x=new Sk.builtin.func(setx),n.setX=new Sk.builtin.func(setx);var sety=function(e,n){Sk.builtin.pyCheckArgsLen("sety",arguments.length,2,2),e.y=Sk.builtin.asnum$(n)};n.set_y=new Sk.builtin.func(sety),n.setY=new Sk.builtin.func(sety),n.__getitem__=new Sk.builtin.func((function(e,n){return 0===(n=Sk.builtin.asnum$(n))?e.red:1==n?e.green:2==n?e.blue:void 0})),n.__str__=new Sk.builtin.func((function(e){return Sk.ffi.remapToPy("["+e.red+","+e.green+","+e.blue+"]")})),n.getColorTuple=new Sk.builtin.func((function(e,n,t){})),n.setRange=new Sk.builtin.func((function(e,n){e.max=Sk.builtin.asnum$(n)}))},s.Pixel=Sk.misceval.buildClass(s,t,"Pixel",[]),n=function(e,n){n.__init__=new Sk.builtin.func((function(e,n,t){var i,a,u;Sk.builtin.pyCheckArgsLen("__init__",arguments.length,1,3),void 0===(i=ImageMod.canvasLib[Sk.canvas])?(a=document.createElement("canvas"),u=document.getElementById(Sk.canvas),e.theScreen=a,u.appendChild(a),ImageMod.canvasLib[Sk.canvas]=a,ImageMod.canvasLib[Sk.canvas]=e.theScreen):(e.theScreen=i,e.theScreen.height=e.theScreen.height),void 0!==n?(e.theScreen.height=t.v,e.theScreen.width=n.v):(Sk.availableHeight&&(e.theScreen.height=Sk.availableHeight),Sk.availableWidth&&(e.theScreen.width=Sk.availableWidth)),e.theScreen.style.display="block"})),n.getWin=new Sk.builtin.func((function(e){return e.theScreen})),n.exitonclick=new Sk.builtin.func((function(e){var n=e.theScreen.id;e.theScreen.onclick=function(){document.getElementById(n).style.display="none",document.getElementById(n).onclick=null,delete ImageMod.canvasLib[n]}}))},s.ImageWin=Sk.misceval.buildClass(s,n,"ImageWin",[]),s};',"src/lib/itertools.js":`var $builtinmodule=function(t){var e={};function combinationsNew(t,e,i){let r,s;[r,s]=Sk.abstr.copyKeywordsToNamedArgs(t.tp$name,["iterable","r"],e,i,[]);const n=Sk.misceval.arrayFromIterable(r);if(s=Sk.misceval.asIndexSized(s,Sk.builtin.OverFlowError),s<0)throw new Sk.builtin.ValueError("r must be non-negative");if(this===t)return new t.constructor(n,s);{const e=new this.constructor;return t.constructor.call(e,n,s),e}}return e.accumulate=Sk.abstr.buildIteratorClass("itertools.accumulate",{constructor:function accumulate(t,e,i){this.iter=t,this.func=e,this.total=i,this.tp$iternext=()=>(this.total=Sk.builtin.checkNone(this.total)?this.iter.tp$iternext():this.total,this.tp$iternext=this.constructor.prototype.tp$iternext,this.total)},iternext(t){let e=this.iter.tp$iternext();if(void 0!==e)return this.total=Sk.misceval.callsimArray(this.func,[this.total,e]),this.total},slots:{tp$doc:"accumulate(iterable[, func, initial]) --\\x3e accumulate object\\n\\nReturn series of accumulated sums (or other binary function results).",tp$new(t,i){Sk.abstr.checkArgsLen("accumulate",t,0,2);let[r,s,n]=Sk.abstr.copyKeywordsToNamedArgs("accumulate",["iterable","func","initial"],t,i,[Sk.builtin.none.none$,Sk.builtin.none.none$]);if(r=Sk.abstr.iter(r),s=Sk.builtin.checkNone(s)?new Sk.builtin.func(((t,e)=>Sk.abstr.numberBinOp(t,e,"Add"))):s,this===e.accumulate.prototype)return new e.accumulate(r,s,n);{const t=new this.constructor;return e.accumulate.call(t,r,s,n),t}}}}),e.chain=Sk.abstr.buildIteratorClass("itertools.chain",{constructor:function chain(t){this.iterables=t,this.current_it=null,this.tp$iternext=()=>{if(this.tp$iternext=this.constructor.prototype.tp$iternext,this.current_it=this.iterables.tp$iternext(),void 0!==this.current_it)return this.current_it=Sk.abstr.iter(this.current_it),this.tp$iternext();this.tp$iternext=()=>{}}},iternext(t){let e;for(;void 0===e;){if(e=this.current_it.tp$iternext(),void 0!==e)return e;if(this.current_it=this.iterables.tp$iternext(),void 0===this.current_it)return void(this.tp$iternext=()=>{});this.current_it=Sk.abstr.iter(this.current_it)}},slots:{tp$doc:"chain(*iterables) --\\x3e chain object\\n\\nReturn a chain object whose .__next__() method returns elements from the\\nfirst iterable until it is exhausted, then elements from the next\\niterable, until all of the iterables are exhausted.",tp$new(t,i){if(Sk.abstr.checkNoKwargs("chain",i),t=new Sk.builtin.tuple(t.slice(0)).tp$iter(),this===e.chain.prototype)return new e.chain(t);{const i=new this.constructor;return e.chain.call(i,t),i}}},classmethods:Object.assign({from_iterable:{$meth(t){const i=Sk.abstr.iter(t);return new e.chain(i)},$flags:{OneArg:!0},$doc:"chain.from_iterable(iterable) --\\x3e chain object\\n\\nAlternate chain() constructor taking a single iterable argument\\nthat evaluates lazily.",$textsig:null}},Sk.generic.classGetItem)}),e.combinations=Sk.abstr.buildIteratorClass("itertools.combinations",{constructor:function combinations(t,e){this.pool=t,this.r=e,this.indices=new Array(e).fill().map(((t,e)=>e)),this.n=t.length,this.tp$iternext=()=>{if(!(this.r>this.n))return this.tp$iternext=this.constructor.prototype.tp$iternext,new Sk.builtin.tuple(this.pool.slice(0,this.r))}},iternext(t){let e,i=!1;for(e=this.r-1;e>=0;e--)if(this.indices[e]!=e+this.n-this.r){i=!0;break}if(!i)return void(this.r=0);this.indices[e]++;for(let s=e+1;s<this.r;s++)this.indices[s]=this.indices[s-1]+1;const r=this.indices.map((t=>this.pool[t]));return new Sk.builtin.tuple(r)},slots:{tp$doc:"combinations(iterable, r) --\\x3e combinations object\\n\\nReturn successive r-length combinations of elements in the iterable.\\n\\ncombinations(range(4), 3) --\\x3e (0,1,2), (0,1,3), (0,2,3), (1,2,3)",tp$new(t,i){return combinationsNew.call(this,e.combinations.prototype,t,i)}}}),e.combinations_with_replacement=Sk.abstr.buildIteratorClass("itertools.combinations_with_replacement",{constructor:function combinations_with_replacement(t,e){this.pool=t,this.r=e,this.indices=new Array(e).fill(0),this.n=t.length,this.tp$iternext=()=>{if(this.r&&!this.n)return;this.tp$iternext=this.constructor.prototype.tp$iternext;const t=this.indices.map((t=>this.pool[t]));return new Sk.builtin.tuple(t)}},iternext(t){let e,i=!1;for(e=this.r-1;e>=0;e--)if(this.indices[e]!=this.n-1){i=!0;break}if(!i)return void(this.r=0);const r=this.indices[e]+1;for(let n=e;n<this.r;n++)this.indices[n]=r;const s=this.indices.map((t=>this.pool[t]));return new Sk.builtin.tuple(s)},slots:{tp$doc:"combinations_with_replacement(iterable, r) --\\x3e combinations_with_replacement object\\n\\nReturn successive r-length combinations of elements in the iterable\\nallowing individual elements to have successive repeats.\\ncombinations_with_replacement('ABC', 2) --\\x3e AA AB AC BB BC CC",tp$new(t,i){return combinationsNew.call(this,e.combinations_with_replacement.prototype,t,i)}}}),e.compress=Sk.abstr.buildIteratorClass("itertools.compress",{constructor:function compress(t,e){this.data=t,this.selectors=e},iternext(){let t=this.data.tp$iternext(),e=this.selectors.tp$iternext();for(;void 0!==t&&void 0!==e;){if(Sk.misceval.isTrue(e))return t;t=this.data.tp$iternext(),e=this.selectors.tp$iternext()}},slots:{tp$doc:"compress(data, selectors) --\\x3e iterator over selected data\\n\\nReturn data elements corresponding to true selector elements.\\nForms a shorter iterator from selected data elements using the\\nselectors to choose the data elements.",tp$new(t,i){let r,s;if([r,s]=Sk.abstr.copyKeywordsToNamedArgs("compress",["data","selectors"],t,i,[]),r=Sk.abstr.iter(r),s=Sk.abstr.iter(s),this===e.count.prototype)return new e.compress(r,s);{const t=new this.constructor;return e.compress.call(t,r,s),t}}}}),e.count=Sk.abstr.buildIteratorClass("itertools.count",{constructor:function count(t,e){this.start=t,this.step=e},iternext(){const t=this.start;return this.start=Sk.abstr.numberBinOp(this.start,this.step,"Add"),t},slots:{tp$doc:"count(start=0, step=1) --\\x3e count object\\n\\nReturn a count object whose .__next__() method returns consecutive values.\\nEquivalent to:\\n\\n    def count(firstval=0, step=1):\\n        x = firstval\\n        while 1:\\n            yield x\\n            x += step\\n",tp$new(t,i){const[r,s]=Sk.abstr.copyKeywordsToNamedArgs("count",["start","step"],t,i,[new Sk.builtin.int_(0),new Sk.builtin.int_(1)]);if(!Sk.builtin.checkNumber(r)&&!Sk.builtin.checkComplex(r))throw new Sk.builtin.TypeError("a number is required");if(!Sk.builtin.checkNumber(s)&&!Sk.builtin.checkComplex(s))throw new Sk.builtin.TypeError("a number is required");if(this===e.count.prototype)return new e.count(r,s);{const t=new this.constructor;return e.count.call(t,r,s),t}},$r(){const t=Sk.misceval.objectRepr(this.start);let e=Sk.misceval.objectRepr(this.step);return e="1"===e?"":", "+e,new Sk.builtin.str(Sk.abstr.typeName(this)+"("+t+e+")")}}}),e.cycle=Sk.abstr.buildIteratorClass("itertools.cycle",{constructor:function cycle(t){this.iter=t,this.saved=[],this.consumed=!1,this.i=0,this.length},iternext(){let t;if(!this.consumed){if(t=this.iter.tp$iternext(),void 0!==t)return this.saved.push(t),t;if(this.consumed=!0,this.length=this.saved.length,!this.length)return}return t=this.saved[this.i],this.i=(this.i+1)%this.length,t},slots:{tp$doc:"cycle(iterable) --\\x3e cycle object\\n\\nReturn elements from the iterable until it is exhausted.\\nThen repeat the sequence indefinitely.",tp$new(t,i){Sk.abstr.checkOneArg("cycle",t,i);const r=Sk.abstr.iter(t[0]);if(this===e.cycle.prototype)return new e.cycle(r);{const t=new this.constructor;return e.cycle.call(t,r),t}}}}),e.dropwhile=Sk.abstr.buildIteratorClass("itertools.dropwhile",{constructor:function dropwhile(t,e){this.predicate=t,this.iter=e,this.passed},iternext(){let t=this.iter.tp$iternext();for(;void 0===this.passed&&void 0!==t;){const e=Sk.misceval.callsimArray(this.predicate,[t]);if(!Sk.misceval.isTrue(e))return this.passed=!0,t;t=this.iter.tp$iternext()}return t},slots:{tp$doc:"dropwhile(predicate, iterable) --\\x3e dropwhile object\\n\\nDrop items from the iterable while predicate(item) is true.\\nAfterwards, return every element until the iterable is exhausted.",tp$new(t,i){Sk.abstr.checkNoKwargs("dropwhile",i),Sk.abstr.checkArgsLen("dropwhile",t,2,2);const r=t[0],s=Sk.abstr.iter(t[1]);if(this===e.dropwhile.prototype)return new e.dropwhile(r,s);{const t=new this.constructor;return e.dropwhile.call(t,r,s),t}}}}),e.filterfalse=Sk.abstr.buildIteratorClass("itertools.filterfalse",{constructor:function filterfalse(t,e){this.predicate=t,this.iter=e},iternext(t){let e=this.iter.tp$iternext();if(void 0===e)return;let i=Sk.misceval.callsimArray(this.predicate,[e]);for(;Sk.misceval.isTrue(i);){if(e=this.iter.tp$iternext(),void 0===e)return;i=Sk.misceval.callsimArray(this.predicate,[e])}return e},slots:{tp$doc:"filterfalse(function or None, sequence) --\\x3e filterfalse object\\n\\nReturn those items of sequence for which function(item) is false.\\nIf function is None, return the items that are false.",tp$new(t,i){Sk.abstr.checkNoKwargs("filterfalse",i),Sk.abstr.checkArgsLen("filterfalse",t,2,2);const r=Sk.builtin.checkNone(t[0])?Sk.builtin.bool:t[0],s=Sk.abstr.iter(t[1]);if(this===e.filterfalse.prototype)return new e.filterfalse(r,s);{const t=new this.constructor;return e.filterfalse.call(t,r,s),t}}}}),e._grouper=Sk.abstr.buildIteratorClass("itertools._grouper",{constructor:function _grouper(t,e){this.groupby=t,this.tgtkey=t.tgtkey,this.id=t.id},iternext(t){const e=Sk.misceval.richCompareBool(this.groupby.currkey,this.tgtkey,"Eq");if(this.groupby.id===this.id&&e){let t=this.groupby.currval;return this.groupby.currval=this.groupby.iter.tp$iternext(),void 0!==this.groupby.currval&&(this.groupby.currkey=Sk.misceval.callsimArray(this.groupby.keyf,[this.groupby.currval])),t}}}),e.groupby=Sk.abstr.buildIteratorClass("itertools.groupby",{constructor:function groupby(t,e){this.iter=t,this.keyf=e,this.currval,this.currkey=this.tgtkey=new Sk.builtin.object,this.id},iternext(t){this.id=new Object;let i=Sk.misceval.richCompareBool(this.currkey,this.tgtkey,"Eq");for(;i;){if(this.currval=this.iter.tp$iternext(),void 0===this.currval)return;this.currkey=Sk.misceval.callsimArray(this.keyf,[this.currval]),i=Sk.misceval.richCompareBool(this.currkey,this.tgtkey,"Eq")}this.tgtkey=this.currkey;const r=new e._grouper(this);return new Sk.builtin.tuple([this.currkey,r])},slots:{tp$doc:"groupby(iterable, key=None) -> make an iterator that returns consecutive\\nkeys and groups from the iterable.  If the key function is not specified or\\nis None, the element itself is used for grouping.\\n",tp$new(t,i){let r,s;if([r,s]=Sk.abstr.copyKeywordsToNamedArgs("groupby",["iterable","key"],t,i,[Sk.builtin.none.none$]),r=Sk.abstr.iter(r),s=Sk.builtin.checkNone(s)?new Sk.builtin.func((t=>t)):s,this===e.groupby.prototype)return new e.groupby(r,s);{const t=new this.constructor;return e.groupby.call(t,r,s),t}}}}),e.islice=Sk.abstr.buildIteratorClass("itertools.islice",{constructor:function islice(t,e,i,r){this.iter=t,this.previt=e,this.stop=i,this.step=r,this.tp$iternext=()=>{if(this.tp$iternext=this.constructor.prototype.tp$iternext,!(this.previt>=this.stop)){for(let t=0;t<this.previt;t++)this.iter.tp$iternext();return this.iter.tp$iternext()}for(let t=0;t<this.stop;t++)this.iter.tp$iternext()}},iternext(t){if(!(this.previt+this.step>=this.stop)){for(let t=this.previt+1;t<this.previt+this.step;t++)this.iter.tp$iternext();return this.previt+=this.step,this.iter.tp$iternext()}for(let e=this.previt+1;e<this.stop;e++)this.previt+=this.step,this.iter.tp$iternext()},slots:{tp$doc:"islice(iterable, stop) --\\x3e islice object\\nislice(iterable, start, stop[, step]) --\\x3e islice object\\n\\nReturn an iterator whose next() method returns selected values from an\\niterable.  If start is specified, will skip all preceding elements;\\notherwise, start defaults to zero.  Step defaults to one.  If\\nspecified as another value, step determines how many values are \\nskipped between successive calls.  Works like a slice() on a list\\nbut returns an iterator.",tp$new(t,i){Sk.abstr.checkNoKwargs("islice",i),Sk.abstr.checkArgsLen("islice",t,2,4);const r=Sk.abstr.iter(t[0]);let s=t[1],n=t[2],o=t[3];if(void 0===n?(n=s,s=Sk.builtin.none.none$,o=Sk.builtin.none.none$):void 0===o&&(o=Sk.builtin.none.none$),!Sk.builtin.checkNone(n)&&!Sk.misceval.isIndex(n))throw new Sk.builtin.ValueError("Stop for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(n=Sk.builtin.checkNone(n)?Number.MAX_SAFE_INTEGER:Sk.misceval.asIndexSized(n),n<0||n>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.ValueError("Stop for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(!Sk.builtin.checkNone(s)&&!Sk.misceval.isIndex(s))throw new Sk.builtin.ValueError("Indices for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(s=Sk.builtin.checkNone(s)?0:Sk.misceval.asIndexSized(s),s<0||s>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.ValueError("Indices for islice() must be None or an integer: 0 <= x <= sys.maxsize.");if(!Sk.builtin.checkNone(o)&&!Sk.misceval.isIndex(o))throw new Sk.builtin.ValueError("Step for islice() must be a positive integer or None");if(o=Sk.builtin.checkNone(o)?1:Sk.misceval.asIndexSized(o),o<=0||o>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.ValueError("Step for islice() must be a positive integer or None.");if(this===e.islice.prototype)return new e.islice(r,s,n,o);{const t=new this.constructor;return e.islice.call(t,r,s,n,o),t}}}}),e.permutations=Sk.abstr.buildIteratorClass("itertools.permutations",{constructor:function permutations(t,e){this.pool=t,this.r=e;const i=t.length;this.indices=new Array(i).fill().map(((t,e)=>e)),this.cycles=new Array(e).fill().map(((t,e)=>i-e)),this.n=i,this.tp$iternext=()=>{if(!(this.r>this.n))return this.tp$iternext=this.constructor.prototype.tp$iternext,new Sk.builtin.tuple(this.pool.slice(0,this.r))}},iternext(t){for(let e=this.r-1;e>=0;e--){if(this.cycles[e]--,0!=this.cycles[e]){const t=this.cycles[e];[this.indices[e],this.indices[this.n-t]]=[this.indices[this.n-t],this.indices[e]];const i=this.indices.map((t=>this.pool[t])).slice(0,this.r);return new Sk.builtin.tuple(i)}this.indices.push(this.indices.splice(e,1)[0]),this.cycles[e]=this.n-e}this.r=0},slots:{tp$doc:"permutations(iterable[, r]) --\\x3e permutations object\\n\\nReturn successive r-length permutations of elements in the iterable.\\n\\npermutations(range(3), 2) --\\x3e (0,1), (0,2), (1,0), (1,2), (2,0), (2,1)",tp$new(t,i){let r,s;[r,s]=Sk.abstr.copyKeywordsToNamedArgs("permutations",["iterable","r"],t,i,[Sk.builtin.none.none$]);const n=Sk.misceval.arrayFromIterable(r);if(s=Sk.builtin.checkNone(s)?n.length:Sk.misceval.asIndexSized(s,Sk.builtin.OverFlowError),s<0)throw new Sk.builtin.ValueError("r must be non-negative");if(this===e.permutations.prototype)return new e.permutations(n,s);{const t=new this.constructor;return e.permutations.call(t,n,s),t}}}}),e.product=Sk.abstr.buildIteratorClass("itertools.product",{constructor:function product(t){this.pools=t,this.n=t.length,this.indices=Array(t.length).fill(0),this.pool_sizes=t.map((t=>t.length)),this.tp$iternext=()=>{this.tp$iternext=this.constructor.prototype.tp$iternext;const t=this.indices.map(((t,e)=>this.pools[e][this.indices[e]]));if(!t.some((t=>void 0===t)))return new Sk.builtin.tuple(t);this.n=0}},iternext(t){let e=this.n-1;for(;e>=0&&e<this.n;)this.indices[e]++,this.indices[e]>=this.pool_sizes[e]?(this.indices[e]=-1,e--):e++;if(this.n&&!this.indices.every((t=>-1===t))){const t=this.indices.map(((t,e)=>this.pools[e][this.indices[e]]));return new Sk.builtin.tuple(t)}this.n=0},slots:{tp$doc:"product(*iterables, repeat=1) --\\x3e product object\\n\\nCartesian product of input iterables.  Equivalent to nested for-loops.\\n\\nFor example, product(A, B) returns the same as:  ((x,y) for x in A for y in B).\\nThe leftmost iterators are in the outermost for-loop, so the output tuples\\ncycle in a manner similar to an odometer (with the rightmost element changing\\non every iteration).\\n\\nTo compute the product of an iterable with itself, specify the number\\nof repetitions with the optional repeat keyword argument. For example,\\nproduct(A, repeat=4) means the same as product(A, A, A, A).\\n\\nproduct('ab', range(3)) --\\x3e ('a',0) ('a',1) ('a',2) ('b',0) ('b',1) ('b',2)\\nproduct((0,1), (0,1), (0,1)) --\\x3e (0,0,0) (0,0,1) (0,1,0) (0,1,1) (1,0,0) ...",tp$new(t,i){let[r]=Sk.abstr.copyKeywordsToNamedArgs("product",["repeat"],[],i,[new Sk.builtin.int_(1)]);if(r=Sk.misceval.asIndexSized(r,Sk.builtin.OverFlowError),r<0)throw new Sk.builtin.ValueError("repeat argument cannot be negative");const s=[];for(let e=0;e<t.length;e++)s.push(Sk.misceval.arrayFromIterable(t[e]));const n=[].concat(...Array(r).fill(s));if(this===e.product.prototype)return new e.product(n);{const t=new this.constructor;return e.product.call(t,n),t}}}}),e.repeat=Sk.abstr.buildIteratorClass("itertools.repeat",{constructor:function repeat(t,e){this.object=t,this.times=e,void 0===e&&(this.tp$iternext=()=>this.object)},iternext(t){return this.times-- >0?this.object:void 0},slots:{tp$doc:"repeat(object [,times]) -> create an iterator which returns the object\\nfor the specified number of times.  If not specified, returns the object\\nendlessly.",tp$new(t,i){let r,s;if([r,s]=Sk.abstr.copyKeywordsToNamedArgs("repeat",["object","times"],t,i,[null]),s=null!==s?Sk.misceval.asIndexSized(s,Sk.builtin.OverFlowError):void 0,this===e.repeat.prototype)return new e.repeat(r,s);{const t=new this.constructor;return e.repeat.call(t,r,s),t}},$r(){const t=Sk.misceval.objectRepr(this.object),e=void 0===this.times?"":", "+(this.times>=0?this.times:0);return new Sk.builtin.str(Sk.abstr.typeName(this)+"("+t+e+")")}},methods:{__lenght_hint__:{$meth(){if(void 0===this.times)throw new Sk.builtin.TypeError("len() of unsized object");return new Sk.builtin.int_(this.times)},$flags:{NoArgs:!0},$textsig:null}}}),e.starmap=Sk.abstr.buildIteratorClass("itertools.starmap",{constructor:function starmap(t,e){this.func=t,this.iter=e},iternext(t){const e=this.iter.tp$iternext();if(void 0===e)return;const i=Sk.misceval.arrayFromIterable(e);return Sk.misceval.callsimArray(this.func,i)},slots:{tp$new(t,i){let r,s;if([r,s]=Sk.abstr.copyKeywordsToNamedArgs("starmap",["func","iterable"],t,i,[]),s=Sk.abstr.iter(s),r=Sk.builtin.checkNone(r)?Sk.builtin.bool:r,this===e.starmap.prototype)return new e.starmap(r,s);{const t=new this.constructor;return e.starmap.call(t,r,s),t}}}}),e.takewhile=Sk.abstr.buildIteratorClass("itertools.takewhile",{constructor:function takewhile(t,e){this.predicate=t,this.iter=e},iternext(){const t=this.iter.tp$iternext();if(void 0!==t){const e=Sk.misceval.callsimArray(this.predicate,[t]);if(Sk.misceval.isTrue(e))return t;this.tp$iternext=()=>{}}},slots:{tp$doc:"takewhile(predicate, iterable) --\\x3e takewhile object\\n\\nReturn successive entries from an iterable as long as the \\npredicate evaluates to true for each entry.",tp$new(t,i){Sk.abstr.checkNoKwargs("takewhile",i),Sk.abstr.checkArgsLen("takewhile",t,2,2);const r=t[0],s=Sk.abstr.iter(t[1]);if(this===e.takewhile.prototype)return new e.takewhile(r,s);{const t=new this.constructor;return e.takewhile.call(t,r,s),t}}}}),e.tee=new Sk.builtin.func((function(){throw new Sk.builtin.NotImplementedError("tee is not yet implemented in Skulpt")})),e.zip_longest=Sk.abstr.buildIteratorClass("itertools.zip_longest",{constructor:function zip_longest(t,e){this.iters=t,this.fillvalue=e,this.active=this.iters.length},iternext(t){if(!this.active)return;let i;const r=[];for(let s=0;s<this.iters.length;s++){if(i=this.iters[s].tp$iternext(),void 0===i){if(this.active--,!this.active)return;this.iters[s]=new e.repeat(this.fillvalue),i=this.fillvalue}r.push(i)}return new Sk.builtin.tuple(r)},slots:{tp$doc:"zip_longest(iter1 [,iter2 [...]], [fillvalue=None]) --\\x3e zip_longest object\\n\\nReturn a zip_longest object whose .__next__() method returns a tuple where\\nthe i-th element comes from the i-th iterable argument.  The .__next__()\\nmethod continues until the longest iterable in the argument sequence\\nis exhausted and then it raises StopIteration.  When the shorter iterables\\nare exhausted, the fillvalue is substituted in their place.  The fillvalue\\ndefaults to None or can be specified by a keyword argument.\\n",tp$new(t,i){const[r]=Sk.abstr.copyKeywordsToNamedArgs("zip_longest",["fillvalue"],[],i,[Sk.builtin.none.none$]),s=[];for(let e=0;e<t.length;e++)s.push(Sk.abstr.iter(t[e]));if(this===e.zip_longest.prototype)return new e.zip_longest(s,r);{const t=new this.constructor;return e.zip_longest.call(t,s,r),t}}}}),e.__doc__=new Sk.builtin.str("An implementation of the python itertools module in Skulpt"),e.__package__=new Sk.builtin.str(""),e};`,"src/lib/keyword.js":'function $builtinmodule(){const{ffi:{remapToPy:t},builtin:{frozenset:e,str:s}}=Sk,i=new s("keyword"),n=t(["iskeyword","issoftkeyword","kwlist","softkwlist"]),o=t(["False","None","True","and","as","assert","async","await","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","nonlocal","not","or","pass","raise","return","try","while","with","yield"]),a=t(["_","case","match"]);return{__name__:i,__all__:n,kwlist:o,softkwlist:a,iskeyword:new e(o).tp$getattr(s.$contains),issoftkeyword:new e(a).tp$getattr(s.$contains)}}',"src/lib/math.js":`const $builtinmodule=function(e){const t={pi:new Sk.builtin.float_(Math.PI),e:new Sk.builtin.float_(Math.E),tau:new Sk.builtin.float_(2*Math.PI),nan:new Sk.builtin.float_(NaN),inf:new Sk.builtin.float_(1/0)};const get_sign=function(e){return e=e?e<0?-1:1:1/e<0?-1:1};function factorial(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let t=Sk.builtin.asnum$(e);if((e=Math.floor(t))!=t)throw new Sk.builtin.ValueError("factorial() only accepts integral values");if(e<0)throw new Sk.builtin.ValueError("factorial() not defined for negative numbers");let n=1;for(let i=2;i<=e&&i<=18;i++)n*=i;if(e<=18)return new Sk.builtin.int_(n);n=JSBI.BigInt(n);for(let i=19;i<=e;i++)n=JSBI.multiply(n,JSBI.BigInt(i));return new Sk.builtin.int_(n)}function _gcd_internal(e,t){let n;return"number"==typeof e&&"number"==typeof t?(n=function _gcd(e,t){return 0==t?e:_gcd(t,e%t)}(e=Math.abs(e),t=Math.abs(t)),n=n<0?-n:n):(n=function _biggcd(e,t){return JSBI.equal(t,JSBI.__ZERO)?e:_biggcd(t,JSBI.remainder(e,t))}(e=JSBI.BigInt(e),t=JSBI.BigInt(t)),JSBI.lessThan(n,JSBI.__ZERO)&&(n=JSBI.multiply(n,JSBI.BigInt(-1)))),n}return Sk.abstr.setUpModuleMethods("math",t,{acos:{$meth:function acos(e){return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(e)),new Sk.builtin.float_(Math.acos(Sk.builtin.asnum$(e)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the arc cosine (measured in radians) of x."},acosh:{$meth:function acosh(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=(e=Sk.builtin.asnum$(e))+Math.sqrt(e*e-1);return new Sk.builtin.float_(Math.log(t))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the inverse hyperbolic cosine of x."},asin:{$meth:function asin(e){return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(e)),new Sk.builtin.float_(Math.asin(Sk.builtin.asnum$(e)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the arc sine (measured in radians) of x."},asinh:{$meth:function asinh(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=(e=Sk.builtin.asnum$(e))+Math.sqrt(e*e+1);return new Sk.builtin.float_(Math.log(t))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the inverse hyperbolic sine of x."},atan:{$meth:function atan(e){return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(e)),new Sk.builtin.float_(Math.atan(Sk.builtin.asnum$(e)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the arc tangent (measured in radians) of x."},atan2:{$meth:function atan2(e,t){return Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(t)),new Sk.builtin.float_(Math.atan2(Sk.builtin.asnum$(e),Sk.builtin.asnum$(t)))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, y, x, /)",$doc:"Return the arc tangent (measured in radians) of y/x.\\n\\nUnlike atan(y/x), the signs of both x and y are considered."},atanh:{$meth:function atanh(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=(1+(e=Sk.builtin.asnum$(e)))/(1-e);return new Sk.builtin.float_(Math.log(t)/2)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the inverse hyperbolic tangent of x."},ceil:{$meth:function ceil(e){Sk.builtin.pyCheckType("","real number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e);return Sk.__future__.ceil_floor_int?new Sk.builtin.int_(Math.ceil(t)):new Sk.builtin.float_(Math.ceil(t))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the ceiling of x as an Integral.\\n\\nThis is the smallest integer >= x."},comb:{$meth:function comb(e,t){let n=Sk.misceval.asIndexOrThrow(e),i=Sk.misceval.asIndexOrThrow(t);if(n<0)throw new Sk.builtin.ValueError("n must be an non-negative integer");if(i<0)throw new Sk.builtin.ValueError("k must be a non-negative integer");if(i>e)return new Sk.builtin.int_(0);e=new Sk.builtin.int_(n),t=new Sk.builtin.int_(i);let r=Sk.ffi.remapToJs(e.nb$subtract(t));if(r<i&&(i=r),0===i)return new Sk.builtin.int_(1);if(i>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError("min(n - k, k) must not exceed "+Number.MAX_SAFE_INTEGER);const u=new Sk.builtin.int_(1);let l=e;for(let o=1;o<i;o++)e=e.nb$subtract(u),r=new Sk.builtin.int_(o+1),l=l.nb$multiply(e),l=l.nb$floor_divide(r);return l},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, n, k=None, /)",$doc:"Number of ways to choose k items from n items without repetition and with order.\\n\\nEvaluates to n! / (n - k)! when k <= n and evaluates\\nto zero when k > n.\\n\\nIf k is not specified or is None, then k defaults to n\\nand the function returns n!.\\n\\nRaises TypeError if either of the arguments are not integers.\\nRaises ValueError if either of the arguments are negative."},copysign:{$meth:function copysign(e,t){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(t));const n=Sk.builtin.asnum$(t),i=Sk.builtin.asnum$(e),r=get_sign(i)*get_sign(n);return new Sk.builtin.float_(i*r)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return a float with the magnitude (absolute value) of x but the sign of y.\\n\\nOn platforms that support signed zeros, copysign(1.0, -0.0)\\nreturns -1.0.\\n"},cos:{$meth:function cos(e){return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(e)),new Sk.builtin.float_(Math.cos(Sk.builtin.asnum$(e)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the cosine of x (measured in radians)."},cosh:{$meth:function cosh(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),e=Sk.builtin.asnum$(e);const t=Math.E,n=Math.pow(t,e),i=(n+1/n)/2;return new Sk.builtin.float_(i)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the hyperbolic cosine of x."},degrees:{$meth:function degrees(e){Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(e));const t=180/Math.PI*Sk.builtin.asnum$(e);return new Sk.builtin.float_(t)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Convert angle x from radians to degrees."},erf:{$meth:function erf(e){throw new Sk.builtin.NotImplementedError("math.erf() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Error function at x."},erfc:{$meth:function erfc(e){throw new Sk.builtin.NotImplementedError("math.erfc() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Complementary error function at x."},exp:{$meth:function exp(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let t=e.v;if("number"!=typeof t&&(t=e.nb$float().v),t==1/0||t==-1/0||isNaN(t))return new Sk.builtin.float_(Math.exp(t));const n=Math.exp(t);if(!isFinite(n))throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(n)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return e raised to the power of x."},expm1:{$meth:function expm1(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e);if(Math.abs(t)<.7){const e=Math.exp(t);if(1==e)return new Sk.builtin.float_(t);{const n=(e-1)*t/Math.log(e);return new Sk.builtin.float_(n)}}{const e=Math.exp(t)-1;return new Sk.builtin.float_(e)}},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return exp(x)-1.\\n\\nThis function avoids the loss of precision involved in the direct evaluation of exp(x)-1 for small x."},fabs:{$meth:function fabs(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let t=e.v;return JSBI.__isBigInt(t)&&(t=e.nb$float().v),t=Math.abs(t),new Sk.builtin.float_(t)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the absolute value of the float x."},factorial:{$meth:factorial,$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Find x!.\\n\\nRaise a ValueError if x is negative or non-integral."},floor:{$meth:function floor(e){return Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.__future__.ceil_floor_int?new Sk.builtin.int_(Math.floor(Sk.builtin.asnum$(e))):new Sk.builtin.float_(Math.floor(Sk.builtin.asnum$(e)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the floor of x as an Integral.\\n\\nThis is the largest integer <= x."},fmod:{$meth:function fmod(e,t){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(t));let n=e.v,i=t.v;if("number"!=typeof n&&(n=e.nb$float().v),"number"!=typeof i&&(i=t.nb$float().v),(i==1/0||i==-1/0)&&isFinite(n))return new Sk.builtin.float_(n);const r=n%i;if(isNaN(r)&&!isNaN(n)&&!isNaN(i))throw new Sk.builtin.ValueError("math domain error");return new Sk.builtin.float_(r)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return fmod(x, y), according to platform C.\\n\\nx % y may differ."},frexp:{$meth:function frexp(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e),n=[t,0];if(0!==t&&Number.isFinite(t)){const e=Math.abs(t);let i=Math.max(-1023,Math.floor(Math.log2(e))+1),r=e*Math.pow(2,-i);for(;r<.5;)r*=2,i--;for(;r>=1;)r*=.5,i++;t<0&&(r=-r),n[0]=r,n[1]=i}return n[0]=new Sk.builtin.float_(n[0]),n[1]=new Sk.builtin.int_(n[1]),new Sk.builtin.tuple(n)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the mantissa and exponent of x, as pair (m, e).\\n\\nm is a float and e is an int, such that x = m * 2.**e.\\nIf x is 0, m and e are both 0.  Else 0.5 <= abs(m) < 1.0."},fsum:{$meth:function fsum(e){if(!Sk.builtin.checkIterable(e))throw new Sk.builtin.TypeError("'"+Sk.abstr.typeName(e)+"' object is not iterable");let t,n,i,r=[];for(let l=(e=Sk.abstr.iter(e)).tp$iternext();void 0!==l;l=e.tp$iternext()){Sk.builtin.pyCheckType("","real number",Sk.builtin.checkNumber(l)),t=0;let e=l.v;"number"!=typeof e&&(e=l.nb$float().v),l=e;for(let u=0,o=r.length;u<o;u++){let e=r[u];if(Math.abs(l)<Math.abs(e)){let t=l;l=e,e=t}n=l+e,i=e-(n-l),i&&(r[t]=i,t++),l=n}r=r.slice(0,t).concat([l])}const u=r.reduce((function(e,t){return e+t}),0);return new Sk.builtin.float_(u)},$flags:{OneArg:!0},$textsig:"($module, seq, /)",$doc:"Return an accurate floating point sum of values in the iterable seq.\\n\\nAssumes IEEE-754 floating point arithmetic."},gamma:{$meth:function gamma(e){throw new Sk.builtin.NotImplementedError("math.gamma() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Gamma function at x."},gcd:{$meth:function gcd(e,t){Sk.builtin.pyCheckType("a","integer",Sk.builtin.checkInt(e)),Sk.builtin.pyCheckType("b","integer",Sk.builtin.checkInt(t));const n=_gcd_internal(Sk.builtin.asnum$(e),Sk.builtin.asnum$(t));return"number"==typeof n?new Sk.builtin.int_(n):new Sk.builtin.int_(n.toString())},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"greatest common divisor of x and y"},hypot:{$meth:function hypot(e,t){return Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(t)),e=Sk.builtin.asnum$(e),t=Sk.builtin.asnum$(t),new Sk.builtin.float_(Math.sqrt(e*e+t*t))},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return the Euclidean distance, sqrt(x*x + y*y)."},isclose:{$meth:function isclose(e,t){Sk.abstr.checkArgsLen("isclose",e,2,2);const n=Sk.abstr.copyKeywordsToNamedArgs("isclose",["rel_tol","abs_tol"],[],t,[new Sk.builtin.float_(1e-9),new Sk.builtin.float_(0)]),i=e[0],r=e[1],u=n[0],l=n[1];Sk.builtin.pyCheckType("a","number",Sk.builtin.checkNumber(i)),Sk.builtin.pyCheckType("b","number",Sk.builtin.checkNumber(r)),Sk.builtin.pyCheckType("rel_tol","number",Sk.builtin.checkNumber(u)),Sk.builtin.pyCheckType("abs_tol","number",Sk.builtin.checkNumber(l));const o=Sk.builtin.asnum$(i),a=Sk.builtin.asnum$(r),s=Sk.builtin.asnum$(u),b=Sk.builtin.asnum$(l);if(s<0||b<0)throw new Sk.builtin.ValueError("tolerances must be non-negative");if(o==a)return Sk.builtin.bool.true$;if(o==1/0||o==-1/0||a==1/0||a==-1/0)return Sk.builtin.bool.false$;const c=Math.abs(a-o),m=c<=Math.abs(s*a)||c<=Math.abs(s*o)||c<=b;return new Sk.builtin.bool(m)},$flags:{FastCall:!0},$textsig:"($module, /, a, b, *, rel_tol=1e-09, abs_tol=0.0)",$doc:'Determine whether two floating point numbers are close in value.\\n\\n  rel_tol\\n    maximum difference for being considered "close", relative to the\\n    magnitude of the input values\\n  abs_tol\\n    maximum difference for being considered "close", regardless of the\\n    magnitude of the input values\\n\\nReturn True if a is close in value to b, and False otherwise.\\n\\nFor the values to be considered close, the difference between them\\nmust be smaller than at least one of the tolerances.\\n\\n-inf, inf and NaN behave similarly to the IEEE 754 Standard.  That\\nis, NaN is not close to anything, even itself.  inf and -inf are\\nonly close to themselves.'},isfinite:{$meth:function isfinite(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e);return Sk.builtin.checkInt(e)||isFinite(t)?Sk.builtin.bool.true$:Sk.builtin.bool.false$},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return True if x is neither an infinity nor a NaN, and False otherwise."},isinf:{$meth:function isinf(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e);return Sk.builtin.checkInt(e)||isFinite(t)||isNaN(t)?Sk.builtin.bool.false$:Sk.builtin.bool.true$},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return True if x is a positive or negative infinity, and False otherwise."},isnan:{$meth:function isnan(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e);return isNaN(t)?Sk.builtin.bool.true$:Sk.builtin.bool.false$},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return True if x is a NaN (not a number), and False otherwise."},isqrt:{$meth:function isqrt(e){let t=Sk.misceval.asIndexOrThrow(e);if(t<0)throw new Sk.builtin.ValueError("isqrt() argument must be nonnegative");return 0==t?new Sk.builtin.int_(0):"number"==typeof t?new Sk.builtin.int_(Math.floor(Math.sqrt(t))):function bigint_isqrt(e){let t=e.toString(2).length;t=Math.floor((t-1)/2);let n=t.toString(2).length;const i=JSBI.BigInt(1),r=JSBI.BigInt(2),u=JSBI.BigInt(t),l=JSBI.multiply(r,u);let o=i,a=JSBI.BigInt(0);for(;n>0;){n--;let t=a;a=JSBI.signedRightShift(u,JSBI.BigInt(n));const r=JSBI.subtract(JSBI.subtract(a,t),i),s=JSBI.leftShift(o,r),b=JSBI.add(JSBI.subtract(JSBI.subtract(l,t),a),i),c=JSBI.signedRightShift(e,b);o=JSBI.add(s,JSBI.divide(c,o))}let s=o;return JSBI.greaterThan(JSBI.multiply(s,s),e)&&(s=JSBI.subtract(s,i)),JSBI.lessThanOrEqual(s,JSBI.BigInt(Number.MAX_SAFE_INTEGER))&&(s=Number(s)),new Sk.builtin.int_(s)}(t)},$flags:{OneArg:!0},$textsig:"($module, n, /)",$doc:"Return the integer part of the square root of the input."},lcm:{$meth:function lcm(...e){function abs(e){return"number"==typeof e?new Sk.builtin.int_(Math.abs(e)):JSBI.lessThan(e,JSBI.__ZERO)?new Sk.builtin.int_(JSBI.unaryMinus(e)):new Sk.builtin.int_(e)}const t=e.length;if(0===t)return new Sk.builtin.int_(1);let n;for(n=0;n<t;++n)e[n]=Sk.misceval.asIndexOrThrow(e[n]);let i,r=e[0];if(1===t)return abs(r);for(n=1;n<t;++n){if(i=e[n],0===i)return new Sk.builtin.int_(0);if("number"==typeof r&&"number"==typeof i){let e=r/_gcd_internal(r,i)*i;e=Math.abs(e),r=e>Number.MAX_SAFE_INTEGER?JSBI.BigInt(r):e}else r=JSBI.BigInt(r);"number"!=typeof r&&(i=JSBI.BigInt(i),r=JSBI.multiply(JSBI.divide(r,_gcd_internal(r,i)),i))}return abs(r)},$flags:{MinArgs:0},$textsig:"($module, *integers, /)",$doc:"Return the least common multiple of the specified integer arguments. If all arguments are nonzero, then the returned value is the smallest positive integer that is a multiple of all arguments. If any of the arguments is zero, then the returned value is 0. lcm() without arguments returns 1."},ldexp:{$meth:function ldexp(e,t){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("i","integer",Sk.builtin.checkInt(t));let n=e.v;"number"!=typeof n&&(n=e.nb$float().v);const i=Sk.builtin.asnum$(t);if(n==1/0||n==-1/0||0==n||isNaN(n))return new Sk.builtin.float_(n);const r=n*Math.pow(2,i);if(!isFinite(r))throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(r)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, i, /)",$doc:"Return x * (2**i).\\n\\nThis is essentially the inverse of frexp()."},lgamma:{$meth:function lgamma(e){throw new Sk.builtin.NotImplementedError("math.lgamma() is not yet implemented in Skulpt")},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Natural logarithm of absolute value of Gamma function at x."},log:{$meth:function log(e,t){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let n,i,r=Sk.builtin.asnum$(e);if(r<=0)throw new Sk.builtin.ValueError("math domain error");if(void 0===t?n=Math.E:(Sk.builtin.pyCheckType("base","number",Sk.builtin.checkNumber(t)),n=Sk.builtin.asnum$(t)),n<=0)throw new Sk.builtin.ValueError("math domain error");if(Sk.builtin.checkFloat(e)||r<Number.MAX_SAFE_INTEGER)i=Math.log(r)/Math.log(n);else{r=new Sk.builtin.str(e).$jsstr();const t=r.length,u=parseFloat("0."+r);i=(t*Math.log(10)+Math.log(u))/Math.log(n)}return new Sk.builtin.float_(i)},$flags:{MinArgs:1,MaxArgs:2},$textsig:null,$doc:"log(x, [base=e])\\nReturn the logarithm of x to the given base.\\n\\nIf the base not specified, returns the natural logarithm (base e) of x."},log10:{$meth:function log10(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let t,n=Sk.builtin.asnum$(e);if(n<=0)throw new Sk.builtin.ValueError("math domain error");if(Sk.builtin.checkFloat(e)||n<Number.MAX_SAFE_INTEGER)t=Math.log10(n);else{n=new Sk.builtin.str(e).$jsstr();const i=n.length,r=parseFloat("0."+n);t=i+Math.log10(r)}return new Sk.builtin.float_(t)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the base 10 logarithm of x."},log1p:{$meth:function log1p(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let t=e.v;if("number"!=typeof t&&(t=e.nb$float().v),t<=-1)throw new Sk.builtin.ValueError("math domain error");if(0==t)return new Sk.builtin.float_(t);if(Math.abs(t)<Number.EPSILON/2)return new Sk.builtin.float_(t);if(-.5<=t&&t<=1){const e=1+t,n=Math.log(e)-(e-1-t)/e;return new Sk.builtin.float_(n)}{const e=Math.log(1+t);return new Sk.builtin.float_(e)}},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the natural logarithm of 1+x (base e).\\n\\nThe result is computed in a way which is accurate for x near zero."},log2:{$meth:function log2(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let t,n=Sk.builtin.asnum$(e);if(n<=0)throw new Sk.builtin.ValueError("math domain error");if(Sk.builtin.checkFloat(e)||n<Number.MAX_SAFE_INTEGER)t=Math.log2(n);else{n=new Sk.builtin.str(e).$jsstr();const i=n.length,r=parseFloat("0."+n);t=i*Math.log2(10)+Math.log2(r)}return new Sk.builtin.float_(t)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the base 2 logarithm of x."},modf:{$meth:function modf(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));let t=Sk.builtin.asnum$(e);if(!isFinite(t)){if(t==1/0)return new Sk.builtin.tuple([new Sk.builtin.float_(0),new Sk.builtin.float_(t)]);if(t==-1/0)return new Sk.builtin.tuple([new Sk.builtin.float_(-0),new Sk.builtin.float_(t)]);if(isNaN(t))return new Sk.builtin.tuple([new Sk.builtin.float_(t),new Sk.builtin.float_(t)])}const n=get_sign(t);t=Math.abs(t);const i=n*Math.floor(t),r=n*(t-Math.floor(t));return new Sk.builtin.tuple([new Sk.builtin.float_(r),new Sk.builtin.float_(i)])},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the fractional and integer parts of x.\\n\\nBoth results carry the sign of x and are floats."},perm:{$meth:function perm(e,t){if(void 0===t||Sk.builtin.checkNone(t))return factorial(e);if(e=Sk.misceval.asIndexOrThrow(e),t=Sk.misceval.asIndexOrThrow(t),e<0)throw new Sk.builtin.ValueError("n must be an non-negative integer");if(t<0)throw new Sk.builtin.ValueError("k must be a non-negative integer");if(t>e)return new Sk.builtin.int_(0);if(0===t)return new Sk.builtin.int_(1);if(t>Number.MAX_SAFE_INTEGER)throw new Sk.builtin.OverflowError("k must not exceed "+Number.MAX_SAFE_INTEGER);const n=new Sk.builtin.int_(1);let i=e=new Sk.builtin.int_(e);for(let r=1;r<t;r++)e=e.nb$subtract(n),i=i.nb$multiply(e);return i},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($module, n, k=None, /)",$doc:"'Number of ways to choose k items from n items without repetition and with order.\\n\\nEvaluates to n! / (n - k)! when k <= n and evaluates\\nto zero when k > n.\\n\\nIf k is not specified or is None, then k defaults to n\\nand the function returns n!.\\n\\nRaises TypeError if either of the arguments are not integers.\\nRaises ValueError if either of the arguments are negative.'"},prod:{$meth:function prod(e,t){Sk.abstr.checkArgsLen("prod",e,1,1),e=Sk.abstr.copyKeywordsToNamedArgs("prod",[null,"start"],e,t,[new Sk.builtin.int_(1)]);const n=Sk.abstr.iter(e[0]);let i,r=e[1];return i=r.constructor===Sk.builtin.int_?function fastProdInt(){return Sk.misceval.iterFor(n,(e=>{if(e.constructor!==Sk.builtin.int_)return e.constructor===Sk.builtin.float_?(r=r.nb$float().nb$multiply(e),new Sk.misceval.Break("float")):(r=Sk.abstr.numberBinOp(r,e,"Mult"),new Sk.misceval.Break("slow"));r=r.nb$multiply(e)}))}():r.constructor===Sk.builtin.float_?"float":"slow",Sk.misceval.chain(i,(e=>"float"===e?function fastProdFloat(){return Sk.misceval.iterFor(n,(e=>{if(e.constructor!==Sk.builtin.float_&&e.constructor!==Sk.builtin.int_)return r=Sk.abstr.numberBinOp(r,e,"Mult"),new Sk.misceval.Break("slow");r=r.nb$multiply(e)}))}():e),(e=>{if("slow"===e)return function slowProd(){return Sk.misceval.iterFor(n,(e=>{r=Sk.abstr.numberBinOp(r,e,"Mult")}))}()}),(()=>r))},$flags:{FastCall:!0},$textsig:"($module, iterable, /, *, start=1)",$doc:"Calculate the product of all the elements in the input iterable. The default start value for the product is 1.\\n\\nWhen the iterable is empty, return the start value. This function is intended specifically for use with numeric values and may reject non-numeric types."},pow:{$meth:function pow(e,t){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(t));let n=e.v,i=t.v;if("number"!=typeof n&&(n=e.nb$float().v),"number"!=typeof i&&(i=t.nb$float().v),0==n&&i<0)throw new Sk.builtin.ValueError("math domain error");if(1==n)return new Sk.builtin.float_(1);if(Number.isFinite(n)&&Number.isFinite(i)&&n<0&&!Number.isInteger(i))throw new Sk.builtin.ValueError("math domain error");if(-1==n&&(i==-1/0||i==1/0))return new Sk.builtin.float_(1);const r=Math.pow(n,i);if(!Number.isFinite(n)||!Number.isFinite(i))return new Sk.builtin.float_(r);if(r==1/0||r==-1/0)throw new Sk.builtin.OverflowError("math range error");return new Sk.builtin.float_(r)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Return x**y (x to the power of y)."},radians:{$meth:function radians(e){Sk.builtin.pyCheckType("deg","number",Sk.builtin.checkNumber(e));const t=Math.PI/180*Sk.builtin.asnum$(e);return new Sk.builtin.float_(t)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Convert angle x from degrees to radians."},remainder:{$meth:function remainder(e,t){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.builtin.pyCheckType("y","number",Sk.builtin.checkNumber(t));let n=e.v,i=t.v;if("number"!=typeof n&&(n=e.nb$float().v),"number"!=typeof i&&(i=t.nb$float().v),isFinite(n)&&isFinite(i)){let e,t,r,u,l;if(0==i)throw new Sk.builtin.ValueError("math domain error");if(e=Math.abs(n),t=Math.abs(i),u=e%t,r=t-u,u<r)l=u;else if(u>r)l=-r;else{if(u!=r)throw new Sk.builtin.AssertionError;l=u-.5*(e-u)%t*2}return new Sk.builtin.float_(get_sign(n)*l)}if(isNaN(n))return e;if(isNaN(i))return t;if(n==1/0||n==-1/0)throw new Sk.builtin.ValueError("math domain error");if(i!=1/0&&i!=-1/0)throw new Sk.builtin.AssertionError;return new Sk.builtin.float_(n)},$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, x, y, /)",$doc:"Difference between x and the closest integer multiple of y.\\n\\nReturn x - n*y where n*y is the closest integer multiple of y.\\nIn the case where x is exactly halfway between two multiples of\\ny, the nearest even value of n is used. The result is always exact."},sin:{$meth:function sin(e){return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(e)),new Sk.builtin.float_(Math.sin(Sk.builtin.asnum$(e)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the sine of x (measured in radians)."},sinh:{$meth:function sinh(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),e=Sk.builtin.asnum$(e);const t=Math.E,n=Math.pow(t,e),i=(n-1/n)/2;return new Sk.builtin.float_(i)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the hyperbolic sine of x."},sqrt:{$meth:function sqrt(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e);if(t<0)throw new Sk.builtin.ValueError("math domain error");return new Sk.builtin.float_(Math.sqrt(t))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the square root of x."},tan:{$meth:function tan(e){return Sk.builtin.pyCheckType("rad","number",Sk.builtin.checkNumber(e)),new Sk.builtin.float_(Math.tan(Sk.builtin.asnum$(e)))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the tangent of x (measured in radians)."},tanh:{$meth:function tanh(e){Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e));const t=Sk.builtin.asnum$(e);if(0===t)return new Sk.builtin.float_(t);const n=Math.E,i=Math.pow(n,t),r=1/i,u=(i-r)/2/((i+r)/2);return new Sk.builtin.float_(u)},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Return the hyperbolic tangent of x."},trunc:{$meth:function trunc(e){return Sk.builtin.pyCheckType("x","number",Sk.builtin.checkNumber(e)),Sk.builtin.checkInt(e)?e:new Sk.builtin.int_(0|Sk.builtin.asnum$(e))},$flags:{OneArg:!0},$textsig:"($module, x, /)",$doc:"Truncates the Real x to the nearest Integral toward 0.\\n\\nUses the __trunc__ magic method."}}),t};`,"src/lib/operator.js":`function $builtinmodule(e){const{builtin:{str:t,tuple:a,list:r,int_:o,bool:n,TypeError:s,ValueError:i,none:{none$:m},NotImplemented:{NotImplemented$:d},abs:l,len:h,checkString:u,checkInt:c},abstr:{buildNativeClass:M,checkNoKwargs:b,checkArgsLen:g,checkOneArg:f,numberUnaryOp:p,numberBinOp:A,numberInplaceBinOp:k,objectGetItem:$,objectDelItem:_,objectSetItem:w,sequenceConcat:v,sequenceContains:x,sequenceGetCountOf:j,sequenceGetIndexOf:O,sequenceInPlaceConcat:I,typeName:S,lookupSpecial:y,gattr:q,setUpModuleMethods:R},misceval:{richCompareBool:B,asIndexOrThrow:N,chain:E,callsimArray:T,callsimOrSuspendArray:C,objectRepr:D},generic:{getAttr:G}}=Sk,L=["abs","add","and_","concat","contains","delitem","eq","floordiv","ge","getitem","gt","iadd","iand","iconcat","ifloordiv","ilshift","imatmul","imod","imul","index","inv","invert","ior","ipow","irshift","isub","itruediv","ixor","le","lshift","lt","matmul","mod","mul","ne","neg","not_","or_","pos","pow","rshift","setitem","sub","truediv","xor"],F=["attrgetter","countOf","indexOf","is_","is_not","itemgetter","length_hint","methodcaller","truth",...L].sort(),P={__name__:new t("operator"),__doc__:new t("Operator interface.\\n\\nThis module exports a set of functions implemented in javascript corresponding\\nto the intrinsic operators of Python.  For example, operator.add(x, y)\\nis equivalent to the expression x+y.  The function names are those\\nused for special methods; variants without leading and trailing\\n'__' are also provided for convenience."),__all__:new r(F.map((e=>new t(e))))};P.itemgetter=M("operator.itemgetter",{constructor:function itemgetter(e){this.items=e,this.oneitem=1===e.length,this.item=e[0],this.in$repr=!1},slots:{tp$getattr:G,tp$new:(e,t)=>(b("itemgetter",t),g("itemgetter",e,1),new P.itemgetter(e)),tp$call(e,t){f("itemgetter",e,t);const r=e[0];return this.oneitem?$(r,this.item,!0):new a(this.items.map((e=>$(r,e))))},tp$doc:"Return a callable object that fetches the given item(s) from its operand.\\n            After f = itemgetter(2), the call f(r) returns r[2].\\n            After g = itemgetter(2, 5, 3), the call g(r) returns (r[2], r[5], r[3])",$r(){if(this.in$repr)return new t(this.tp$name+"(...)");this.in$repr=!0;const e=this.tp$name+"("+this.items.map((e=>D(e))).join(", ")+")";return this.in$repr=!1,e}}}),P.attrgetter=M("operator.attrgetter",{constructor:function attrgetter(e){this.attrs=e,this.oneattr=1===e.length,this.attr=e[0],this.in$repr=!1},slots:{tp$getattr:G,tp$new(e,a){b("attrgetter",a),g("attrgetter",e,1);const r=[];for(let o=0;o<e.length;o++){const a=e[o];if(!u(a))throw new s("attribute name must be a string");const n=a.toString();n.includes(".")?r.push(n.split(".").map((e=>new t(e)))):r.push([a])}return new P.attrgetter(r)},tp$call(e,t){f("attrgetter",e,t);const r=e[0];if(this.oneattr)return this.attr.reduce(((e,t)=>q(e,t)),r);const o=this.attrs.map((e=>e.reduce(((e,t)=>q(e,t)),r)));return new a(o)},tp$doc:"attrgetter(attr, ...) --\\x3e attrgetter object\\n\\nReturn a callable object that fetches the given attribute(s) from its operand.\\nAfter f = attrgetter('name'), the call f(r) returns r.name.\\nAfter g = attrgetter('name', 'date'), the call g(r) returns (r.name, r.date).\\nAfter h = attrgetter('name.first', 'name.last'), the call h(r) returns\\n(r.name.first, r.name.last).",$r(){if(this.in$repr)return new t(this.tp$name+"(...)");this.in$repr=!0;const e=this.tp$name+"("+this.items.map((e=>D(e))).join(", ")+")";return this.in$repr=!1,e}}}),P.methodcaller=M("operator.methodcaller",{constructor:function methodcaller(e,t,a){this.$name=e,this.args=t,this.kwargs=a||[],this.in$repr=!1},slots:{tp$getattr:G,tp$new(e,t){g("methodcaller",e,1);const a=e[0];if(!u(a))throw new s("method name must be a string");return new P.methodcaller(a,e.slice(1),t)},tp$call(e,t){f("methodcaller",e,t);const a=e[0];return E(q(a,this.$name,!0),(e=>C(e,this.args,this.kwargs)))},tp$doc:"methodcaller(name, ...) --\\x3e methodcaller object\\n\\nReturn a callable object that calls the given method on its operand.\\nAfter f = methodcaller('name'), the call f(r) returns r.name().\\nAfter g = methodcaller('name', 'date', foo=1), the call g(r) returns\\nr.name('date', foo=1).",$r(){if(this.in$repr)return new t(this.tp$name+"(...)");this.in$repr=!0;let e=[D(this.$name)];e.push(...this.args.map((e=>D(e))));for(let t=0;t<this.kwargs.length;t+=2)e.push(this.kwargs[t]+"="+D(this.kwargs[t+1]));return e=this.tp$name+"("+e.join(", ")+")",this.in$repr=!1,e}}});const U={1:{$flags:{OneArg:!0},$textsig:"($module, a, /)"},2:{$flags:{MinArgs:2,MaxArgs:2},$textsig:"($module, a, b, /)"},3:{$flags:{MinArgs:3,MaxArgs:3},$textsig:"($module, a, b, c, /)"}};function makeModuleMethod(e,t){return{$meth:e,$doc:t,...U[e.length]}}function sameAs(e){return"Same as "+e+"."}return R("operator",P,{lt:makeModuleMethod(((e,t)=>n(B(e,t,"Lt"))),sameAs("a < b")),le:makeModuleMethod(((e,t)=>n(B(e,t,"LtE"))),sameAs("a <= b")),eq:makeModuleMethod(((e,t)=>n(B(e,t,"Eq"))),sameAs("a == b")),ne:makeModuleMethod(((e,t)=>n(B(e,t,"NotEq"))),sameAs("a != b")),ge:makeModuleMethod(((e,t)=>n(B(e,t,"GtE"))),sameAs("a >= b")),gt:makeModuleMethod(((e,t)=>n(B(e,t,"Gt"))),sameAs("a > b")),not_:makeModuleMethod((e=>p(e,"Not")),sameAs("not a")),truth:makeModuleMethod((e=>n(e)),"Return True if a is true, False otherwise."),is_:makeModuleMethod(((e,t)=>n(B(e,t,"Is"))),sameAs("a is b")),is_not:makeModuleMethod(((e,t)=>n(B(e,t,"IsNot"))),sameAs("a is not b")),abs:makeModuleMethod((e=>l(e)),sameAs("abs(a)")),add:makeModuleMethod(((e,t)=>A(e,t,"Add")),sameAs("a + b")),and_:makeModuleMethod(((e,t)=>A(e,t,"BitAnd")),sameAs("a & b")),floordiv:makeModuleMethod(((e,t)=>A(e,t,"FloorDiv")),sameAs("a // b")),index:makeModuleMethod((e=>new o(N(e))),sameAs("a.__index__()")),inv:makeModuleMethod((e=>p(e,"Invert")),sameAs("~a")),invert:makeModuleMethod((e=>p(e,"Invert")),sameAs("~a")),lshift:makeModuleMethod(((e,t)=>A(e,t,"LShift")),sameAs("a << b")),mod:makeModuleMethod(((e,t)=>A(e,t,"Mod")),sameAs("a % b")),mul:makeModuleMethod(((e,t)=>A(e,t,"Mult")),sameAs("a * b")),matmul:makeModuleMethod(((e,t)=>A(e,t,"MatMult")),sameAs("a @ b")),neg:makeModuleMethod((e=>p(e,"USub")),sameAs("-a")),or_:makeModuleMethod(((e,t)=>A(e,t,"BitOr")),sameAs("a | b")),pos:makeModuleMethod((e=>p(e,"UAdd")),sameAs("+a")),pow:makeModuleMethod(((e,t)=>A(e,t,"Pow")),sameAs("a ** b")),rshift:makeModuleMethod(((e,t)=>A(e,t,"RShift")),sameAs("a >> b")),sub:makeModuleMethod(((e,t)=>A(e,t,"Sub")),sameAs("a - b")),truediv:makeModuleMethod(((e,t)=>A(e,t,"Div")),sameAs("a / b")),xor:makeModuleMethod(((e,t)=>A(e,t,"BitXor")),sameAs("a ^ b")),concat:makeModuleMethod(((e,t)=>v(e,t)),sameAs("a + b, for a and b sequences")),contains:makeModuleMethod(((e,t)=>E(x(e,t),n)),sameAs("b in a (note reversed operands)")),countOf:makeModuleMethod(((e,t)=>j(e,t)),"Return thenumber of times b occurs in a."),delitem:makeModuleMethod(((e,t)=>E(_(e,t,!0),(()=>m))),sameAs("del a[b]")),getitem:makeModuleMethod(((e,t)=>$(e,t,!0)),sameAs("a[b]")),indexOf:makeModuleMethod(((e,t)=>O(e,t)),"Return the first index of b in a"),setitem:makeModuleMethod(((e,t,a)=>E(w(e,t,a,!0),(()=>m))),sameAs("a[b] = c")),length_hint:{$meth:function length_hint(e,a){if(void 0===a)a=new o(0);else if(!c(a))throw new s("'"+S(a)+"' object cannot be interpreted as an integer");try{return h(e)}catch(m){if(!(m instanceof s))throw m}const r=y(e,t.$length_hint);if(void 0===r)return a;let n;try{n=T(r,[])}catch(m){if(!(m instanceof s))throw m;return a}if(n===d)return a;if(!c(n))throw new s("__length_hint__ must be an integer, not "+S(n));if(n.nb$isnegative())throw new i("__length_hint__() should return >= 0");return n},$flags:{MinArgs:1,MaxArgs:2},$textsig:"($module, obj, default=0, /)",$doc:"Return an estimate of the number of items in obj.\\n\\nThis is useful for presizing containers when building from an iterable.\\n\\nIf the object supports len(), the result will be exact.\\nOtherwise, it may over- or under-estimate by an arbitrary amount.\\nThe result will be an integer >= 0."},iadd:makeModuleMethod(((e,t)=>k(e,t,"Add")),sameAs("a += b")),iand:makeModuleMethod(((e,t)=>k(e,t,"BitAnd")),sameAs("a &= b")),iconcat:makeModuleMethod(((e,t)=>I(e,t)),sameAs("a += b, for a and b sequences")),ifloordiv:makeModuleMethod(((e,t)=>k(e,t,"FloorDiv")),sameAs("a //= b")),ilshift:makeModuleMethod(((e,t)=>k(e,t,"LShift")),sameAs("a <<= b")),imod:makeModuleMethod(((e,t)=>k(e,t,"Mod")),sameAs("a %= b")),imul:makeModuleMethod(((e,t)=>k(e,t,"Mult")),sameAs("a *= b")),imatmul:makeModuleMethod(((e,t)=>k(e,t,"MatMult")),sameAs("a @= b")),ior:makeModuleMethod(((e,t)=>k(e,t,"BitOr")),sameAs("a |= b")),ipow:makeModuleMethod(((e,t)=>k(e,t,"Pow")),sameAs("a **= b")),irshift:makeModuleMethod(((e,t)=>k(e,t,"RShift")),sameAs("a >>= b")),isub:makeModuleMethod(((e,t)=>k(e,t,"Sub")),sameAs("a -= b")),itruediv:makeModuleMethod(((e,t)=>k(e,t,"Div")),sameAs("a /= b")),ixor:makeModuleMethod(((e,t)=>k(e,t,"BitXor")),sameAs("a ^= b"))}),L.forEach((e=>{P[\`__\${e.replace("_","")}__\`]=P[e]})),P.div=P.truediv,P.__div__=P.div,P}`,"src/lib/platform.js":'var $builtinmodule=function(n){var e={},i="undefined"!=typeof window&&"undefined"!=typeof window.navigator;return e.python_implementation=new Sk.builtin.func((function(){return Sk.builtin.pyCheckArgsLen("python_implementation",arguments.length,0,0),new Sk.builtin.str("Skulpt")})),e.node=new Sk.builtin.func((function(){return Sk.builtin.pyCheckArgsLen("node",arguments.length,0,0),new Sk.builtin.str("")})),e.version=new Sk.builtin.func((function(){return Sk.builtin.pyCheckArgsLen("version",arguments.length,0,0),new Sk.builtin.str("")})),e.python_version=new Sk.builtin.func((function(){var n;return Sk.builtin.pyCheckArgsLen("python_version",arguments.length,0,0),n=Sk.__future__.python_version?"3.2.0":"2.7.0",new Sk.builtin.str(n)})),e.system=new Sk.builtin.func((function(){var n;return Sk.builtin.pyCheckArgsLen("system",arguments.length,0,0),n=i?window.navigator.appCodeName:"",new Sk.builtin.str(n)})),e.machine=new Sk.builtin.func((function(){var n;return Sk.builtin.pyCheckArgsLen("machine",arguments.length,0,0),n=i?window.navigator.platform:"",new Sk.builtin.str(n)})),e.release=new Sk.builtin.func((function(){var n;return Sk.builtin.pyCheckArgsLen("release",arguments.length,0,0),n=i?window.navigator.appVersion:"",new Sk.builtin.str(n)})),e.architecture=new Sk.builtin.func((function(){return Sk.builtin.pyCheckArgsLen("architecture",arguments.length,0,0),new Sk.builtin.tuple([new Sk.builtin.str("64bit"),new Sk.builtin.str("")])})),e.processor=new Sk.builtin.func((function(){return Sk.builtin.pyCheckArgsLen("processor",arguments.length,0,0),new Sk.builtin.str("")})),e};',"src/lib/processing.js":`var $builtinmodule=function(n){var i,e,t,u,o,s,l,c={__name__:new Sk.builtin.str("processing")},r=[],v=!0,f=null;c.processing=null,c.p=null,c.X=new Sk.builtin.int_(0),c.Y=new Sk.builtin.int_(1),c.Z=new Sk.builtin.int_(2),c.R=new Sk.builtin.int_(3),c.G=new Sk.builtin.int_(4),c.B=new Sk.builtin.int_(5),c.A=new Sk.builtin.int_(6),c.U=new Sk.builtin.int_(7),c.V=new Sk.builtin.int_(8),c.NX=new Sk.builtin.int_(9),c.NY=new Sk.builtin.int_(10),c.NZ=new Sk.builtin.int_(11),c.EDGE=new Sk.builtin.int_(12),c.SR=new Sk.builtin.int_(13),c.SG=new Sk.builtin.int_(14),c.SB=new Sk.builtin.int_(15),c.SA=new Sk.builtin.int_(16),c.SW=new Sk.builtin.int_(17),c.TX=new Sk.builtin.int_(18),c.TY=new Sk.builtin.int_(19),c.TZ=new Sk.builtin.int_(20),c.VX=new Sk.builtin.int_(21),c.VY=new Sk.builtin.int_(22),c.VZ=new Sk.builtin.int_(23),c.VW=new Sk.builtin.int_(24),c.AR=new Sk.builtin.int_(25),c.AG=new Sk.builtin.int_(26),c.AB=new Sk.builtin.int_(27),c.DR=new Sk.builtin.int_(3),c.DG=new Sk.builtin.int_(4),c.DB=new Sk.builtin.int_(5),c.DA=new Sk.builtin.int_(6),c.SPR=new Sk.builtin.int_(28),c.SPG=new Sk.builtin.int_(29),c.SPB=new Sk.builtin.int_(30),c.SHINE=new Sk.builtin.int_(31),c.ER=new Sk.builtin.int_(32),c.EG=new Sk.builtin.int_(33),c.EB=new Sk.builtin.int_(34),c.BEEN_LIT=new Sk.builtin.int_(35),c.VERTEX_FIELD_COUNT=new Sk.builtin.int_(36),c.CENTER=new Sk.builtin.int_(3),c.RADIUS=new Sk.builtin.int_(2),c.CORNERS=new Sk.builtin.int_(1),c.CORNER=new Sk.builtin.int_(0),c.DIAMETER=new Sk.builtin.int_(3),c.BASELINE=new Sk.builtin.int_(0),c.TOP=new Sk.builtin.int_(101),c.BOTTOM=new Sk.builtin.int_(102),c.NORMAL=new Sk.builtin.int_(1),c.NORMALIZED=new Sk.builtin.int_(1),c.IMAGE=new Sk.builtin.int_(2),c.MODEL=new Sk.builtin.int_(4),c.SHAPE=new Sk.builtin.int_(5),c.AMBIENT=new Sk.builtin.int_(0),c.DIRECTIONAL=new Sk.builtin.int_(1),c.SPOT=new Sk.builtin.int_(3),c.RGB=new Sk.builtin.int_(1),c.ARGB=new Sk.builtin.int_(2),c.HSB=new Sk.builtin.int_(3),c.ALPHA=new Sk.builtin.int_(4),c.CMYK=new Sk.builtin.int_(5),c.TIFF=new Sk.builtin.int_(0),c.TARGA=new Sk.builtin.int_(1),c.JPEG=new Sk.builtin.int_(2),c.GIF=new Sk.builtin.int_(3),c.MITER=new Sk.builtin.str("miter"),c.BEVEL=new Sk.builtin.str("bevel"),c.ROUND=new Sk.builtin.str("round"),c.SQUARE=new Sk.builtin.str("butt"),c.PROJECT=new Sk.builtin.str("square"),c.P2D=new Sk.builtin.int_(1),c.JAVA2D=new Sk.builtin.int_(1),c.WEBGL=new Sk.builtin.int_(2),c.P3D=new Sk.builtin.int_(2),c.OPENGL=new Sk.builtin.int_(2),c.PDF=new Sk.builtin.int_(0),c.DXF=new Sk.builtin.int_(0),c.OTHER=new Sk.builtin.int_(0),c.WINDOWS=new Sk.builtin.int_(1),c.MAXOSX=new Sk.builtin.int_(2),c.LINUX=new Sk.builtin.int_(3),c.EPSILON=new Sk.builtin.float_(1e-4),c.MAX_FLOAT=new Sk.builtin.float_(34028235e31),c.MIN_FLOAT=new Sk.builtin.float_(-34028235e31),c.MAX_INT=new Sk.builtin.int_(2147483647),c.MIN_INT=new Sk.builtin.int_(-2147483648),c.HALF_PI=new Sk.builtin.float_(Math.PI/2),c.THIRD_PI=new Sk.builtin.float_(Math.PI/3),c.PI=new Sk.builtin.float_(Math.PI),c.TWO_PI=new Sk.builtin.float_(2*Math.PI),c.TAU=new Sk.builtin.float_(2*Math.PI),c.QUARTER_PI=new Sk.builtin.float_(Math.PI/4),c.DEG_TO_RAD=new Sk.builtin.float_(Math.PI/180),c.RAD_TO_DEG=new Sk.builtin.float_(180/Math.PI),c.WHITESPACE=new Sk.builtin.str(" \\t\\n\\r\\f\xA0"),c.POINT=new Sk.builtin.int_(2),c.POINTS=new Sk.builtin.int_(2),c.LINE=new Sk.builtin.int_(4),c.LINES=new Sk.builtin.int_(4),c.TRIANGLE=new Sk.builtin.int_(8),c.TRIANGLES=new Sk.builtin.int_(9),c.TRIANGLE_FAN=new Sk.builtin.int_(11),c.TRIANGLE_STRIP=new Sk.builtin.int_(10),c.QUAD=new Sk.builtin.int_(16),c.QUADS=new Sk.builtin.int_(16),c.QUAD_STRIP=new Sk.builtin.int_(17),c.POLYGON=new Sk.builtin.int_(20),c.PATH=new Sk.builtin.int_(21),c.RECT=new Sk.builtin.int_(30),c.ELLIPSE=new Sk.builtin.int_(31),c.ARC=new Sk.builtin.int_(32),c.SPHERE=new Sk.builtin.int_(40),c.BOX=new Sk.builtin.int_(41),c.GROUP=new Sk.builtin.int_(0),c.PRIMITIVE=new Sk.builtin.int_(1),c.GEOMETRY=new Sk.builtin.int_(3),c.VERTEX=new Sk.builtin.int_(0),c.BEZIER_VERTEX=new Sk.builtin.int_(1),c.CURVE_VERTEX=new Sk.builtin.int_(2),c.BREAK=new Sk.builtin.int_(3),c.CLOSESHAPE=new Sk.builtin.int_(4),c.REPLACE=new Sk.builtin.int_(0),c.BLEND=new Sk.builtin.int_(1),c.ADD=new Sk.builtin.int_(2),c.SUBTRACT=new Sk.builtin.int_(4),c.LIGHTEST=new Sk.builtin.int_(8),c.DARKEST=new Sk.builtin.int_(16),c.DIFFERENCE=new Sk.builtin.int_(32),c.EXCLUSION=new Sk.builtin.int_(64),c.MULTIPLY=new Sk.builtin.int_(128),c.SCREEN=new Sk.builtin.int_(256),c.OVERLAY=new Sk.builtin.int_(512),c.HARD_LIGHT=new Sk.builtin.int_(1024),c.SOFT_LIGHT=new Sk.builtin.int_(2048),c.DODGE=new Sk.builtin.int_(4096),c.BURN=new Sk.builtin.int_(8192),c.ALPHA_MASK=new Sk.builtin.int_(4278190080),c.RED_MASK=new Sk.builtin.int_(16711680),c.GREEN_MASK=new Sk.builtin.int_(65280),c.BLUE_MASK=new Sk.builtin.int_(255),c.CUSTOM=new Sk.builtin.int_(0),c.ORTHOGRAPHIC=new Sk.builtin.int_(2),c.PERSPECTIVE=new Sk.builtin.int_(3),c.ARROW=new Sk.builtin.str("default"),c.CROSS=new Sk.builtin.str("crosshair"),c.HAND=new Sk.builtin.str("pointer"),c.MOVE=new Sk.builtin.str("move"),c.TEXT=new Sk.builtin.str("text"),c.WAIT=new Sk.builtin.str("wait"),c.NOCURSOR=Sk.builtin.assk$("url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto"),c.DISABLE_OPENGL_2X_SMOOTH=new Sk.builtin.int_(1),c.ENABLE_OPENGL_2X_SMOOTH=new Sk.builtin.int_(-1),c.ENABLE_OPENGL_4X_SMOOTH=new Sk.builtin.int_(2),c.ENABLE_NATIVE_FONTS=new Sk.builtin.int_(3),c.DISABLE_DEPTH_TEST=new Sk.builtin.int_(4),c.ENABLE_DEPTH_TEST=new Sk.builtin.int_(-4),c.ENABLE_DEPTH_SORT=new Sk.builtin.int_(5),c.DISABLE_DEPTH_SORT=new Sk.builtin.int_(-5),c.DISABLE_OPENGL_ERROR_REPORT=new Sk.builtin.int_(6),c.ENABLE_OPENGL_ERROR_REPORT=new Sk.builtin.int_(-6),c.ENABLE_ACCURATE_TEXTURES=new Sk.builtin.int_(7),c.DISABLE_ACCURATE_TEXTURES=new Sk.builtin.int_(-7),c.HINT_COUNT=new Sk.builtin.int_(10),c.OPEN=new Sk.builtin.int_(1),c.CLOSE=new Sk.builtin.int_(2),c.BLUR=new Sk.builtin.int_(11),c.GRAY=new Sk.builtin.int_(12),c.INVERT=new Sk.builtin.int_(13),c.OPAQUE=new Sk.builtin.int_(14),c.POSTERIZE=new Sk.builtin.int_(15),c.THRESHOLD=new Sk.builtin.int_(16),c.ERODE=new Sk.builtin.int_(17),c.DILATE=new Sk.builtin.int_(18),c.BACKSPACE=new Sk.builtin.int_(8),c.TAB=new Sk.builtin.int_(9),c.ENTER=new Sk.builtin.int_(10),c.RETURN=new Sk.builtin.int_(13),c.ESC=new Sk.builtin.int_(27),c.DELETE=new Sk.builtin.int_(127),c.CODED=new Sk.builtin.int_(65535),c.SHIFT=new Sk.builtin.int_(16),c.CONTROL=new Sk.builtin.int_(17),c.ALT=new Sk.builtin.int_(18),c.CAPSLK=new Sk.builtin.int_(20),c.PGUP=new Sk.builtin.int_(33),c.PGDN=new Sk.builtin.int_(34),c.END=new Sk.builtin.int_(35),c.HOME=new Sk.builtin.int_(36),c.LEFT=new Sk.builtin.int_(37),c.UP=new Sk.builtin.int_(38),c.RIGHT=new Sk.builtin.int_(39),c.DOWN=new Sk.builtin.int_(40),c.F1=new Sk.builtin.int_(112),c.F2=new Sk.builtin.int_(113),c.F3=new Sk.builtin.int_(114),c.F4=new Sk.builtin.int_(115),c.F5=new Sk.builtin.int_(116),c.F6=new Sk.builtin.int_(117),c.F7=new Sk.builtin.int_(118),c.F8=new Sk.builtin.int_(119),c.F9=new Sk.builtin.int_(120),c.F10=new Sk.builtin.int_(121),c.F11=new Sk.builtin.int_(122),c.F12=new Sk.builtin.int_(123),c.NUMLK=new Sk.builtin.int_(144),c.META=new Sk.builtin.int_(157),c.INSERT=new Sk.builtin.int_(155),c.SINCOS_LENGTH=new Sk.builtin.int_(720),c.PRECISIONB=new Sk.builtin.int_(15),c.PRECISIONF=new Sk.builtin.int_(32768),c.PREC_MAXVAL=new Sk.builtin.int_(32767),c.PREC_ALPHA_SHIFT=new Sk.builtin.int_(9),c.PREC_RED_SHIFT=new Sk.builtin.int_(1),c.NORMAL_MODE_AUTO=new Sk.builtin.int_(0),c.NORMAL_MODE_SHAPE=new Sk.builtin.int_(1),c.NORMAL_MODE_VERTEX=new Sk.builtin.int_(2),c.MAX_LIGHTS=new Sk.builtin.int_(8),c.line=new Sk.builtin.func((function(n,i,e,t){c.processing.line(n.v,i.v,e.v,t.v)})),c.ellipse=new Sk.builtin.func((function(n,i,e,t){c.processing.ellipse(n.v,i.v,e.v,t.v)})),c.circle=new Sk.builtin.func((function(n,i,e){c.processing.ellipse(n.v,i.v,e.v,e.v)})),c.text=new Sk.builtin.func((function(n,i,e){c.processing.text(n.v,i.v,e.v)})),c.point=new Sk.builtin.func((function(n,i){c.processing.point(n.v,i.v)})),c.arc=new Sk.builtin.func((function(n,i,e,t,u,o){c.processing.arc(n.v,i.v,e.v,t.v,u.v,o.v)})),c.quad=new Sk.builtin.func((function(n,i,e,t,u,o,s,l){c.processing.quad(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v)})),c.rect=new Sk.builtin.func((function(n,i,e,t,u){"undefined"==typeof u?c.processing.rect(n.v,i.v,e.v,t.v):c.processing.rect(n.v,i.v,e.v,t.v,u.v)})),c.triangle=new Sk.builtin.func((function(n,i,e,t,u,o){c.processing.triangle(n.v,i.v,e.v,t.v,u.v,o.v)})),c.bezier=new Sk.builtin.func((function(n,i,e,t,u,o,s,l,r,v,f,S){"undefined"==typeof r?c.processing.bezier(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v):c.processing.bezier(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v,v.v,f.v,S.v)})),c.alpha=new Sk.builtin.func((function(n,i,e){return"undefined"==typeof i?new Sk.builtin.float_(c.processing.alpha(n.v)):"undefined"==typeof e?new Sk.builtin.float_(c.processing.alpha(n.v,i.v)):new Sk.builtin.float_(c.processing.alpha(n.v,i.v,e.v))})),c.ambient=new Sk.builtin.func((function(n,i,e){"undefined"==typeof i?c.processing.ambient(n.v):"undefined"==typeof e?c.processing.ambient(n.v,i.v):c.processing.ambient(n.v,i.v,e.v)})),c.ambientLight=new Sk.builtin.func((function(n,i,e,t,u,o){"undefined"==typeof t?c.processing.ambientLight(n.v,i.v,e.v):"undefined"==typeof u?c.processing.ambientLight(n.v,i.v,e.v,t.v):"undefined"==typeof o?c.processing.ambientLight(n.v,i.v,e.v,t.v,u.v):c.processing.ambientLight(n.v,i.v,e.v,t.v,u.v,o.v)})),c.beginCamera=new Sk.builtin.func((function(){c.processing.beginCamera()})),c.beginShape=new Sk.builtin.func((function(n){"undefined"==typeof n&&(n=c.POLYGON),c.processing.beginShape(n.v)})),c.bezierDetail=new Sk.builtin.func((function(n){n="undefined"!=typeof n?n.v:20,c.processing.bezierDetail(n)})),c.bezierPoint=new Sk.builtin.func((function(n,i,e,t,u){c.processing.bezierPoint(n.v,i.v,e.v,t.v,u.v)})),c.bezierTangent=new Sk.builtin.func((function(n,i,e,t,u){c.processing.bezierTangent(n.v,i.v,e.v,t.v,u.v)})),c.bezierVertex=new Sk.builtin.func((function(n,i,e,t,u,o,s,l,r){"undefined"==typeof s?c.processing.bezierVertex(n.v,i.v,e.v,t.v,u.v,o.v):"undefined"==typeof l?c.processing.bezierVertex(n.v,i.v,e.v,t.v,u.v,o.v,s.v):"undefined"==typeof r?c.processing.bezierVertex(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v):c.processing.bezierVertex(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v)})),c.blend=new Sk.builtin.func((function(n,i,e,t,u,o,s,l,r,v){n instanceof Sk.builtin.int_||n instanceof Sk.builtin.float_?c.processing.blend(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v):c.processing.blend(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v,v.v)})),c.blendColor=new Sk.builtin.func((function(n,i,e){var t=Sk.misceval.callsimArray(c.color,[new Sk.builtin.int_(0),new Sk.builtin.int_(0),new Sk.builtin.int_(0)]);return t.v=c.processing.blendColor(n.v,i.v,e.v),t})),c.brightness=new Sk.builtin.func((function(n,i,e){return"undefined"==typeof i?new Sk.builtin.float_(c.processing.brightness(n.v)):"undefined"==typeof e?new Sk.builtin.float_(c.processing.brightness(n.v,i.v)):new Sk.builtin.float_(c.processing.brightness(n.v,i.v,e.v))})),c.camera=new Sk.builtin.func((function(n,i,e,t,u,o,s,l,r){"undefined"==typeof n?c.processing.camera():c.processing.camera(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v)})),c.constrain=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.constrain(n.v,i.v,e.v))})),c.copy=new Sk.builtin.func((function(n,i,e,t,u,o,s,l,r){n instanceof Sk.builtin.int_||n instanceof Sk.builtin.float_?c.processing.copy(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v):c.processing.copy(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v)})),c.createFont=new Sk.builtin.func((function(n,i,e,t){var u=Sk.misceval.callsimArray(c.PFont);return u.v="undefined"==typeof e?c.processing.createFont(n.v,i.v):"undefined"==typeof t?c.processing.createFont(n.v,i.v,e.v):c.processing.createFont(n.v,i.v,e.v,t.v),u})),c.createGraphics=new Sk.builtin.func((function(n,i,e,t){var u=Sk.misceval.callsimArray(c.PGraphics);return u.v="undefined"==typeof t?c.processing.createGraphics(n.v,i.v,e.v):c.processing.createGraphics(n.v,i.v,e.v,t.v),u})),c.createImage=new Sk.builtin.func((function(n,i,e){var t=Sk.misceval.callsimArray(c.PImage);return t.v=c.processing.createImage(n.v,i.v,e.v),t})),c.cursor=new Sk.builtin.func((function(n,i,e){"undefined"==typeof n?c.processing.cursor():"undefined"==typeof i?c.processing.cursor(n.v):"undefined"==typeof e?c.processing.cursor(n.v,i.v):c.processing.cursor(n.v,i.v,e.v)})),c.curve=new Sk.builtin.func((function(n,i,e,t,u,o,s,l,r,v,f,S){"undefined"==typeof r?c.processing.curve(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v):"undefined"==typeof v?c.processing.curve(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v):"undefined"==typeof f?c.processing.curve(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v,v.v):"undefined"==typeof S?c.processing.curve(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v,v.v,f.v):c.processing.curve(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v,r.v,v.v,f.v,S.v)})),c.curveDetail=new Sk.builtin.func((function(n){c.processing.curveDetail(n.v)})),c.curvePoint=new Sk.builtin.func((function(n,i,e,t,u){c.processing.curvePoint(n.v,i.v,e.v,t.v,u.v)})),c.curveTangent=new Sk.builtin.func((function(n,i,e,t,u){c.processing.curveTangent(n.v,i.v,e.v,t.v,u.v)})),c.curveTightness=new Sk.builtin.func((function(n){c.processing.curveTightness(n.v)})),c.curveVertex=new Sk.builtin.func((function(n,i,e){"undefined"==typeof e?c.processing.curveVertex(n.v,i.v):c.processing.curveVertex(n.v,i.v,e.v)})),c.day=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.day())})),c.degrees=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.degrees(n.v))})),c.directionalLight=new Sk.builtin.func((function(n,i,e,t,u,o){c.processing.directionalLight(n.v,i.v,e.v,t.v,u.v,o.v)})),c.dist=new Sk.builtin.func((function(n,i,e,t,u,o){return"undefined"==typeof u?new Sk.builtin.float_(c.processing.dist(n.v,i.v,e.v,t.v)):"undefined"==typeof o?new Sk.builtin.float_(c.processing.dist(n.v,i.v,e.v,t.v,u.v)):new Sk.builtin.float_(c.processing.dist(n.v,i.v,e.v,t.v,u.v,o.v))})),c.emissive=new Sk.builtin.func((function(n,i,e){"undefined"==typeof i?c.processing.emissive(n.v):"undefined"==typeof e?c.processing.emissive(n.v,i.v):c.processing.emissive(n.v,i.v,e.v)})),c.endCamera=new Sk.builtin.func((function(){c.processing.endCamera()})),c.endShape=new Sk.builtin.func((function(n){"undefined"==typeof n?c.processing.endShape():c.processing.endShape(n.v)})),c.filter=new Sk.builtin.func((function(n,i){"undefined"==typeof i?c.processing.filter(n.v):c.processing.filter(n.v,i.v)})),c.frustum=new Sk.builtin.func((function(n,i,e,t,u,o){c.processing.frustum(n,i,e,t,u,o)})),c.hint=new Sk.builtin.func((function(n){c.processing.hint(n)})),c.hour=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.hour())})),c.hue=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.hue(n.v))})),c.imageMode=new Sk.builtin.func((function(n){c.processing.imageMode(n.v)})),c.lerp=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.lerp(n.v,i.v,e.v))})),c.lerpColor=new Sk.builtin.func((function(n,i,e){var t=Sk.misceval.callsimArray(c.color,[new Sk.builtin.int_(0),new Sk.builtin.int_(0),new Sk.builtin.int_(0)]);return t.v=c.processing.lerpColor(n.v,i.v,e.v),t})),c.lightFalloff=new Sk.builtin.func((function(n,i,e){c.processing.lightFalloff(n.v,i.v,e.v)})),c.lights=new Sk.builtin.func((function(){c.processing.lights()})),c.lightSpecular=new Sk.builtin.func((function(n,i,e){c.processing.lightSpecular(n.v,i.v,e.v)})),c.loadBytes=new Sk.builtin.func((function(n){return new Sk.builtin.list(c.processing.loadBytes(n.v))})),c.loadFont=new Sk.builtin.func((function(n){var i=Sk.misceval.callsimArray(c.PFont);return i.v=c.processing.loadFont(n.v),i})),c.loadShape=new Sk.builtin.func((function(n){return Sk.misceval.callsimArray(c.PShapeSVG,[new Sk.builtin.str("string"),n])})),c.loadStrings=new Sk.builtin.func((function(n){return new Sk.builtin.list(c.processing.loadStrings(n.v))})),c.mag=new Sk.builtin.func((function(n,i,e){return"undefined"==typeof e?new Sk.builtin.float_(c.processing.mag(n.v,i.v)):new Sk.builtin.float_(c.processing.mag(n.v,i.v,e.v))})),c.map=new Sk.builtin.func((function(n,i,e,t,u){return new Sk.builtin.float_(c.processing.map(n.v,i.v,e.v,t.v,u.v))})),c.millis=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.millis())})),c.minute=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.minute())})),c.modelX=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.modelX(n.v,i.v,e.v))})),c.modelY=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.modelY(n.v,i.v,e.v))})),c.modelZ=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.modelZ(n.v,i.v,e.v))})),c.month=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.month())})),c.noCursor=new Sk.builtin.func((function(){c.processing.noCursor()})),c.noise=new Sk.builtin.func((function(n,i,e){return"undefined"==typeof i?new Sk.builtin.float_(c.processing.noise(n.v)):"undefined"==typeof e?new Sk.builtin.float_(c.processing.noise(n.v,i.v)):new Sk.builtin.float_(c.processing.noise(n.v,i.v,e.v))})),c.noiseDetail=new Sk.builtin.func((function(n,i){c.processing.noiseDetail(n.v,i.v)})),c.noiseSeed=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.noiseSeed(n.v))})),c.noLights=new Sk.builtin.func((function(){c.processing.noLights()})),c.norm=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.norm(n.v,i.v,e.v))})),c.normal=new Sk.builtin.func((function(n,i,e){c.processing.normal(n.v,i.v,e.v)})),c.noTint=new Sk.builtin.func((function(){c.processing.noTint()})),c.ortho=new Sk.builtin.func((function(n,i,e,t,u,o){c.processing.ortho(n.v,i.v,e.v,t.v,u.v,o.v)})),c.perspective=new Sk.builtin.func((function(n,i,e,t){"undefined"==typeof n?c.processing.perspective():"undefined"==typeof i?c.processing.perspective(n.v):"undefined"==typeof e?c.processing.perspective(n.v,i.v):"undefined"==typeof t?c.processing.perspective(n.v,i.v,e.v):c.processing.perspective(n.v,i.v,e.v,t.v)})),c.pointLight=new Sk.builtin.func((function(n,i,e,t,u,o){c.processing.pointLight(n.v,i.v,e.v,t.v,u.v,o.v)})),c.printCamera=new Sk.builtin.func((function(){c.processing.printCamera()})),c.println=new Sk.builtin.func((function(n){c.processing.println(n.v)})),c.printProjection=new Sk.builtin.func((function(){c.processing.printProjection()})),c.radians=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.radians(n.v))})),c.randomSeed=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.randomSeed(n.v))})),c.random=new Sk.builtin.func((function(n,i){return"undefined"==typeof n?new Sk.builtin.float_(c.processing.random()):"undefined"==typeof i?new Sk.builtin.float_(c.processing.random(n.v)):new Sk.builtin.float_(c.processing.random(n.v,i.v))})),c.requestImage=new Sk.builtin.func((function(n,i){var e=Sk.misceval.callsimArray(c.PImage);return e.v="undefined"==typeof i?c.processing.requestImage(n.v):c.processing.requestImage(n.v,i.v),e})),c.saturation=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.saturation(n.v))})),c.save=new Sk.builtin.func((function(n){c.processing.save(n.v)})),c.saveFrame=new Sk.builtin.func((function(n){"undefined"==typeof n?c.processing.saveFrame():c.processing.saveFrame(n.v)})),c.saveStrings=new Sk.builtin.func((function(n,i){c.processing.saveStrings(n.v,i.v)})),c.screenX=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.screenX(n.v,i.v,e.v))})),c.screenY=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.screenY(n.v,i.v,e.v))})),c.screenZ=new Sk.builtin.func((function(n,i,e){return new Sk.builtin.float_(c.processing.screenZ(n.v,i.v,e.v))})),c.second=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.second())})),c.shape=new Sk.builtin.func((function(n,i,e,t,u){"undefined"==typeof i?c.processing.shape(n.v):"undefined"==typeof e?c.processing.shape(n.v,i.v):"undefined"==typeof t?c.processing.shape(n.v,i.v,e.v):"undefined"==typeof u?c.processing.shape(n.v,i.v,e.v,t.v):c.processing.shape(n.v,i.v,e.v,t.v,u.v)})),c.shapeMode=new Sk.builtin.func((function(n){c.processing.shapeMode(n.v)})),c.shininess=new Sk.builtin.func((function(n){c.processing.shininess(n.v)})),c.specular=new Sk.builtin.func((function(n,i,e){"undefined"==typeof i?c.processing.specular(n.v):"undefined"==typeof e?c.processing.specular(n.v,i.v):c.processing.specular(n.v,i.v,e.v)})),c.spotLight=new Sk.builtin.func((function(n,i,e,t,u,o,s,l){c.processing.spotLight(n.v,i.v,e.v,t.v,u.v,o.v,s.v,l.v)})),c.sq=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.sq(n))})),c.status=new Sk.builtin.func((function(n){c.processing.status(n.v)})),c.textAlign=new Sk.builtin.func((function(n,i){"undefined"==typeof i?c.processing.textAlign(n.v):c.processing.textAlign(n.v,i.v)})),c.textAscent=new Sk.builtin.func((function(){return new Sk.builtin.float_(c.processing.textAscent())})),c.textDescent=new Sk.builtin.func((function(){return new Sk.builtin.float_(c.processing.textDescent())})),c.textFont=new Sk.builtin.func((function(n,i){"undefined"==typeof i?c.processing.textFont(n.v):c.processing.textFont(n.v,i.v)})),c.textLeading=new Sk.builtin.func((function(n){c.processing.textLeading(n.v)})),c.textMode=new Sk.builtin.func((function(n){c.processing.textMode(n.v)})),c.textSize=new Sk.builtin.func((function(n){c.processing.textSize(n.v)})),c.texture=new Sk.builtin.func((function(n){c.processing.texture(n.v)})),c.textureMode=new Sk.builtin.func((function(n){c.processing.textureMode(n.v)})),c.textWidth=new Sk.builtin.func((function(n){return new Sk.builtin.float_(c.processing.textWidth(n.v))})),c.tint=new Sk.builtin.func((function(n,i,e,t){"undefined"==typeof i?c.processing.tint(n.v):"undefined"==typeof e?c.processing.tint(n.v,i.v):"undefined"==typeof t?c.processing.tint(n.v,i.v,e.v):c.processing.tint(n.v,i.v,e.v,t.v)})),c.updatePixels=new Sk.builtin.func((function(){c.processing.updatePixels()})),c.vertex=new Sk.builtin.func((function(n,i,e,t,u){"undefined"==typeof e?c.processing.vertex(n.v,i.v):"undefined"==typeof t?c.processing.vertex(n.v,i.v,e.v):"undefined"==typeof u?c.processing.vertex(n.v,i.v,e.v,t.v):c.processing.vertex(n.v,i.v,e.v,t.v,u.v)})),c.year=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.year())})),c.box=new Sk.builtin.func((function(n){c.processing.box(n.v)})),c.sphere=new Sk.builtin.func((function(n){c.processing.sphere(n.v)})),c.sphereDetail=new Sk.builtin.func((function(n,i){"undefined"==typeof i?c.processing.sphereDetail(n.v):c.processing.sphereDetail(n.v,i.v)})),c.background=new Sk.builtin.func((function(n,i,e){"undefined"!=typeof i&&(i=i.v),"undefined"!=typeof e&&(e=e.v),c.processing.background(n.v,i,e)})),c.fill=new Sk.builtin.func((function(n,i,e,t){"undefined"!=typeof i&&(i=i.v),"undefined"!=typeof e&&(e=e.v),"undefined"!=typeof t&&(t=t.v),c.processing.fill(n.v,i,e,t)})),c.stroke=new Sk.builtin.func((function(n,i,e,t){"undefined"!=typeof i&&(i=i.v),"undefined"!=typeof e&&(e=e.v),"undefined"!=typeof t&&(t=t.v),c.processing.stroke(n.v,i,e,t)})),c.noStroke=new Sk.builtin.func((function(){c.processing.noStroke()})),c.colorMode=new Sk.builtin.func((function(n,i,e,t,u){i="undefined"==typeof i?255:i.v,"undefined"!=typeof e&&(e=e.v),"undefined"!=typeof t&&(t=t.v),"undefined"!=typeof u&&(u=u.v),c.processing.colorMode(n.v,i,e,t,u)})),c.noFill=new Sk.builtin.func((function(){c.processing.noFill()})),c.loop=new Sk.builtin.func((function(){if(null===c.processing)throw new Sk.builtin.Exception("loop() should be called after run()");v=!0,c.processing.loop()})),c.noLoop=new Sk.builtin.func((function(){if(null===c.processing)throw new Sk.builtin.Exception("noLoop() should be called after run()");v=!1,c.processing.noLoop()})),c.frameRate=new Sk.builtin.func((function(n){c.processing.frameRate(n.v)})),c.width=new Sk.builtin.int_(0),c.height=new Sk.builtin.int_(0),c.renderMode=c.P2D,c.size=new Sk.builtin.func((function(n,i,e){"undefined"==typeof e&&(e=c.P2D),c.processing.size(n.v,i.v,e.v),c.width=new Sk.builtin.int_(c.processing.width),c.height=new Sk.builtin.int_(c.processing.height),c.renderMode=e})),c.exitp=new Sk.builtin.func((function(){c.processing.exit()})),c.mouseX=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.mouseX)})),c.mouseY=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.mouseY)})),c.pmouseX=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.pmouseX)})),c.pmouseY=new Sk.builtin.func((function(){return new Sk.builtin.int_(c.processing.pmouseY)})),c.rectMode=new Sk.builtin.func((function(n){c.processing.rectMode(n.v)})),c.strokeWeight=new Sk.builtin.func((function(n){c.processing.strokeWeight(n.v)})),c.smooth=new Sk.builtin.func((function(){c.processing.smooth()})),c.noSmooth=new Sk.builtin.func((function(){c.processing.noSmooth()})),c.ellipseMode=new Sk.builtin.func((function(n){c.processing.ellipseMode(n.v)})),c.strokeCap=new Sk.builtin.func((function(n){c.processing.strokeCap(n.v)})),c.strokeJoin=new Sk.builtin.func((function(n){c.processing.strokeJoin(n.v)})),c.rotate=new Sk.builtin.func((function(n){c.processing.rotate(n.v)})),c.rotateX=new Sk.builtin.func((function(n){c.processing.rotateX(n.v)})),c.rotateY=new Sk.builtin.func((function(n){c.processing.rotateY(n.v)})),c.rotateZ=new Sk.builtin.func((function(n){c.processing.rotateZ(n.v)})),c.scale=new Sk.builtin.func((function(n,i,e){i="undefined"==typeof i?1:i.v,e="undefined"==typeof e?1:e.v,c.processing.scale(n.v,i,e)})),c.translate=new Sk.builtin.func((function(n,i,e){i="undefined"==typeof i?1:i.v,e="undefined"==typeof e?1:e.v,c.processing.translate(n.v,i,e)})),c.popMatrix=new Sk.builtin.func((function(){c.processing.popMatrix()})),c.pushMatrix=new Sk.builtin.func((function(){c.processing.pushMatrix()})),c.applyMatrix=new Sk.builtin.func((function(){var n,i=Array.prototype.slice.call(arguments,0,16);for(n=0;n<i.length;n++)i[n]="undefined"==typeof i[n]?0:i[n].v;c.processing.applyMatrix.apply(c.processing,i)})),c.resetMatrix=new Sk.builtin.func((function(){c.processing.resetMatrix()})),c.printMatrix=new Sk.builtin.func((function(){return Sk.ffi.remapToPy(c.processing.printMatrix())})),c.run=new Sk.builtin.func((function(){var n=document.getElementById(Sk.canvas);if(!n)throw new Error("Processing module: Canvas element not specified");if(window.Processing.logger={log:function(n){Sk.misceval.print_(n)}},(f=window.Processing.getInstanceById(Sk.canvas))&&f.exit(),c.p=new window.Processing(n,(function sketchProc(n){c.processing=n,n.draw=function(){var i=!1;for(var e in r)0===r[e].width&&(i=!0);if(!0===i)return!0===v?void 0:void n.loop();if(!1===v&&n.noLoop(),c.frameCount=n.frameCount,Sk.globals.draw)try{Sk.misceval.callsimArray(Sk.globals.draw)}catch(t){Sk.uncaughtException(t)}};var i=["setup","mouseMoved","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","keyPressed","keyReleased","keyTyped"];for(var e in i)Sk.globals[i[e]]&&(n[i[e]]=new Function("try {Sk.misceval.callsimArray(Sk.globals['"+i[e]+"']);} catch(e) {Sk.uncaughtException(e);}"))})),0===c.width.v&&0===c.height.v){var i=n.offsetWidth,e=n.offsetHeight;Sk.misceval.callsimArray(c.size,[new Sk.builtin.int_(i),new Sk.builtin.int_(e),c.renderMode])}})),s=function(n,i){i.__getattr__=new Sk.builtin.func((function(n,i){return"x"===(i=Sk.ffi.remapToJs(i))?Sk.builtin.assk$(c.processing.mouseX):"y"===i?Sk.builtin.assk$(c.processing.mouseY):"px"===i?Sk.builtin.assk$(c.processing.pmouseX):"py"===i?Sk.builtin.assk$(c.processing.pmouseY):"pressed"===i?new Sk.builtin.bool(c.processing.__mousePressed):"button"===i?Sk.builtin.assk$(c.processing.mouseButton):void 0}))},c.Mouse=Sk.misceval.buildClass(c,s,"Mouse",[]),c.mouse=Sk.misceval.callsimArray(c.Mouse),o=function(n,i){i.__getattr__=new Sk.builtin.func((function(n,i){return"key"===(i=Sk.ffi.remapToJs(i))?new Sk.builtin.str(c.processing.key.toString()):"keyCode"===i?Sk.builtin.assk$(c.processing.keyCode):"keyPressed"===i?new Sk.builtin.str(c.processing.keyPressed):void 0}))},c.Keyboard=Sk.misceval.buildClass(c,o,"Keyboard",[]),c.keyboard=Sk.misceval.callsimArray(c.Keyboard),u=function(n,i){i.__getattr__=new Sk.builtin.func((function(n,i){return"frameCount"===(i=Sk.ffi.remapToJs(i))?Sk.builtin.assk$(c.processing.frameCount):"frameRate"===i?Sk.builtin.assk$(c.processing.frameRate):"height"===i?Sk.builtin.assk$(c.processing.height):"width"===i?Sk.builtin.assk$(c.processing.width):"online"===i?new Sk.builtin.bool(c.processing.online):"focused"===i?new Sk.builtin.bool(c.processing.focused):void 0}))},c.Environment=Sk.misceval.buildClass(c,u,"Environment",[]),c.environment=Sk.misceval.callsimArray(c.Environment),t=function(n,i){i.__init__=new Sk.builtin.func((function(n){n.pixels=null})),i.__getattr__=new Sk.builtin.func((function(n,i){return"height"===(i=Sk.ffi.remapToJs(i))?Sk.builtin.assk$(c.processing.height):"width"===i?Sk.builtin.assk$(c.processing.width):("pixels"===i&&null==n.pixels&&(n.pixels=new Sk.builtin.list(c.processing.pixels.toArray())),n.pixels)}))},c.Screen=Sk.misceval.buildClass(c,t,"Screen",[]),c.screen=Sk.misceval.callsimArray(c.Screen),c.loadPixels=new Sk.builtin.func((function(){c.processing.loadPixels()})),e=function(n,i){i.__init__=new Sk.builtin.func((function(n,i,e,t,u){"undefined"!=typeof e&&(e=e.v),"undefined"!=typeof t&&(t=t.v),"undefined"!=typeof u&&(u=u.v),n.v=c.processing.color(i.v,e,t,u)}))},c.color=Sk.misceval.buildClass(c,e,"color",[]),c.red=new Sk.builtin.func((function(n){return new Sk.builtin.int_(c.processing.red(n.v))})),c.green=new Sk.builtin.func((function(n){return new Sk.builtin.int_(c.processing.green(n.v))})),c.blue=new Sk.builtin.func((function(n){return new Sk.builtin.int_(c.processing.blue(n.v))})),i=function(n,i){i.__init__=new Sk.builtin.func((function(n,i,e,t){n.v="undefined"==typeof i?new c.processing.PImage:"undefined"==typeof e?new c.processing.PImage(i.v):"undefined"==typeof t?new c.processing.PImage(i.v,e.v):new c.processing.PImage(i.v,e.v,t.v)})),i.__getattr__=new Sk.builtin.func((function(n,i){return"width"===(i=Sk.ffi.remapToJs(i))?Sk.builtin.assk$(n.v.width):"height"===i?Sk.builtin.assk$(n.v.height):void 0}))},c.loadImage=new Sk.builtin.func((function(n){var i=c.processing.loadImage(n.v);r.push(i);var e=Sk.misceval.callsimArray(c.PImage);return e.v=i,e})),c.image=new Sk.builtin.func((function(n,i,e,t,u){"undefined"==typeof t?c.processing.image(n.v,i.v,e.v):c.processing.image(n.v,i.v,e.v,t.v,u.v)})),c.get=new Sk.builtin.func((function(n,i){var e=c.processing.get(n.v,i.v);return Sk.misceval.callsimArray(c.color,[new Sk.builtin.int_(c.processing.red(e)),new Sk.builtin.int_(c.processing.green(e)),new Sk.builtin.int_(c.processing.blue(e))])})),c.set=new Sk.builtin.func((function(n,i,e){c.processing.set(n.v,i.v,e.v)})),l=function(n,i){i.__init__=new Sk.builtin.func((function(n,i,e,t){n.v="undefined"==typeof i?new c.processing.PVector:"undefined"==typeof t?new c.processing.PVector(i.v,e.v):new c.processing.PVector(i.v,e.v,t.v)})),i.__getattr__=new Sk.builtin.func((function(n,i){return"x"===(i=Sk.ffi.remapToJs(i))?Sk.builtin.assk$(n.v.x):"y"===i?Sk.builtin.assk$(n.v.y):"z"===i?Sk.builtin.assk$(n.v.z):void 0})),i.get=new Sk.builtin.func((function(n){var i=Sk.misceval.callsimArray(c.PVector);return i.v=n.v.get(),i})),i.set=new Sk.builtin.func((function(n,i,e,t){"undefined"==typeof t?n.v.set(i.v,e.v):n.v.set(i.v,e.v,t.v)})),i.mag=new Sk.builtin.func((function(n){return Sk.builtin.assk$(n.v.mag())})),i.add=new Sk.builtin.func((function(n,i){var e=Sk.misceval.callsimArray(c.PVector);return e.v=n.v.add(i.v),e})),i.sub=new Sk.builtin.func((function(n,i){var e=Sk.misceval.callsimArray(c.PVector);return e.v=n.v.sub(i.v),e})),i.mult=new Sk.builtin.func((function(n,i){var e=Sk.misceval.callsimArray(c.PVector);return e.v=n.v.mult(i.v),e})),i.div=new Sk.builtin.func((function(n,i){var e=Sk.misceval.callsimArray(c.PVector);return e.v=n.v.div(i.v),e})),i.dist=new Sk.builtin.func((function(n,i){return Sk.builtin.assk$(n.v.dist(i.v))})),i.dot=new Sk.builtin.func((function(n,i,e,t){return"undefined"==typeof e?Sk.builtin.assk$(n.v.dot(i.v)):Sk.builtin.assk$(n.v.dot(i.v,e.v,t.v))})),i.cross=new Sk.builtin.func((function(n,i){var e=Sk.misceval.callsimArray(c.PVector);return e.v=n.v.cross(i.v),e})),i.normalize=new Sk.builtin.func((function(n){n.v.normalize()})),i.limit=new Sk.builtin.func((function(n,i){n.v.limit(i.v)})),i.angleBetween=new Sk.builtin.func((function(n,i){return Sk.builtin.assk$(n.v.angleBetween(i.v))})),i.array=new Sk.builtin.func((function(n){return new Sk.builtin.list(n.v.array())}))};return c.PFont=Sk.misceval.buildClass(c,(function(n,i){i.__init__=new Sk.builtin.func((function(n,i){n.v="undefined"==typeof i?new c.processing.PFont:new c.processing.PVector(i.v)})),i.list=new Sk.builtin.func((function(n){return new Sk.builtin.list(n.v.list())}))}),"PFont",[]),c.PGraphics=Sk.misceval.buildClass(c,(function(n,i){i.__init__=new Sk.builtin.func((function(n,i,e,t){n.v="undefined"==typeof i?new c.processing.PVector:"undefined"==typeof t?new c.processing.PVector(i.v,e.v):new c.processing.PVector(i.v,e.v,t.v)})),i.beginDraw=new Sk.builtin.func((function(n){n.v.beginDraw()})),i.endDraw=new Sk.builtin.func((function(n){n.v.endDraw()}))}),"PGraphics",[]),c.PShapeSVG=Sk.misceval.buildClass(c,(function(n,i){i.__init__=new Sk.builtin.func((function(n,i,e,t){n.v="undefined"==typeof i?null:"undefined"==typeof e?new c.processing.PShapeSVG(i.v):"undefined"==typeof t?new c.processing.PShapeSVG(i.v,e.v):new c.processing.PShapeSVG(i.v,e.v,t.v)})),i.__getattr__=new Sk.builtin.func((function(n,i){return"width"===(i=Sk.ffi.remapToJs(i))?Sk.builtin.assk$(n.v.width):"height"===i?Sk.builtin.assk$(n.v.height):void 0})),i.isVisible=new Sk.builtin.func((function(n){return new Sk.builtin.bool(n.v.isVisible())})),i.setVisible=new Sk.builtin.func((function(n,i){n.v.setVisible(i.v)})),i.disableStyle=new Sk.builtin.func((function(n){n.v.disableStyle()})),i.enableStyle=new Sk.builtin.func((function(n){n.v.enableStyle()})),i.getChild=new Sk.builtin.func((function(n,i){var e=n.v.getChild(i.v);if(null!=e){var t=Sk.misceval.callsimArray(c.PShapeSVG);return t.v=e,t}return null})),i.translate=new Sk.builtin.func((function(n,i,e,t){"undefined"==typeof t?n.v.translate(i.v,e.v):n.v.translate(i.v,e.v,t.v)})),i.rotate=new Sk.builtin.func((function(n,i){n.v.rotate(i.v)})),i.rotateX=new Sk.builtin.func((function(n,i){n.v.rotateX(i.v)})),i.rotateY=new Sk.builtin.func((function(n,i){n.v.rotateY(i.v)})),i.rotateZ=new Sk.builtin.func((function(n,i){n.v.rotateZ(i.v)})),i.scale=new Sk.builtin.func((function(n,i,e,t){"undefined"==typeof e?n.v.scale(i.v):"undefined"==typeof t?n.v.scale(i.v,e.v):n.v.scale(i.v,e.v,t.v)}))}),"PShapeSVG",[]),c.PVector=Sk.misceval.buildClass(c,l,"PVector",[]),c.PImage=Sk.misceval.buildClass(c,i,"PImage",[]),c};`,"src/lib/random.js":'var MersenneTwister=function(n){null==n&&(n=(new Date).getTime()),this.N=624,this.M=397,this.MATRIX_A=2567483615,this.UPPER_MASK=2147483648,this.LOWER_MASK=2147483647,this.mt=new Array(this.N),this.mti=this.N+1,this.init_genrand(n)};MersenneTwister.prototype.init_genrand=function(n){for(this.mt[0]=n>>>0,this.mti=1;this.mti<this.N;this.mti++)n=this.mt[this.mti-1]^this.mt[this.mti-1]>>>30,this.mt[this.mti]=(1812433253*((4294901760&n)>>>16)<<16)+1812433253*(65535&n)+this.mti,this.mt[this.mti]>>>=0},MersenneTwister.prototype.init_by_array=function(n,t){var i,e,r;for(this.init_genrand(19650218),i=1,e=0,r=this.N>t?this.N:t;r;r--){var u=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(1664525*((4294901760&u)>>>16)<<16)+1664525*(65535&u))+n[e]+e,this.mt[i]>>>=0,e++,++i>=this.N&&(this.mt[0]=this.mt[this.N-1],i=1),e>=t&&(e=0)}for(r=this.N-1;r;r--){u=this.mt[i-1]^this.mt[i-1]>>>30;this.mt[i]=(this.mt[i]^(1566083941*((4294901760&u)>>>16)<<16)+1566083941*(65535&u))-i,this.mt[i]>>>=0,++i>=this.N&&(this.mt[0]=this.mt[this.N-1],i=1)}this.mt[0]=2147483648},MersenneTwister.prototype.genrand_int32=function(){var n,t=new Array(0,this.MATRIX_A);if(this.mti>=this.N){var i;for(this.mti==this.N+1&&this.init_genrand(5489),i=0;i<this.N-this.M;i++)n=this.mt[i]&this.UPPER_MASK|this.mt[i+1]&this.LOWER_MASK,this.mt[i]=this.mt[i+this.M]^n>>>1^t[1&n];for(;i<this.N-1;i++)n=this.mt[i]&this.UPPER_MASK|this.mt[i+1]&this.LOWER_MASK,this.mt[i]=this.mt[i+(this.M-this.N)]^n>>>1^t[1&n];n=this.mt[this.N-1]&this.UPPER_MASK|this.mt[0]&this.LOWER_MASK,this.mt[this.N-1]=this.mt[this.M-1]^n>>>1^t[1&n],this.mti=0}return n=this.mt[this.mti++],n^=n>>>11,n^=n<<7&2636928640,n^=n<<15&4022730752,(n^=n>>>18)>>>0},MersenneTwister.prototype.genrand_int31=function(){return this.genrand_int32()>>>1},MersenneTwister.prototype.genrand_real1=function(){return this.genrand_int32()*(1/4294967295)},MersenneTwister.prototype.random=function(){return this.genrand_int32()*(1/4294967296)},MersenneTwister.prototype.genrand_real3=function(){return(this.genrand_int32()+.5)*(1/4294967296)},MersenneTwister.prototype.genrand_res53=function(){return(67108864*(this.genrand_int32()>>>5)+(this.genrand_int32()>>>6))*(1/9007199254740992)};var $builtinmodule=function(n){var t={},i=new MersenneTwister,e=void 0;t.seed=new Sk.builtin.func((function(n){return Sk.builtin.pyCheckArgsLen("seed",arguments.length,0,1),n=Sk.builtin.asnum$(n),i=arguments.length>0?new MersenneTwister(n):new MersenneTwister,Sk.builtin.none.none$})),t.random=new Sk.builtin.func((function(){return Sk.builtin.pyCheckArgsLen("random",arguments.length,0,0),new Sk.builtin.float_(i.genrand_res53())}));var toInt=function(n){return 0|n},randrange=function(n,t,e){var r,u,s;if(!Sk.builtin.checkInt(n))throw new Sk.builtin.ValueError("non-integer first argument for randrange()");if(void 0===t)return s=toInt(i.genrand_res53()*n),new Sk.builtin.int_(s);if(!Sk.builtin.checkInt(t))throw new Sk.builtin.ValueError("non-integer stop for randrange()");if(void 0===e&&(e=1),r=t-n,1==e&&r>0)return s=n+toInt(i.genrand_res53()*r),new Sk.builtin.int_(s);if(1==e)throw new Sk.builtin.ValueError("empty range for randrange() ("+n+", "+t+", "+r+")");if(!Sk.builtin.checkInt(e))throw new Sk.builtin.ValueError("non-integer step for randrange()");if(e>0)u=toInt((r+e-1)/e);else{if(!(e<0))throw new Sk.builtin.ValueError("zero step for randrange()");u=toInt((r+e+1)/e)}if(u<=0)throw new Sk.builtin.ValueError("empty range for randrange()");return s=n+e*toInt(i.genrand_res53()*u),new Sk.builtin.int_(s)};t.randint=new Sk.builtin.func((function(n,t){return Sk.builtin.pyCheckArgsLen("randint",arguments.length,2,2),n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t),randrange(n,t+1)})),t.randrange=new Sk.builtin.func((function(n,t,i){return Sk.builtin.pyCheckArgsLen("randrange",arguments.length,1,3),n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t),i=Sk.builtin.asnum$(i),randrange(n,t,i)})),t.uniform=new Sk.builtin.func((function(n,t){Sk.builtin.pyCheckArgsLen("uniform",arguments.length,2,2),n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t);var e=i.genrand_res53();const r=n+e*(t-n);return new Sk.builtin.float_(r)})),t.triangular=new Sk.builtin.func((function(n,t,e){var r,u,s;return Sk.builtin.pyCheckArgsLen("triangular",arguments.length,2,3),Sk.builtin.pyCheckType("low","number",Sk.builtin.checkNumber(n)),Sk.builtin.pyCheckType("high","number",Sk.builtin.checkNumber(t)),(n=Sk.builtin.asnum$(n))>(t=Sk.builtin.asnum$(t))&&(s=n,n=t,t=s),void 0===e||e===Sk.builtin.none.none$?e=(t-n)/2:(Sk.builtin.pyCheckType("mode","number",Sk.builtin.checkNumber(e)),e=Sk.builtin.asnum$(e)),u=(r=i.genrand_res53())<(e-n)/(t-n)?n+Math.sqrt(r*(t-n)*(e-n)):t-Math.sqrt((1-r)*(t-n)*(t-e)),new Sk.builtin.float_(u)}));var normalSample=function(n,t){var r,u,s,h,l;return void 0!==e?(l=e,e=void 0):(r=i.genrand_res53(),u=i.genrand_res53(),s=Math.sqrt(-2*Math.log(r)),h=2*Math.PI*u,l=s*Math.cos(h),e=s*Math.sin(h)),n+t*l};return t.gauss=new Sk.builtin.func((function(n,t){return Sk.builtin.pyCheckArgsLen("gauss",arguments.length,2,2),Sk.builtin.pyCheckType("mu","number",Sk.builtin.checkNumber(n)),Sk.builtin.pyCheckType("sigma","number",Sk.builtin.checkNumber(t)),n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t),new Sk.builtin.float_(normalSample(n,t))})),t.normalvariate=t.gauss,t.lognormvariate=new Sk.builtin.func((function(n,t){return Sk.builtin.pyCheckArgsLen("lognormvariate",arguments.length,2,2),Sk.builtin.pyCheckType("mu","number",Sk.builtin.checkNumber(n)),Sk.builtin.pyCheckType("sigma","number",Sk.builtin.checkNumber(t)),n=Sk.builtin.asnum$(n),t=Sk.builtin.asnum$(t),new Sk.builtin.float_(Math.exp(normalSample(n,t)))})),t.expovariate=new Sk.builtin.func((function(n){Sk.builtin.pyCheckArgsLen("expovariate",arguments.length,1,1),Sk.builtin.pyCheckType("lambd","number",Sk.builtin.checkNumber(n)),n=Sk.builtin.asnum$(n);var t=i.genrand_res53();return new Sk.builtin.float_(-Math.log(t)/n)})),t.choice=new Sk.builtin.func((function(n){if(Sk.builtin.pyCheckArgsLen("choice",arguments.length,1,1),Sk.builtin.pyCheckType("seq","sequence",Sk.builtin.checkSequence(n)),void 0!==n.sq$length){var t=new Sk.builtin.int_(toInt(i.genrand_res53()*n.sq$length()));return n.mp$subscript(t)}throw new Sk.builtin.TypeError("object has no length")})),t.shuffle=new Sk.builtin.func((function(n){if(Sk.builtin.pyCheckArgsLen("shuffle",arguments.length,1,1),Sk.builtin.pyCheckType("x","sequence",Sk.builtin.checkSequence(n)),n.constructor===Sk.builtin.list){const u=n.v;for(var t=u.length-1;t>0;t-=1){var e=u[r=toInt(i.genrand_res53()*(t+1))];u[r]=u[t],u[t]=e}}else{if(void 0===n.sq$length)throw new Sk.builtin.TypeError("object has no length");if(void 0===n.mp$ass_subscript)throw new Sk.builtin.TypeError("object is immutable");for(t=n.sq$length()-1;t>0;t-=1){var r=new Sk.builtin.int_(toInt(i.genrand_res53()*(t+1)));t=new Sk.builtin.int_(t);e=n.mp$subscript(r);n.mp$ass_subscript(r,n.mp$subscript(t)),n.mp$ass_subscript(t,e)}}return Sk.builtin.none.none$})),t.sample=new Sk.builtin.func((function(n,t){var e,r,u,s,h;for(Sk.builtin.pyCheckArgsLen("sample",arguments.length,2,2),Sk.builtin.pyCheckType("population","iterable",Sk.builtin.checkIterable(n)),Sk.builtin.pyCheckType("k","integer",Sk.builtin.checkInt(t)),t=Sk.builtin.asnum$(t),h=[],e=0,s=(u=Sk.abstr.iter(n)).tp$iternext();void 0!==s;e++,s=u.tp$iternext())r=Math.floor(i.genrand_res53()*(e+1)),e<t?(r<e&&(h[e]=h[r]),h[r]=s):r<t&&(h[r]=s);if(e<t)throw new Sk.builtin.ValueError("sample larger than population");return new Sk.builtin.list(h)})),t};',"src/lib/re.js":`var $builtinmodule=function(name){var mod={__name__:new Sk.builtin.str("re")},validGroups,convert,getFlags,_split,_findall,matchobj,_search,_match,regexobj;return mod.I=2,mod.IGNORECASE=2,mod.M=8,mod.MULTILINE=8,validGroups=["(?:","(?=","(?!"],convert=function(n){var t,e;if(t=n.match(/\\(\\?./g))for(e=0;e<t.length;e++)if(-1==validGroups.indexOf(t[e]))throw new Sk.builtin.ValueError("Disallowed group in pattern: '"+t[e]+"'");return n.replace("/\\\\/g","\\\\\\\\"),n.replace(/([^\\\\]){,(?![^\\[]*\\])/g,"$1{0,")},getFlags=function(n){var t="g";return(n&mod.IGNORECASE)==mod.IGNORECASE&&(t+="i"),(n&mod.MULTILINE)==mod.MULTILINE&&(t+="m"),t},_split=function(n,t,e,r){var l,u,s,a,o,c,b,f,k;if(Sk.builtin.pyCheckArgsLen("split",arguments.length,2,4),!Sk.builtin.checkString(n))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(t))throw new Sk.builtin.TypeError("string must be a string");if(void 0===e&&(e=0),!Sk.builtin.checkNumber(e))throw new Sk.builtin.TypeError("maxsplit must be a number");if(void 0===r&&(r=0),!Sk.builtin.checkNumber(r))throw new Sk.builtin.TypeError("flags must be a number");for(e=Sk.builtin.asnum$(e),l=Sk.ffi.unwrapo(n),u=Sk.ffi.unwrapo(t),s=!(null===(l=convert(l)).match(/^\\(.*\\)$/)),a=getFlags(r),o=new RegExp(l,a),c=[],f=0,k=0;null!=(b=o.exec(u))&&b.index!==o.lastIndex&&(c.push(new Sk.builtin.str(u.substring(f,b.index))),s&&c.push(new Sk.builtin.str(b[0])),f=o.lastIndex,k+=1,!(e&&k>=e)););return c.push(new Sk.builtin.str(u.substring(f))),new Sk.builtin.list(c)},_split.co_varnames=["pattern","string","maxsplit","flags"],_split.$defaults=[new Sk.builtin.int_(0),new Sk.builtin.int_(0)],mod.split=new Sk.builtin.func(_split),_findall=function(n,t,e){var r,l,u,s,a,o;if(Sk.builtin.pyCheckArgsLen("findall",arguments.length,2,3),!Sk.builtin.checkString(n))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(t))throw new Sk.builtin.TypeError("string must be a string");if(void 0===e&&(e=0),!Sk.builtin.checkNumber(e))throw new Sk.builtin.TypeError("flags must be a number");if(r=Sk.ffi.unwrapo(n),l=Sk.ffi.unwrapo(t),r=convert(r),u=getFlags(e),s=new RegExp(r,u),r.match(/\\$/)){var c=new RegExp(/\\n$/);l.match(c)&&(l=l.slice(0,-1))}for(a=[];null!=(o=s.exec(l));){if(o.length<2)a.push(new Sk.builtin.str(o[0]));else if(2==o.length)a.push(new Sk.builtin.str(o[1]));else{for(var b=[],f=1;f<o.length;f++)b.push(new Sk.builtin.str(o[f]));a.push(new Sk.builtin.tuple(b))}o.index===s.lastIndex&&(s.lastIndex+=1)}return new Sk.builtin.list(a)},_findall.co_varnames=["pattern","string","flags"],_findall.$defaults=[new Sk.builtin.int_(0)],mod.findall=new Sk.builtin.func(_findall),matchobj=function(n,t){t.__init__=new Sk.builtin.func((function(n,t,e,r){return n.thematch=t,n.re=e,n.string=r,Sk.builtin.none.none$})),t.groups=new Sk.builtin.func((function(n){var t=n.thematch.v.slice(1);return new Sk.builtin.tuple(t)})),t.group=new Sk.builtin.func((function(n,t){if((t=void 0===t?0:Sk.builtin.asnum$(t))>=n.thematch.v.length)throw new Sk.builtin.IndexError("Index out of range: "+t);return n.thematch.v[t]}))},mod.MatchObject=Sk.misceval.buildClass(mod,matchobj,"MatchObject",[]),mod._findre=function(res,string){var matches,sitem,retval;res=res.replace(/([^\\\\]){,(?![^\\[]*\\])/g,"$1{0,");var re=eval(res),patt=new RegExp("\\n$"),str=Sk.ffi.remapToJs(string);if(matches=str.match(patt)?str.slice(0,-1).match(re):str.match(re),retval=new Sk.builtin.list,null==matches)return retval;for(var i=0;i<matches.length;++i)sitem=new Sk.builtin.str(matches[i]),retval.v.push(sitem);return retval},_search=function(n,t,e){var r;if(Sk.builtin.pyCheckArgsLen("search",arguments.length,2,3),!Sk.builtin.checkString(n))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(t))throw new Sk.builtin.TypeError("string must be a string");if(void 0===e&&(e=0),!Sk.builtin.checkNumber(e))throw new Sk.builtin.TypeError("flags must be a number");r="/"+n.v.replace(/\\//g,"\\\\/")+"/";const l=mod._findre(r,t);return l.v.length<1?Sk.builtin.none.none$:Sk.misceval.callsimArray(mod.MatchObject,[l,n,t])},_search.co_varnames=["pattern","string","flags"],_search.$defaults=[new Sk.builtin.int_(0)],mod.search=new Sk.builtin.func(_search),_match=function(n,t,e){var r;if(Sk.builtin.pyCheckArgsLen("match",arguments.length,2,3),!Sk.builtin.checkString(n))throw new Sk.builtin.TypeError("pattern must be a string");if(!Sk.builtin.checkString(t))throw new Sk.builtin.TypeError("string must be a string");if(void 0===e&&(e=0),!Sk.builtin.checkNumber(e))throw new Sk.builtin.TypeError("flags must be a number");const l=Sk.ffi.remapToJs(n);r="/^"+l.replace(/\\//g,"\\\\/")+"/";const u=mod._findre(r,t);return Sk.ffi.remapToJs(u).length<1?Sk.builtin.none.none$:Sk.misceval.callsimArray(mod.MatchObject,[u,n,t])},_match.co_varnames=["pattern","string","flags"],_match.$defaults=[new Sk.builtin.int_(0)],mod.match=new Sk.builtin.func(_match),regexobj=function(n,t){var e,r,l,u,s,a;t.__init__=new Sk.builtin.func((function(n,t,e){return n.re=t,n.flags=void 0===e?0:e,Sk.builtin.none.none$})),a=new Sk.builtin.func((function(n){var t="re.compile('"+Sk.ffi.remapToJs(n.re)+"')";return Sk.ffi.remapToPy(t.substring(0,212))})),t.__str__=a,t.__repr__=a,e=function(n,t,e){var r=Sk.ffi.remapToJs(n),l=null==t?0:Sk.ffi.remapToJs(t),u=null==e?r.length:Sk.ffi.remapToJs(e);return"^"==l&&(l=r.indexOf("\\n")+1),null===u&&(u=r.length),Sk.ffi.remapToPy(r.substring(l,u))},(r=function(n,t,r,l){Sk.builtin.pyCheckArgsLen("search",arguments.length,2,4);var u=e(t,r,l);return _search(n.re,u,n.flags)}).co_varnames=["self","string","pos","endpos"],r.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],t.search=new Sk.builtin.func(r),(l=function(n,t,r,l){Sk.builtin.pyCheckArgsLen("match",arguments.length,2,4);var u=e(t,r,l);return _match(n.re,u,n.flags)}).co_varnames=["self","string","pos","endpos"],l.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],t.match=new Sk.builtin.func(l),(u=function(n,t,e){if(Sk.builtin.pyCheckArgsLen("split",arguments.length,2,3),void 0===e&&(e=0),!Sk.builtin.checkInt(e))throw new Sk.builtin.TypeError("maxsplit must be an integer");return _split(n.re,t,e,n.flags)}).co_varnames=["self","string","maxsplit"],u.$defaults=[new Sk.builtin.int_(0)],t.split=new Sk.builtin.func(u),(s=function(n,t,r,l){Sk.builtin.pyCheckArgsLen("findall",arguments.length,2,4);var u=e(t,r,l);return _findall(n.re,u,n.flags)}).co_varnames=["self","string","pos","endpos"],s.$defaults=[new Sk.builtin.int_(0),Sk.builtin.none.none$],t.findall=new Sk.builtin.func(s)},mod.RegexObject=Sk.misceval.buildClass(mod,regexobj,"RegexObject",[]),mod.compile=new Sk.builtin.func((function(n,t){if(Sk.builtin.pyCheckArgsLen("compile",arguments.length,1,2),!Sk.builtin.checkString(n))throw new Sk.builtin.TypeError("pattern must be a string");if(void 0===t&&(t=0),!Sk.builtin.checkNumber(t))throw new Sk.builtin.TypeError("flags must be a number");return Sk.misceval.callsimArray(mod.RegexObject,[n,t])})),mod.purge=new Sk.builtin.func((function(){})),mod};`,"src/lib/signal.js":'var $builtinmodule=function(n){var i={};return i.SIG_DFL=new Sk.builtin.int_(0),i.SIG_IGN=new Sk.builtin.int_(1),i.CTRL_C_EVENT=new Sk.builtin.int_(0),i.CTRL_BREAK_EVENT=new Sk.builtin.int_(0),i.NSIG=new Sk.builtin.int_(23),i.SIGHUP=new Sk.builtin.int_(1),i.SIGNINT=new Sk.builtin.int_(2),i.SIGILL=new Sk.builtin.int_(4),i.SIGFPE=new Sk.builtin.int_(8),i.SIGKILL=new Sk.builtin.int_(9),i.SIGSEGV=new Sk.builtin.int_(11),i.SIGTERM=new Sk.builtin.int_(15),i.SIGBREAK=new Sk.builtin.int_(21),i.SIGABRT=new Sk.builtin.int_(22),i.pause=new Sk.builtin.func((function(){Sk.builtin.pyCheckArgsLen("pause",arguments.length,0,0);var n=new Sk.misceval.Suspension;return n.resume=function(){return Sk.builtin.none.none$},n.data={type:"Sk.promise",promise:new Promise((function(n,i){if(null!=Sk.signals&&Sk.signals.addEventListener){Sk.signals.addEventListener((function handleSignal(i){Sk.signals.removeEventListener(handleSignal),n()}))}else console.warn("signal.pause() not supported"),Sk.misceval.print_("signal.pause() not supported"),n()}))},n})),i.signal=new Sk.builtin.func((function(){throw new Sk.builtin.NotImplementedError("signal.signal is not supported.")})),i};',"src/lib/string.js":'var $builtinmodule=function(i){var t={};return t.ascii_lowercase=new Sk.builtin.str("abcdefghijklmnopqrstuvwxyz"),t.ascii_uppercase=new Sk.builtin.str("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.ascii_letters=new Sk.builtin.str(t.ascii_lowercase.v+t.ascii_uppercase.v),t.lowercase=new Sk.builtin.str("abcdefghijklmnopqrstuvwxyz"),t.uppercase=new Sk.builtin.str("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),t.letters=new Sk.builtin.str(t.lowercase.v+t.uppercase.v),t.digits=new Sk.builtin.str("0123456789"),t.hexdigits=new Sk.builtin.str("0123456789abcdefABCDEF"),t.octdigits=new Sk.builtin.str("01234567"),t.punctuation=new Sk.builtin.str("!\\"#$%&\'()*+,-./:;<=>?@[\\\\]^_`{|}~"),t.whitespace=new Sk.builtin.str("\\t\\n\\v\\f\\r "),t.printable=new Sk.builtin.str(t.digits.v+t.letters.v+t.punctuation.v+" \\t\\n\\r\\v\\f"),t.split=new Sk.builtin.func((function(...i){return Sk.misceval.callsimArray(Sk.builtin.str.prototype.split,i)})),t.capitalize=new Sk.builtin.func((function(i){return Sk.misceval.callsimArray(Sk.builtin.str.prototype.capitalize,[i])})),t.join=new Sk.builtin.func((function(i,t){return void 0===t&&(t=new Sk.builtin.str(" ")),Sk.misceval.callsimArray(Sk.builtin.str.prototype.join,[t,i])})),t.capwords=new Sk.builtin.func((function(i,n){if(Sk.builtin.pyCheckArgsLen("capwords",arguments.length,1,2),!Sk.builtin.checkString(i))throw new Sk.builtin.TypeError("s must be a string");if(void 0===n&&(n=new Sk.builtin.str(" ")),!Sk.builtin.checkString(n))throw new Sk.builtin.TypeError("sep must be a string");for(var e=Sk.misceval.callsimArray(t.split,[i,n]).v,r=[],l=0;l<e.length;l++){var s=e[l],u=Sk.misceval.callsimArray(t.capitalize,[s]);r.push(u)}return Sk.misceval.callsimArray(t.join,[new Sk.builtin.list(r),n])})),t};',"src/lib/time.js":`var $builtinmodule=function(t){var e={};e.__package__=new Sk.builtin.str("");var n=Sk.builtin.make_structseq("time","struct_time",{tm_year:"year, for example, 1993",tm_mon:"month of year, range [1, 12]",tm_mday:"day of month, range [1, 31]",tm_hour:"hours, range [0, 23]",tm_min:"minutes, range [0, 59]",tm_sec:"seconds, range [0, 61]",tm_wday:"day of week, range [0, 6], Monday is 0",tm_yday:"day of year, range [1, 366]",tm_isdst:"1 if summer time is in effect, 0 if not, and -1 if unknown"},{tm_zone:"abbreviation of timezone name",tm_gmtoff:"offset from UTC in seconds"});function check_struct_time(t){if(!(t instanceof n))throw new Sk.builtin.TypeError("Required argument 'struct_time' must be of type: 'struct_time'");var e,i=t.v.length,u=t.v;for(e=0;e<i;++e)if(!Sk.builtin.checkInt(u[e]))throw new Sk.builtin.TypeError("struct_time may only contain integers");return!0}function padLeft(t,e,n){var i=t.toString();return Array(e-i.length+1).join(n||" ")+i}function getDayOfYear(t,e){var n=(e=e||!1)?t.getUTCMonth():t.getMonth(),i=e?t.getUTCDate():t.getDate(),u=[0,31,59,90,120,151,181,212,243,273,304,334][n]+i;return n>1&&function isLeapYear(t){return 0==(3&t)&&(t%100!=0||t%400==0)}(e?t.getUTCFullYear():t.getFullYear())&&u++,u}function stdTimezoneOffset(){var t=new Date(2002,0,1),e=new Date(2002,6,1);return Math.max(t.getTimezoneOffset(),e.getTimezoneOffset())}function dst(t){return t.getTimezoneOffset()<stdTimezoneOffset()}function timeZoneName(t){var e,n=/\\((.*)\\)/.exec(t.toString());if(null!=Sk.global.navigator&&(e=Sk.global.navigator.userLanguage||Sk.global.navigator.language),n&&n.length>1)return n[1];if(void 0===e)return null;try{return(n=t.toLocaleString(e,{timeZoneName:"short"}).split(" "))[n.length-1]}catch(i){return null}}function from_seconds(t,e){var i=new Date;if(t){Sk.builtin.pyCheckType("secs","number",Sk.builtin.checkNumber(t));var u=Sk.builtin.asnum$(t);i.setTime(1e3*u)}return function date_to_struct_time(t,e){let i;if(e=e||!1)i=[new Sk.builtin.str("UTC"),new Sk.builtin.int_(0)];else{var u=-stdTimezoneOffset()/60,r=(u<0?"-":"+")+(""+Math.abs(u)).padStart(2,"0");i=[new Sk.builtin.str(r),new Sk.builtin.int_(3600*u)]}return new n([Sk.builtin.assk$(e?t.getUTCFullYear():t.getFullYear()),Sk.builtin.assk$((e?t.getUTCMonth():t.getMonth())+1),Sk.builtin.assk$(e?t.getUTCDate():t.getDate()),Sk.builtin.assk$(e?t.getUTCHours():t.getHours()),Sk.builtin.assk$(e?t.getUTCMinutes():t.getMinutes()),Sk.builtin.assk$(e?t.getUTCSeconds():t.getSeconds()),Sk.builtin.assk$(((e?t.getUTCDay():t.getDay())+6)%7),Sk.builtin.assk$(getDayOfYear(t,e)),Sk.builtin.assk$(e?0:dst(t)?1:0)],i)}(i,e)}e.struct_time=n,e.time=new Sk.builtin.func((function(){return Sk.builtin.pyCheckArgsLen("time",arguments.length,0,0),new Sk.builtin.float_(Date.now()/1e3)})),e.sleep=new Sk.builtin.func((function(t){return Sk.builtin.pyCheckArgsLen("sleep",arguments.length,1,1),Sk.builtin.pyCheckType("delay","float",Sk.builtin.checkNumber(t)),new Sk.misceval.promiseToSuspension(new Promise((function(e){Sk.setTimeout((function(){e(Sk.builtin.none.none$)}),1e3*Sk.ffi.remapToJs(t))})))})),e.localtime=new Sk.builtin.func((function(t){return Sk.builtin.pyCheckArgsLen("localtime",arguments.length,0,1),from_seconds(t,!1)})),e.gmtime=new Sk.builtin.func((function(t){return Sk.builtin.pyCheckArgsLen("gmtime",arguments.length,0,1),from_seconds(t,!0)}));var i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];function asctime_f(t){if(Sk.builtin.pyCheckArgsLen("asctime",arguments.length,0,1),!t||Sk.builtin.checkNone(t)?t=from_seconds():t instanceof n||(t=new n(t)),t instanceof Sk.builtin.tuple&&9==t.v.length){var e=[];return e.push(u[Sk.builtin.asnum$(t.v[6])]),e.push(i[Sk.builtin.asnum$(t.v[1])-1]),e.push(padLeft(Sk.builtin.asnum$(t.v[2]).toString(),2,"0")),e.push(padLeft(Sk.builtin.asnum$(t.v[3]).toString(),2,"0")+":"+padLeft(Sk.builtin.asnum$(t.v[4]).toString(),2,"0")+":"+padLeft(Sk.builtin.asnum$(t.v[5]).toString(),2,"0")),e.push(padLeft(Sk.builtin.asnum$(t.v[0]).toString(),4,"0")),new Sk.builtin.str(e.join(" "))}}function mktime_f(t){if(Sk.builtin.pyCheckArgsLen("mktime",arguments.length,1,1),t instanceof Sk.builtin.tuple&&9==t.v.length){var e=new Date(Sk.builtin.asnum$(t.v[0]),Sk.builtin.asnum$(t.v[1])-1,Sk.builtin.asnum$(t.v[2]),Sk.builtin.asnum$(t.v[3]),Sk.builtin.asnum$(t.v[4]),Sk.builtin.asnum$(t.v[5]));return Sk.builtin.assk$(e.getTime()/1e3,void 0)}throw new Sk.builtin.TypeError("mktime() requires a struct_time or 9-tuple")}e.asctime=new Sk.builtin.func(asctime_f),e.ctime=new Sk.builtin.func((function(t){return Sk.builtin.pyCheckArgsLen("ctime",arguments.length,0,1),asctime_f(from_seconds(t))})),e.mktime=new Sk.builtin.func(mktime_f),e.timezone=new Sk.builtin.int_(60*stdTimezoneOffset()),e.altzone=new Sk.builtin.int_(60*function altTimezoneOffset(){var t=new Date(2002,0,1),e=new Date(2002,6,1);return Math.min(t.getTimezoneOffset(),e.getTimezoneOffset())}()),e.daylight=new Sk.builtin.int_(function daylight_check(){const t=new Date(2002,0,1),e=new Date(2002,6,1);return t.getTimezoneOffset()!=e.getTimezoneOffset()}()?1:0),e.tzname=new Sk.builtin.tuple(function timeZoneNames(){var t=new Date(2002,0,1),e=new Date(2002,6,1);return dst(t)?[new Sk.builtin.str(timeZoneName(e)),new Sk.builtin.str(timeZoneName(t))]:[new Sk.builtin.str(timeZoneName(t)),new Sk.builtin.str(timeZoneName(e))]}()),e.accept2dyear=Sk.builtin.assk$(1),e.clock=new Sk.builtin.func((function(){var t=0;return t=Sk.global.performance&&Sk.global.performance.now?performance.now()/1e3:(new Date).getTime()/1e3,new Sk.builtin.float_(t)})),e.strftime=new Sk.builtin.func((function strftime_f(t,e){var i;if(Sk.builtin.pyCheckArgsLen("strftime",arguments.length,1,2),!Sk.builtin.checkString(t))throw new Sk.builtin.TypeError("format must be a string");return e?e instanceof n||(e=new n(e)):e=from_seconds(),check_struct_time(e),i=Sk.ffi.remapToJs(t),Sk.ffi.remapToPy(Sk.global.strftime(i,new Date(1e3*mktime_f(e).v)))})),e.tzset=new Sk.builtin.func((function tzset_f(){throw new Sk.builtin.NotImplementedError("time.tzset() is not yet implemented")}));let r=null;return e.strptime=new Sk.builtin.func((function strptime_f(...t){return Sk.builtin.pyCheckArgsLen("strptime",t.length,1,2),null===r?Sk.misceval.chain(Sk.importModule("_strptime",!1,!0),(e=>(r=e.tp$getattr(new Sk.builtin.str("_strptime_time")),r.tp$call(t)))):r.tp$call(t)})),e};`,"src/lib/token.js":'var $builtinmodule=function(n){var e={};e.__file__=new Sk.builtin.str("/src/lib/token.py");const t=[];for(let i in Sk.token.tok_name){const n=Sk.token.tok_name[i].slice(2),k=parseInt(i,10);t.push(Sk.ffi.remapToPy(k)),t.push(Sk.ffi.remapToPy(n)),e[n]=Sk.ffi.remapToPy(k)}return e.tok_name=new Sk.builtin.dict(t),e.ISTERMINAL=new Sk.builtin.func((function(n){return Sk.builtin.pyCheckArgsLen("ISTERMINAL",arguments.length,1,1),Sk.token.ISTERMINAL(Sk.ffi.remapToJs(n))})),e.ISNONTERMINAL=new Sk.builtin.func((function(n){return Sk.builtin.pyCheckArgsLen("ISNONTERMINAL",arguments.length,1,1),Sk.token.ISNONTERMINAL(Sk.ffi.remapToJs(n))})),e.ISEOF=new Sk.builtin.func((function(n){return Sk.builtin.pyCheckArgsLen("ISEOF",arguments.length,1,1),Sk.token.ISEOF(Sk.ffi.remapToJs(n))})),e};',"src/lib/tokenize.js":'var $builtinmodule=function(e){var i={};return i.tokenize=new Sk.builtin.func((function(e){Sk.builtin.pyCheckArgsLen("tokenize",1,1),Sk.builtin.checkFunction(e);const i=[];return Sk._tokenize("<stdin>",(function jsReadline(){const i=Sk.misceval.callsimArray(e);return Sk.ffi.remapToJs(i)}),"UTF-8",(function receiveToken(e){i.push(new Sk.builtin.tuple([Sk.ffi.remapToPy(e.type),Sk.ffi.remapToPy(e.string),new Sk.builtin.tuple([Sk.ffi.remapToPy(e.start[0]),Sk.ffi.remapToPy(e.start[1])]),new Sk.builtin.tuple([Sk.ffi.remapToPy(e.end[0]),Sk.ffi.remapToPy(e.end[1])]),Sk.ffi.remapToPy(e.line)]))})),new Sk.builtin.list(i)})),i};',"src/lib/turtle.js":`var $builtinmodule=function(e){"use strict";var t=function getConfiguredTarget(){var e,t;for(t="string"==typeof(e=Sk.TurtleGraphics&&Sk.TurtleGraphics.target||"turtle")?document.getElementById(e):e;t.firstChild;)t.removeChild(t.firstChild);return t}();return t.turtleInstance?t.turtleInstance.reset():t.turtleInstance=function generateTurtleModule(e){var t,n,r,i,s,a,o,l,u={__name__:new Sk.builtin.str("turtle")},h=!0,c=1e3/30,d={},f={},_={target:"turtle",width:400,height:400,worldWidth:0,worldHeight:0,animate:!0,bufferSize:0,allowUndo:!0,assets:{}};function getAsset(e){var t=i.assets,n="function"==typeof t?t(e):t[e];return"string"==typeof n?new Promise((function(t,r){var s=new Image;s.onload=function(){i.assets[e]=this,t(s)},s.onerror=function(){r(new Error("Missing asset: "+n))},s.src=n})):new InstantPromise(void 0,n)}function InstantPromise(e,t){this.lastResult=t,this.lastError=e}function FrameManager(){this.reset()}function getFrameManager(){return o||(o=new FrameManager),o}function MouseHandler(){var e=this;for(var t in this._target=getTarget(),this._managers={},this._handlers={mousedown:function(t){e.onEvent("mousedown",t)},mouseup:function(t){e.onEvent("mouseup",t)},mousemove:function(t){e.onEvent("mousemove",t)}},this._handlers)this._target.addEventListener(t,this._handlers[t])}function EventManager(e,t){this._type=e,this._target=t,this._handlers=void 0,function getMouseHandler(){return a||(a=new MouseHandler),a}().addManager(e,this)}function Turtle(e){if(getFrameManager().addTurtle(this),this._screen=getScreen(),this._managers={},this._shape=e.v,!d.hasOwnProperty(this._shape))throw new Sk.builtin.ValueError("Shape:'"+this._shape+"' not in default shape, please check shape again!");this.reset()}function Screen(){var e,t;this._frames=1,this._delay=void 0,this._bgcolor="none",this._mode="standard",this._managers={},this._keyLogger={},e=(i.worldWidth||i.width||getWidth())/2,t=(i.worldHeight||i.height||getHeight())/2,this.setUpWorld(-e,-t,e,t)}function ensureAnonymous(){return s||(s=Sk.misceval.callsimArray(u.Turtle)),s.instance}function getTarget(){return e}function getScreen(){return r||(r=new Screen),r}function getWidth(){return 0|(r&&r._width||i.width||getTarget().clientWidth||_.width)}function getHeight(){return 0|(r&&r._height||i.height||getTarget().clientHeight||_.height)}function createLayer(e,t){var n,r=document.createElement("canvas"),i=getWidth(),s=getHeight(),a=getTarget().firstChild?-s+"px":"0";return r.width=i,r.height=s,r.style.position="relative",r.style.display="block",r.style.setProperty("margin-top",a),r.style.setProperty("z-index",e),t&&(r.style.display="none"),getTarget().appendChild(r),(n=r.getContext("2d")).lineCap="round",n.lineJoin="round",applyWorld(getScreen(),n),n}function cancelAnimationFrame(){t&&((window.cancelAnimationFrame||window.mozCancelAnimationFrame)(t),t=void 0),n&&(window.clearTimeout(n),n=void 0)}function applyWorld(e,t){var n=e.llx,r=(e.lly,e.urx,e.ury),i=e.xScale,s=e.yScale;t&&(clearLayer(t),t.restore(),t.save(),t.scale(1/i,1/s),t.translate(-n,-r))}function pushUndo(e){var t,n,r;if(i.allowUndo&&e._bufferSize){for(e._undoBuffer||(e._undoBuffer=[]);e._undoBuffer.length>e._bufferSize;)e._undoBuffer.shift();for(n={},t="x y angle radians color fill down filling shown shape size".split(" "),r=0;r<t.length;r++)n[t[r]]=e["_"+t[r]];return e._undoBuffer.push(n),e.addUpdate((function(){n.fillBuffer=this.fillBuffer?this.fillBuffer.slice():void 0,e._paper&&e._paper.canvas&&(n.image=e._paper.canvas.toDataURL())}),!1)}}e.hasAttribute("tabindex")||e.setAttribute("tabindex",0),f.FLOAT=function(e){return new Sk.builtin.float_(e)},f.COLOR=function(e){if("string"==typeof e)return new Sk.builtin.str(e);for(var t=0;t<3;t++)e[t]=Sk.builtin.assk$(e[t]);return 4===e.length&&(e[3]=new Sk.builtin.float_(e[3])),new Sk.builtin.tuple(e)},f.TURTLE_LIST=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e[n].skInstance);return new Sk.builtin.tuple(t)},d.arrow=[[-10,0],[10,0],[0,10]],d.square=[[10,-10],[10,10],[-10,10],[-10,-10]],d.triangle=[[10,-5.77],[0,11.55],[-10,-5.77]],d.classic=[[0,0],[-5,-9],[0,-7],[5,-9]],d.turtle=[[0,16],[-2,14],[-1,10],[-4,7],[-7,9],[-9,8],[-6,5],[-7,1],[-5,-3],[-8,-6],[-6,-8],[-4,-5],[0,-7],[4,-5],[6,-8],[8,-6],[5,-3],[7,1],[6,5],[9,8],[7,9],[4,7],[1,10],[2,14]],d.circle=[[10,0],[9.51,3.09],[8.09,5.88],[5.88,8.09],[3.09,9.51],[0,10],[-3.09,9.51],[-5.88,8.09],[-8.09,5.88],[-9.51,3.09],[-10,0],[-9.51,-3.09],[-8.09,-5.88],[-5.88,-8.09],[-3.09,-9.51],[-0,-10],[3.09,-9.51],[5.88,-8.09],[8.09,-5.88],[9.51,-3.09]],i=function(){var e;for(e in Sk.TurtleGraphics||(Sk.TurtleGraphics={}),_)Sk.TurtleGraphics.hasOwnProperty(e)||(Sk.TurtleGraphics[e]=_[e]);return Sk.TurtleGraphics}(),InstantPromise.prototype.then=function(e){if(this.lastError)return this;try{this.lastResult=e(this.lastResult)}catch(t){this.lastResult=void 0,this.lastError=t}return this.lastResult instanceof Promise?this.lastResult:this},InstantPromise.prototype.catch=function(e){if(this.lastError)try{this.lastResult=e(this.lastError),this.lastError=void 0}catch(t){this.lastResult=void 0,this.lastError=t}return this.lastResult instanceof Promise?this.lastResult:this},function(e){var r,s;function animationFrame(e){return i.animate?!e&&r?r:function(t){return n=window.setTimeout(t,e||c)}:function(e){e()}}(s=window.requestAnimationFrame||window.mozRequestAnimationFrame)&&(r=function(e){return t=s(e)}),e.willRenderNext=function(){return!(!this._buffer||this._frameCount+1!==this.frameBuffer())},e.turtles=function(){return this._turtles},e.addTurtle=function(e){this._turtles.push(e)},e.reset=function(){if(this._turtles)for(var e=this._turtles.length;--e>=0;)this._turtles[e].reset();this._turtles=[],this._frames=[],this._frameCount=0,this._buffer=1,this._rate=0,this._animationFrame=animationFrame()},e.addFrame=function(e,t){return t&&(this._frameCount+=1),this.frames().push(e),!i.animate||this._buffer&&this._frameCount===this.frameBuffer()?this.update():new InstantPromise},e.frames=function(){return this._frames},e.frameBuffer=function(e){return"number"==typeof e&&(this._buffer=0|e,e&&e<=this._frameCount)?this.update():this._buffer},e.refreshInterval=function(e){return"number"==typeof e&&(this._rate=0|e,this._animationFrame=animationFrame(e)),this._rate},e.update=function(){return this._frames&&this._frames.length?this.requestAnimationFrame():new InstantPromise},e.requestAnimationFrame=function(){var e,t,n=this._frames,r=this._animationFrame,i=this._turtles,s=getScreen().spriteLayer();return this._frames=[],this._frameCount=0,new Promise((function(a){r((function paint(){for(t=0;t<n.length;t++)n[t]&&n[t]();for(clearLayer(s),t=0;t<i.length;t++)(e=i[t]).getState().shown&&drawTurtle(e.getState(),s);a()}))}))}}(FrameManager.prototype),(l=MouseHandler.prototype).onEvent=function(e,t){var n,r,i,s,a,o=this._managers[e],l=this._managers.mousemove,u=!1;function computeCoordinates(){if(!u){var e=getScreen(),a=e.spriteLayer().canvas.getBoundingClientRect();n=t.clientX-a.left|0,r=t.clientY-a.top|0,i=n*e.xScale+e.llx,s=r*e.yScale+e.ury,u=!0}}if(("mousedown"===e||"mouseup"===e)&&l&&l.length)for(computeCoordinates(),a=l.length;--a>=0;)l[a].test(n,r,i,s)&&l[a].canMove("mousedown"===e);if(o&&o.length)for(computeCoordinates(),a=o.length;--a>=0;)("mousemove"===e&&o[a].canMove()&&o[a].test(n,r,i,s)||"mousedown"===e&&o[a].test(n,r,i,s))&&o[a].trigger([i,s])},l.reset=function(){this._managers={}},l.addManager=function(e,t){this._managers[e]||(this._managers[e]=[]),this._managers[e].push(t)},function(e){e.reset=function(){this._handlers=void 0},e.canMove=function(e){return!(!this._target||!this._target.hitTest)&&(void 0!==e&&(this._target.hitTest.hit=e),this._target.hitTest.hit)},e.test=function(e,t,n,r){return this._target&&this._target.hitTest?this._target.hitTest(e,t,n,r):!!this._target},e.trigger=function(e){var t,n=this._handlers;if(n&&n.length)for(t=0;t<n.length;t++)n[t].apply({},e)},e.addHandler=function(e,t){var n=this._handlers;if(!t&&n&&n.length)for(;n.shift(););"function"==typeof e?(n||(n=this._handlers=[]),n.push(e)):n&&!n.length&&this.reset()}}(EventManager.prototype),Turtle.RADIANS=2*Math.PI,function(e){function circleRotate(e,t,n){return function(){return e.addUpdate(void 0,!1,{angle:t,radians:n})}}function circleSegment(e,t,n,r,i,s){return function(){return e.translate(t,n,r,i,s,!0)}}e.hitTest=function(e,t,n,r){var i=getScreen().hitTestLayer();clearLayer(i),drawTurtle(this.getState(),i);var s=i.getImageData(e,t,1,1).data;return s[3]||s[0]||s[1]||s[2]},e.addUpdate=function(e,t,n){var r=this.getState(),i=Array.prototype.slice.call(arguments,n?2:3);return getFrameManager().addFrame((function(){if(e&&e.apply(r,i),n)for(var t in n)r[t]=n[t]}),t)},e.getState=function(){var e=this;return this._state||(this._state={x:this._x,y:this._y,angle:this._angle,radians:this._radians,shape:this._shape,color:this._color,fill:this._fill,filling:this._filling,size:this._size,speed:this._computed_speed,down:this._down,shown:this._shown,colorMode:this._colorMode,context:function(){return e.getPaper()}}),this._state},e.translate=function(e,t,n,r,i,s){var a=this;return function translate(e,t,n,r,i,s,a){var o,l=e._computed_speed,u=getScreen(),h=Math.abs(u.xScale),c=Math.abs(u.yScale),d=t,f=n,_=Math.sqrt(r*r*h+i*i*c),g=l?Math.round(Math.max(1,_/l)):1,p=r/g,m=i/g,v=getFrameManager().willRenderNext()?Promise.resolve():new InstantPromise,y=!(!l&&a);for(e.addUpdate((function(){this.filling&&this.fillBuffer.push({x:this.x,y:this.y,stroke:this.down,color:this.color,size:this.size})}),!1),o=0;o<g;o++)d=t+p*(o+1),f=n+m*(o+1),v=v.then(partialTranslate(e,d,f,s,y)),s=!1;return v.then((function(){return[t+r,n+i]}))}(this,e,t,n,r,i,s).then((function(e){a._x=e[0],a._y=e[1]}))},e.rotate=function(e,t,n){var r=this;return function rotate(e,t,n,r){var i,s=e._computed_speed,a=n/e._fullCircle*360,o=s?Math.round(Math.max(1,Math.abs(a)/s)):1,l=n/o,u={},h=!(!s&&r),c=getFrameManager().willRenderNext()?Promise.resolve():new InstantPromise;for(i=0;i<o;i++)calculateHeading(e,t+l*(i+1),u),c=c.then(partialRotate(e,u.angle,u.radians,h));return c.then((function(){return calculateHeading(e,t+n)}))}(this,e,t,n).then((function(e){r._angle=e.angle,r._radians=e.radians}))},e.queueMoveBy=function(e,t,n,r){var i=Math.cos(n)*r,s=Math.sin(n)*r;return this.translate(e,t,i,s,!0)},e.queueTurnTo=function(e,t){return(t%=this._fullCircle)<0&&(t+=this._fullCircle),this.rotate(e,t-e)},e.getManager=function(e){return this._managers[e]||(this._managers[e]=new EventManager(e,this)),this._managers[e]},e.getPaper=function(){return this._paper||(this._paper=createLayer(2))},e.reset=function(){for(var e in this._x=0,this._y=0,this._radians=0,this._angle=0,this._shown=!0,this._down=!0,this._color="black",this._fill="black",this._size=1,this._filling=!1,this._undoBuffer=[],this._speed=3,this._computed_speed=6,this._colorMode=1,this._state=void 0,this._managers)this._managers[e].reset();this._isRadians=!1,this._fullCircle=360,this._bufferSize="number"==typeof i.bufferSize?i.bufferSize:0,removeLayer(this._paper),this._paper=void 0},e.$degrees=function(e){return e="number"==typeof e?Math.abs(e):360,this._isRadians=!1,e&&this._fullCircle?this._angle=this._angle/this._fullCircle*e:this._angle=this._radians=0,this._fullCircle=e,this.addUpdate(void 0,!1,{angle:this._angle,radians:this._radians})},e.$degrees.minArgs=0,e.$degrees.co_varnames=["fullcircle"],e.$degrees.returnType=f.FLOAT,e.$radians=function(){return this._isRadians||(this._isRadians=!0,this._angle=this._radians,this._fullCircle=Turtle.RADIANS),this._angle},e.$radians.returnType=f.FLOAT,e.$position=e.$pos=function(){return[this.$xcor(),this.$ycor()]},e.$position.returnType=function(e){return new Sk.builtin.tuple([new Sk.builtin.float_(e[0]),new Sk.builtin.float_(e[1])])},e.$towards=function(e,t){var n=getCoordinates(e,t);return(Math.PI+Math.atan2(this._y-n.y,this._x-n.x))*(this._fullCircle/Turtle.RADIANS)},e.$towards.co_varnames=["x","y"],e.$towards.minArgs=1,e.$towards.returnType=f.FLOAT,e.$distance=function(e,t){var n=getCoordinates(e,t),r=n.x-this._x,i=n.y-this._y;return Math.sqrt(r*r+i*i)},e.$distance.co_varnames=["x","y"],e.$distance.minArgs=1,e.$distance.returnType=f.FLOAT,e.$heading=function(){return Math.abs(this._angle)<1e-13?0:this._angle},e.$heading.returnType=f.FLOAT,e.$xcor=function(){return Math.abs(this._x)<1e-13?0:this._x},e.$xcor.returnType=f.FLOAT,e.$ycor=function(){return Math.abs(this._y)<1e-13?0:this._y},e.$ycor.returnType=f.FLOAT,e.$forward=e.$fd=function(e){return pushUndo(this),this.queueMoveBy(this._x,this._y,this._radians,e)},e.$forward.co_varnames=e.$fd.co_varnames=["distance"],e.$undo=function(){!function popUndo(e){var t;if(e._bufferSize&&e._undoBuffer&&(t=e._undoBuffer.pop())){for(var n in t)"image"!==n&&"fillBuffer"!==n&&(e["_"+n]=t[n]);e.addUpdate((function(){t.image&&(g.src=t.image),clearLayer(this.context(),!1,g),delete t.image}),!0,t)}}(this)},e.$undobufferentries=function(){return this._undoBuffer.length},e.$setundobuffer=function(e){this._bufferSize="number"==typeof e?Math.min(Math.abs(e),1e3):0},e.$setundobuffer.co_varnames=["size"],e.$backward=e.$back=e.$bk=function(e){return pushUndo(this),this.queueMoveBy(this._x,this._y,this._radians,-e)},e.$backward.co_varnames=e.$back.co_varnames=e.$bk.co_varnames=["distance"],e.$goto_$rw$=e.$setpos=e.$setposition=function(e,t){var n=getCoordinates(e,t);return pushUndo(this),this.translate(this._x,this._y,n.x-this._x,n.y-this._y,!0)},e.$goto_$rw$.co_varnames=e.$setpos.co_varnames=e.$setposition.co_varnames=["x","y"],e.$goto_$rw$.minArgs=e.$setpos.minArgs=e.$setposition.minArgs=1,e.$setx=function(e){return this.translate(this._x,this._y,e-this._x,0,!0)},e.$setx.co_varnames=["x"],e.$sety=function(e){return this.translate(this._x,this._y,0,e-this._y,!0)},e.$sety.co_varnames=["y"],e.$home=function(){var e=this,t=this._angle;return pushUndo(this),e.translate(this._x,this._y,-this._x,-this._y,!0).then((function(n){return e.queueTurnTo(t,0)})).then((function(e){}))},e.$right=e.$rt=function(e){return pushUndo(this),this.rotate(this._angle,-e)},e.$right.co_varnames=e.$rt.co_varnames=["angle"],e.$left=e.$lt=function(e){return pushUndo(this),this.rotate(this._angle,e)},e.$left.co_varnames=e.$lt.co_varnames=["angle"],e.$setheading=e.$seth=function(e){return pushUndo(this),this.queueTurnTo(this._angle,e)},e.$setheading.co_varnames=e.$seth.co_varnames=["angle"],e.$circle=function(e,t,n){var r,i,s,a,o,l,u,h,c,d=this,f=this._x,_=this._y,g=this._angle,p={},m=1/getScreen().lineScale,v=!0;for(pushUndo(this),void 0===t&&(t=d._fullCircle),void 0===n&&(i=Math.abs(t)/d._fullCircle,n=1+(Math.min(11+Math.abs(e*m)/6,59)*i|0)),a=.5*(s=t/n),o=2*e*Math.sin(s*Math.PI/d._fullCircle),e<0?(o=-o,s=-s,a=-a,r=g-t):r=g+t,c=getFrameManager().willRenderNext()?Promise.resolve():new InstantPromise,g+=a,l=0;l<n;l++)calculateHeading(d,g+s*l,p),u=Math.cos(p.radians)*o,h=Math.sin(p.radians)*o,c=c.then(circleRotate(d,p.angle,p.radians)).then(circleSegment(d,f,_,u,h,v)),f+=u,_+=h,v=!1;return c.then((function(){return calculateHeading(d,r,p),d._angle=p.angle,d._radians=p.radians,d.addUpdate(void 0,!0,p)}))},e.$circle.co_varnames=["radius","extent","steps"],e.$circle.minArgs=1,e.$penup=e.$up=e.$pu=function(){return this._down=!1,this.addUpdate(void 0,!1,{down:!1})},e.$pendown=e.$down=e.$pd=function(){return this._down=!0,this.addUpdate(void 0,!1,{down:!0})},e.$isdown=function(){return this._down},e.$speed=function(e){if("undefined"==typeof e)return this._speed;const t={fastest:0,fast:10,normal:6,slow:3,slowest:1};if(e in t&&(e=t[e]),"number"!=typeof e){if("string"==typeof e){const e=Object.keys(t).join(", ");throw new Sk.builtin.TypeError("speed string expected one of "+e)}throw new Sk.builtin.TypeError("speed expected a string or number")}return e=e>.5&&e<10.5?Sk.builtin.asnum$(Sk.builtin.round(Sk.builtin.assk$(e))):0,this._speed=e,this._computed_speed=2*e,this.addUpdate(void 0,!1,{speed:this._computed_speed})},e.$speed.minArgs=0,e.$speed.co_varnames=["speed"],e.$pencolor=function(e,t,n,r){return void 0!==e?(this._color=createColor(this._colorMode,e,t,n,r),this.addUpdate(void 0,this._shown,{color:this._color})):hexToRGB(this._color)},e.$pencolor.co_varnames=["r","g","b","a"],e.$pencolor.minArgs=0,e.$pencolor.returnType=f.COLOR,e.$fillcolor=function(e,t,n,r){return void 0!==e?(this._fill=createColor(this._colorMode,e,t,n,r),this.addUpdate(void 0,this._shown,{fill:this._fill})):hexToRGB(this._fill)},e.$fillcolor.co_varnames=["r","g","b","a"],e.$fillcolor.minArgs=0,e.$fillcolor.returnType=f.COLOR,e.$color=function(e,t,n,r){return void 0!==e?(void 0===t||void 0!==n?(this._color=createColor(this._colorMode,e,t,n,r),this._fill=this._color):(this._color=createColor(this._colorMode,e),this._fill=createColor(this._colorMode,t)),this.addUpdate(void 0,this._shown,{color:this._color,fill:this._fill})):[this.$pencolor(),this.$fillcolor()]},e.$color.minArgs=0,e.$color.co_varnames=["color","fill","b","a"],e.$color.returnType=function(e){return new Sk.builtin.tuple([f.COLOR(e[0]),f.COLOR(e[1])])},e.$fill=function(e){if(void 0!==e){if((e=!!e)===this._filling)return;return this._filling=e,e?(pushUndo(this),this.addUpdate(void 0,!1,{filling:!0,fillBuffer:[{x:this._x,y:this._y}]})):(pushUndo(this),this.addUpdate((function(){this.fillBuffer.push(this),drawFill.call(this)}),!0,{filling:!1,fillBuffer:void 0}))}return this._filling},e.$fill.co_varnames=["flag"],e.$fill.minArgs=0,e.$begin_fill=function(){return this.$fill(!0)},e.$end_fill=function(){return this.$fill(!1)},e.$stamp=function(){return pushUndo(this),this.addUpdate((function(){drawTurtle(this,this.context())}),!0)},e.$dot=function(e,t,n,r,i){return pushUndo(this),e="number"==typeof(e=Sk.builtin.asnum$(e))?Math.max(1,0|Math.abs(e)):Math.max(this._size+4,2*this._size),t=void 0!==t?createColor(this._colorMode,t,n,r,i):this._color,this.addUpdate(drawDot,!0,void 0,e,t)},e.$dot.co_varnames=["size","color","g","b","a"],e.$write=function(e,t,n,r){var i,s,a,o,l,u=this;return pushUndo(this),e=String(e),r&&r.constructor===Array&&(s="string"==typeof r[0]?r[0]:"Arial",a=String(r[1]||"12pt"),o="string"==typeof r[2]?r[2]:"normal",/^\\d+$/.test(a)&&(a+="pt"),r=[o,a,s].join(" ")),n||(n="left"),i=this.addUpdate(drawText,!0,void 0,e,n,r),!t||"left"!==n&&"center"!==n||(l=function measureText(e,t){return t&&(p.font=t),p.measureText(e).width}(e,r),"center"===n&&(l/=2),i=i.then((function(){var e=u.getState();return u.translate(e.x,e.y,l,0,!0)}))),i},e.$write.co_varnames=["message","move","align","font"],e.$write.minArgs=1,e.$pensize=e.$width=function(e){return void 0!==e?(this._size=e,this.addUpdate(void 0,this._shown,{size:e})):this._size},e.$pensize.minArgs=e.$width.minArgs=0,e.$pensize.co_varnames=e.$width.co_varnames=["width"],e.$showturtle=e.$st=function(){return this._shown=!0,this.addUpdate(void 0,!0,{shown:!0})},e.$hideturtle=e.$ht=function(){return this._shown=!1,this.addUpdate(void 0,!0,{shown:!1})},e.$isvisible=function(){return this._shown},e.$shape=function(e){return e&&d[e]?(this._shape=e,this.addUpdate(void 0,this._shown,{shape:e})):this._shape},e.$shape.minArgs=0,e.$shape.co_varnames=["name"],e.$colormode=function(e){return void 0!==e?(this._colorMode=255===e?255:1,this.addUpdate(void 0,this._shown,{colorMode:this._colorMode})):this._colorMode},e.$colormode.minArgs=0,e.$colormode.co_varnames=["cmode"],e.$colormode.returnType=function(e){return 255===e?new Sk.builtin.int_(255):new Sk.builtin.float_(1)},e.$window_width=function(){return this._screen.$window_width()},e.$window_height=function(){return this._screen.$window_height()},e.$tracer=function(e,t){return this._screen.$tracer(e,t)},e.$tracer.minArgs=0,e.$tracer.co_varnames=["n","delay"],e.$update=function(){return this._screen.$update()},e.$delay=function(e){return this._screen.$delay(e)},e.$delay.minArgs=0,e.$delay.co_varnames=["delay"],e.$reset=function(){return this.reset(),this.$clear()},e.$mainloop=e.$done=function(){return this._screen.$mainloop()},e.$clear=function(){return this.addUpdate((function(){clearLayer(this.context())}),!0)},e.$dot.minArgs=0,e.$onclick=function(e,t,n){this.getManager("mousedown").addHandler(e,n)},e.$onclick.minArgs=1,e.$onclick.co_varnames=["method","btn","add"],e.$onrelease=function(e,t,n){this.getManager("mouseup").addHandler(e,n)},e.$onrelease.minArgs=1,e.$onrelease.co_varnames=["method","btn","add"],e.$ondrag=function(e,t,n){this.getManager("mousemove").addHandler(e,n)},e.$ondrag.minArgs=1,e.$ondrag.co_varnames=["method","btn","add"],e.$getscreen=function(){return Sk.misceval.callsimArray(u.Screen)},e.$getscreen.isSk=!0,e.$clone=function(){var e=Sk.misceval.callsimOrSuspendArray(u.Turtle);return e.instance._x=this._x,e.instance._y=this._y,e.instance._angle=this._angle,e.instance._radians=this._radians,e.instance._shape=this._shape,e.instance._color=this._color,e.instance._fill=this._fill,e.instance._filling=this._filling,e.instance._size=this._size,e.instance._computed_speed=this._computed_speed,e.instance._down=this._down,e.instance._shown=this._shown,e.instance._colorMode=this._colorMode,e.instance._isRadians=this._isRadians,e.instance._fullCircle=this._fullCircle,e.instance._bufferSize=this._bufferSize,e.instance._undoBuffer=this._undoBuffer,e._clonedFrom=this,e},e.$clone.returnType=function(e){return e},e.$getturtle=e.$getpen=function(){return this.skInstance},e.$getturtle.isSk=!0}(Turtle.prototype),function(e){e.spriteLayer=function(){return this._sprites||(this._sprites=createLayer(3))},e.bgLayer=function(){return this._background||(this._background=createLayer(1))},e.hitTestLayer=function(){return this._hitTest||(this._hitTest=createLayer(0,!0))},e.getManager=function(e){return this._managers[e]||(this._managers[e]=new EventManager(e,this)),this._managers[e]},e.reset=function(){var e;for(e in this._keyListeners=void 0,this._keyLogger)window.clearInterval(this._keyLogger[e]),window.clearTimeout(this._keyLogger[e]),delete this._keyLogger[e];for(e in this._keyDownListener&&(getTarget().removeEventListener("keydown",this._keyDownListener),this._keyDownListener=void 0),this._keyUpListener&&(getTarget().removeEventListener("keyup",this._keyUpListener),this._keyUpListener=void 0),this._timer&&(window.clearTimeout(this._timer),this._timer=void 0),this._managers)this._managers[e].reset();this._mode="standard",removeLayer(this._sprites),this._sprites=void 0,removeLayer(this._background),this._background=void 0},e.setUpWorld=function(e,t,n,r){var i=this;i.llx=e,i.lly=t,i.urx=n,i.ury=r,i.xScale=(n-e)/getWidth(),i.yScale=-1*(r-t)/getHeight(),i.lineScale=Math.min(Math.abs(i.xScale),Math.abs(i.yScale))},e.$setup=function(e,t,n,r){return isNaN(parseFloat(e))&&(e=getWidth()),isNaN(parseFloat(t))&&(t=getHeight()),e<=1&&(e=getWidth()*e),t<=1&&(t=getHeight()*t),this._width=e,this._height=t,this._xOffset=void 0===n||isNaN(parseInt(n))?0:parseInt(n),this._yOffset=void 0===r||isNaN(parseInt(r))?0:parseInt(r),"world"===this._mode?this._setworldcoordinates(this.llx,this.lly,this.urx,this.ury):this._setworldcoordinates(-e/2,-t/2,e/2,t/2)},e.$setup.minArgs=0,e.$setup.co_varnames=["width","height","startx","starty"],e.$register_shape=e.$addshape=function(e,t){if(!t)return getAsset(e).then((function(t){d[e]=t}));d[e]=t},e.$register_shape.minArgs=1,e.$register_shape.co_varnames=["name","shape"],e.$getshapes=function(){return Object.keys(d)},e.$tracer=function(e,t){return void 0!==e||void 0!==t?("number"==typeof t&&(this._delay=t,getFrameManager().refreshInterval(t)),"number"==typeof e?(this._frames=e,getFrameManager().frameBuffer(e)):void 0):this._frames},e.$tracer.co_varnames=["frames","delay"],e.$tracer.minArgs=0,e.$delay=function(e){return void 0!==e?this.$tracer(void 0,e):void 0===this._delay?c:this._delay},e.$delay.co_varnames=["delay"],e._setworldcoordinates=function(e,t,n,r){return getFrameManager().turtles(),this.setUpWorld(e,t,n,r),this._sprites&&applyWorld(this,this._sprites),this._background&&applyWorld(this,this._background),this.$clear()},e.$setworldcoordinates=function(e,t,n,r){return this._mode="world",this._setworldcoordinates(e,t,n,r)},e.$setworldcoordinates.co_varnames=["llx","lly","urx","ury"],e.minArgs=4,e.$clear=e.$clearscreen=function(){return this.reset(),this.$reset()},e.$update=function(){return getFrameManager().update()},e.$reset=e.$resetscreen=function(){var e=this,t=getFrameManager().turtles();return getFrameManager().addFrame((function(){applyWorld(e,e._sprites),applyWorld(e,e._background);for(var n=0;n<t.length;n++)t[n].reset(),applyWorld(e,t[n]._paper)}),!0)},e.$window_width=function(){return getWidth()},e.$window_height=function(){return getHeight()},e.$delay.minArgs=0,e.$turtles=function(){return getFrameManager().turtles()},e.$turtles.returnType=f.TURTLE_LIST,e.$bgpic=function(e){var t;return e?(t=this,getAsset(e).then((function(e){clearLayer(t.bgLayer(),void 0,e)}))):this._bgpic},e.$bgpic.minArgs=0,e.$bgpic.co_varnames=["name"],e.$bgcolor=function(e,t,n,r){return void 0!==e?(this._bgcolor=createColor(this._colorMode,e,t,n,r),void clearLayer(this.bgLayer(),this._bgcolor)):hexToRGB(this._bgcolor)},e.$bgcolor.minArgs=0,e.$bgcolor.co_varnames=["color","g","b","a"],e.$bgcolor.returnType=f.COLOR,e.$mainloop=e.$done=function(){},e.$bye=function(){return Sk.TurtleGraphics.reset()},e.$exitonclick=function(){return this._exitOnClick=!0,this.getManager("mousedown").addHandler((function(){resetTurtle()}),!1)},e.$onclick=function(e,t,n){this._exitOnClick||this.getManager("mousedown").addHandler(e,n)},e.$onclick.minArgs=1,e.$onclick.co_varnames=["method","btn","add"];var t={8:/^back(space)?$/i,9:/^tab$/i,13:/^(enter|return)$/i,16:/^shift$/i,17:/^(ctrl|control)$/i,18:/^alt$/i,27:/^esc(ape)?$/i,32:/^space$/i,33:/^page[\\s\\-]?up$/i,34:/^page[\\s\\-]?down$/i,35:/^end$/i,36:/^home$/i,37:/^left([\\s\\-]?arrow)?$/i,38:/^up([\\s\\-]?arrow)?$/i,39:/^right([\\s\\-]?arrow)?$/i,40:/^down([\\s\\-]?arrow)?$/i,45:/^insert$/i,46:/^del(ete)?$/i};e._createKeyRepeater=function(e,t){var n=this;n._keyLogger[t]=window.setTimeout((function(){n._keyListeners[e](),n._keyLogger[t]=window.setInterval((function(){n._keyListeners[e]()}),50)}),333)},e._createKeyDownListener=function(){var e=this;this._keyDownListener||(this._keyDownListener=function(n){if(focusTurtle()){var r,i,s=n.charCode||n.keyCode,a=String.fromCharCode(s).toLowerCase();if(!e._keyLogger[s])for(r in e._keyListeners)if(i=r.length>1&&t[s]&&t[s].test(r),r===a||i){e._keyListeners[r](),e._createKeyRepeater(r,s),n.preventDefault();break}}},getTarget().addEventListener("keydown",this._keyDownListener))},e._createKeyUpListener=function(){var e=this;this._keyUpListener||(this._keyUpListener=function(t){var n=e._keyLogger[t.charCode||t.keyCode];void 0!==n&&(t.preventDefault(),window.clearInterval(n),window.clearTimeout(n),delete e._keyLogger[t.charCode||t.keyCode])},getTarget().addEventListener("keyup",this._keyUpListener))},e.$title=function(e){document.title=e},e.$title.minArgs=1,e.$title.co_varnames=["title"],e.$listen=function(){this._createKeyUpListener(),this._createKeyDownListener()},e.$onkey=function(e,t){if("function"==typeof t){var n=e;e=t,t=n}t=String(t).toLowerCase(),e&&"function"==typeof e?(this._keyListeners||(this._keyListeners={}),this._keyListeners[t]=e):delete this._keyListeners[t]},e.$onkey.minArgs=2,e.$onkey.co_varnames=["method","keyValue"],e.$onscreenclick=function(e,t,n){this.getManager("mousedown").addHandler(e,n)},e.$onscreenclick.minArgs=1,e.$onscreenclick.co_varnames=["method","btn","add"],e.$ontimer=function(e,t){this._timer&&(window.clearTimeout(this._timer),this._timer=void 0),e&&"number"==typeof t&&(this._timer=window.setTimeout(e,Math.max(0,0|t)))},e.$ontimer.minArgs=0,e.$ontimer.co_varnames=["method","interval"]}(Screen.prototype);var g=new Image;function removeLayer(e){e&&e.canvas&&e.canvas.parentNode&&e.canvas.parentNode.removeChild(e.canvas)}function clearLayer(e,t,n){e&&(e.save(),e.setTransform(1,0,0,1,0,0),t?(e.fillStyle=t,e.fillRect(0,0,e.canvas.width,e.canvas.height)):e.clearRect(0,0,e.canvas.width,e.canvas.height),n&&e.drawImage(n,0,0),e.restore())}function drawTurtle(e,t){var n,r,i,s=d[e.shape],a=getScreen(),o=(getWidth(),getHeight(),a.xScale),l=a.yScale;if(t){if(n=Math.cos(e.radians)/o,r=Math.sin(e.radians)/l,i=Math.atan2(r,n)-Math.PI/2,t.save(),t.translate(e.x,e.y),t.scale(o,l),s.nodeName){var u=s.naturalWidth,h=s.naturalHeight;t.drawImage(s,0,0,u,h,-u/2,-h/2,u,h)}else{t.rotate(i),t.beginPath(),t.lineWidth=1,t.strokeStyle=e.color,t.fillStyle=e.fill,t.moveTo(-s[0][0],s[0][1]);for(var c=1;c<s.length;c++)t.lineTo(-s[c][0],s[c][1]);t.closePath(),t.fill(),t.stroke()}t.restore()}}function drawDot(e,t){var n=this.context(),r=getScreen(),i=r.xScale,s=r.yScale;n&&(n.beginPath(),n.moveTo(this.x,this.y),e*=Math.min(Math.abs(i),Math.abs(s)),n.arc(this.x,this.y,e/2,0,Turtle.RADIANS),n.closePath(),n.fillStyle=t||this.color,n.fill())}var p=document.createElement("canvas").getContext("2d");function drawText(e,t,n){var r=this.context();r&&(r.save(),n&&(r.font=n),t&&t.match(/^(left|right|center)$/)&&(r.textAlign=t),r.scale(1,-1),r.fillStyle=this.fill,r.fillText(e,this.x,-this.y),r.restore())}function drawLine(e,t,n){var r=this.context();r&&(t&&(r.beginPath(),r.moveTo(this.x,this.y)),r.lineWidth=this.size*getScreen().lineScale,r.strokeStyle=this.color,r.lineTo(e.x,e.y),r.stroke())}function drawFill(){var e,t=this.context(),n=this.fillBuffer;if(t&&n&&n.length){for(t.save(),t.beginPath(),t.moveTo(n[0].x,n[0].y),e=1;e<n.length;e++)t.lineTo(n[e].x,n[e].y);for(t.closePath(),t.fillStyle=this.fill,t.fill(),e=1;e<n.length;e++)n[e].stroke&&(t.beginPath(),t.moveTo(n[e-1].x,n[e-1].y),t.lineWidth=n[e].size*getScreen().lineScale,t.strokeStyle=n[e].color,t.lineTo(n[e].x,n[e].y),t.stroke());t.restore()}}function partialTranslate(e,t,n,r,i){return function(){return e.addUpdate((function(e){this.down&&drawLine.call(this,e,r)}),i,{x:t,y:n},r)}}function partialRotate(e,t,n,r){return function(){return e.addUpdate(void 0,r,{angle:t,radians:n})}}function getCoordinates(e,t){return void 0===t&&(t=e&&(e.y||e._y||e[1])||0,e=e&&(e.x||e._x||e[0])||0),{x:e,y:t}}function hexToRGB(e){var t,n,r;return(t=/^rgba?\\((\\d+),(\\d+),(\\d+)(?:,([.\\d]+))?\\)$/.exec(e))?(r=[parseInt(t[1]),parseInt(t[2]),parseInt(t[3])],t[4]&&r.push(parseFloat(t[4]))):/^#?[a-f\\d]{3}|[a-f\\d]{6}$/i.exec(e)?(4===e.length&&(e=e.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r}))),n=/^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(e),r=[parseInt(n[1],16),parseInt(n[2],16),parseInt(n[3],16)]):r=e,r}function createColor(e,t,n,r,i){var s;if(void 0!==n&&(t=[t,n,r,i]),t.constructor===Array&&t.length){if(255===e)for(s=0;s<3;s++){if("number"!=typeof t[s])throw new Sk.builtin.ValueError("bad color sequence");t[s]=Math.max(0,Math.min(255,parseInt(t[s])))}else for(s=0;s<3;s++){if("number"!=typeof t[s])throw new Sk.builtin.ValueError("bad color sequence");if(!(t[s]<=1))throw new Sk.builtin.ValueError("bad color sequence");t[s]=Math.max(0,Math.min(255,parseInt(255*t[s])))}"number"==typeof t[s]?(t[3]=Math.max(0,Math.min(1,t[s])),t="rgba("+t.join(",")+")"):t="rgb("+t.slice(0,3).join(",")+")"}else{if("string"!=typeof t||t.match(/\\s*url\\s*\\(/i))return"black";t=t.replace(/\\s+/g,"")}return t}function calculateHeading(e,t,n){var r=e._angle||0,i=e._radians||0;return n||(n={}),"number"==typeof t&&(e._isRadians?r=i=t%Turtle.RADIANS:e._fullCircle?i=(r=t%e._fullCircle)/e._fullCircle*Turtle.RADIANS:r=i=0,r<0&&(r+=e._fullCircle,i+=Turtle.RADIANS)),n.angle=r,n.radians=i,n}function pythonToJavascriptFunction(e,t){return function(){var n=Array.prototype.slice.call(arguments).map((function(e){return Sk.ffi.remapToPy(e)}));return"undefined"!=typeof t&&n.unshift(t),Sk.misceval.applyAsync(void 0,e,void 0,void 0,void 0,n).catch(Sk.uncaughtException)}}function addModuleMethod(e,t,n,r){var i,s=n.replace(/^\\$/,""),a=s.replace(/_\\$[a-z]+\\$$/i,""),o=e.prototype[n].length,l=e.prototype[n].minArgs,u=e.prototype[n].co_varnames||[],h=e.prototype[n].returnType,c=e.prototype[n].isSk;void 0===l&&(l=o),(i=function(){var e,t,i,s,u,d=Array.prototype.slice.call(arguments,0),f=r?r():d.shift().instance;if(d.length<l||d.length>o)throw u=l===o?"exactly "+o:"between "+l+" and "+o,new Sk.builtin.TypeError(a+"() takes "+u+" positional argument(s) ("+d.length+" given)");for(e=d.length;--e>=0;)void 0!==d[e]&&(d[e]instanceof Sk.builtin.func?d[e]=pythonToJavascriptFunction(d[e]):d[e]instanceof Sk.builtin.method?d[e]=pythonToJavascriptFunction(d[e].im_func,d[e].im_self):d[e]&&d[e].$d instanceof Sk.builtin.dict&&d[e].instance?d[e]=d[e].instance:d[e]=Sk.ffi.remapToJs(d[e]));var _=d.slice(0);for(d=[],e=_.length;e>=0;--e)null!==_[e]&&(d[e]=_[e]);try{t=f[n].apply(f,d)}catch(g){throw window&&window.console&&(window.console.log("wrapped method failed"),window.console.log(g.stack)),g}return t instanceof InstantPromise&&(t=t.lastResult),t instanceof Promise?(t=t.catch((function(e){throw window&&window.console&&(window.console.log("promise failed"),window.console.log(e.stack)),e})),(i=new Sk.misceval.Suspension).resume=function(){return void 0===s?Sk.builtin.none.none$:Sk.ffi.remapToPy(s)},i.data={type:"Sk.promise",promise:t.then((function(e){return s=e,e}))},i):void 0===t?Sk.builtin.none.none$:c?t:"function"==typeof h?h(t):Sk.ffi.remapToPy(t)}).co_name=new Sk.builtin.str(a),i.co_varnames=u.slice(),i.$defaults=[];for(var d=l;d<u.length;d++)i.$defaults.push(Sk.builtin.none.none$);r||i.co_varnames.unshift("self"),t[s]=new Sk.builtin.func(i)}function initTurtle(e,t){Sk.builtin.pyCheckArgs("__init__",arguments,2,3,!1,!1),e.instance=new Turtle(t),e.instance.skInstance=e}for(var m in initTurtle.co_varnames=["self","shape"],initTurtle.co_name=new Sk.builtin.str("Turtle"),initTurtle.co_argcount=2,initTurtle.$defaults=[Sk.builtin.none.none$,new Sk.builtin.str("classic")],Turtle.prototype)/^\\$[a-z_]+/.test(m)&&addModuleMethod(Turtle,u,m,ensureAnonymous);function focusTurtle(e){return void 0!==e&&((h=!!e)?getTarget().focus():getTarget().blur()),h}function resetTurtle(){for(cancelAnimationFrame(),getScreen().reset(),getFrameManager().reset();e.firstChild;)e.removeChild(e.firstChild);a&&a.reset(),r=void 0,s=void 0,a=void 0}return addModuleMethod(Screen,u,"$mainloop",getScreen),addModuleMethod(Screen,u,"$done",getScreen),addModuleMethod(Screen,u,"$bye",getScreen),addModuleMethod(Screen,u,"$tracer",getScreen),addModuleMethod(Screen,u,"$update",getScreen),addModuleMethod(Screen,u,"$delay",getScreen),addModuleMethod(Screen,u,"$window_width",getScreen),addModuleMethod(Screen,u,"$window_height",getScreen),addModuleMethod(Screen,u,"$title",getScreen),u.Turtle=Sk.misceval.buildClass(u,(function TurtleWrapper(e,t){for(var n in t.__init__=new Sk.builtin.func(initTurtle),Turtle.prototype)/^\\$[a-z_]+/.test(n)&&addModuleMethod(Turtle,t,n)}),"Turtle",[]),u.Screen=Sk.misceval.buildClass(u,(function ScreenWrapper(e,t){for(var n in t.__init__=new Sk.builtin.func((function(e){e.instance=getScreen()})),Screen.prototype)/^\\$[a-z_]+/.test(n)&&addModuleMethod(Screen,t,n)}),"Screen",[]),{skModule:u,reset:resetTurtle,stop:function stopTurtle(){cancelAnimationFrame(),a&&a.reset(),r=void 0,s=void 0,a=void 0},focus:focusTurtle,Turtle:Turtle,Screen:Screen}}(t),Sk.TurtleGraphics.module=t.turtleInstance.skModule,Sk.TurtleGraphics.reset=t.turtleInstance.reset,Sk.TurtleGraphics.stop=t.turtleInstance.stop,Sk.TurtleGraphics.focus=t.turtleInstance.focus,Sk.TurtleGraphics.raw={Turtle:t.turtleInstance.Turtle,Screen:t.turtleInstance.Screen},t.turtleInstance.skModule};`,"src/lib/urllib/request/__init__.js":'var $builtinmodule=function(n){var e={};return e.Response=Sk.misceval.buildClass(e,(function(n,e){e.__init__=new Sk.builtin.func((function(n,e){n.data$=e.responseText,n.lineList=n.data$.split("\\n"),n.lineList=n.lineList.slice(0,-1);for(var i=0;i<n.lineList.length;i++)n.lineList[i]=n.lineList[i]+"\\n";n.currentLine=0,n.pos$=0})),e.__str__=new Sk.builtin.func((function(n){return Sk.ffi.remapToPy("<Response>")})),e.__iter__=new Sk.builtin.func((function(n){var e=n.lineList;return Sk.builtin.makeGenerator((function(){if(!(this.$index>=this.$lines.length))return new Sk.builtin.str(this.$lines[this.$index++])}),{$obj:n,$index:0,$lines:e})})),e.read=new Sk.builtin.func((function(n,e){if(n.closed)throw new Sk.builtin.ValueError("I/O operation on closed file");var i=n.data$.length;void 0===e&&(e=i);var t=new Sk.builtin.str(n.data$.substr(n.pos$,e));return n.pos$+=e,n.pos$>=i&&(n.pos$=i),t})),e.readline=new Sk.builtin.func((function(n,e){var i="";return n.currentLine<n.lineList.length&&(i=n.lineList[n.currentLine],n.currentLine++),new Sk.builtin.str(i)})),e.readlines=new Sk.builtin.func((function(n,e){for(var i=[],t=n.currentLine;t<n.lineList.length;t++)i.push(new Sk.builtin.str(n.lineList[t]));return new Sk.builtin.list(i)}))}),"Response",[]),e.urlopen=new Sk.builtin.func((function(n,i,t){var r,s=new Promise((function(t,r){var s=new XMLHttpRequest;s.addEventListener("loadend",(function(n){t(Sk.misceval.callsimArray(e.Response,[s]))})),i?(s.open("POST",n.v),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),s.setRequestHeader("Content-length",i.v.length),s.send(i.v)):(s.open("GET",n.v),s.send(null))})),u=new Sk.misceval.Suspension;return u.resume=function(){return r},u.data={type:"Sk.promise",promise:s.then((function(n){return r=n,n}),(function(n){return r="",n}))},u})),e};',"src/lib/urllib/__init__.js":"var $builtinmodule=function(n){return{}};","src/lib/webbrowser.js":'var $builtinmodule=function(n){var e={},t="undefined"!=typeof window&&"undefined"!=typeof window.navigator;function open_tab(n){return Sk.builtin.pyCheckType("url","string",Sk.builtin.checkString(n)),t?(n=n.$jsstr(),window.open(n,"_blank"),Sk.builtin.bool.true$):Sk.builtin.bool.false$}return e.__name__=new Sk.builtin.str("webbrowser"),e.open=new Sk.builtin.func((function open(n){return Sk.builtin.pyCheckArgsLen("open",arguments.length+1,1,3),open_tab(n)})),e.open_new=new Sk.builtin.func((function open_new(n){return Sk.builtin.pyCheckArgsLen("open_new",arguments.length,1,1),open_tab(n)})),e.open_new_tab=new Sk.builtin.func((function open_new_tab(n){return Sk.builtin.pyCheckArgsLen("open_new_tab",arguments.length,1,1),open_tab(n)})),e.DefaultBrowser=Sk.misceval.buildClass(e,(function dflbrowser(n,e){e.__init__=new Sk.builtin.func((function __init__(n){return Sk.builtin.none.none$})),e.open=new Sk.builtin.func((function open(n,e){return Sk.builtin.pyCheckArgsLen("open",arguments.length,2,4),open_tab(e)})),e.open_new=new Sk.builtin.func((function open_new(n,e){return Sk.builtin.pyCheckArgsLen("open_new",arguments.length,2,2),open_tab(e)})),e.open_new_tab=new Sk.builtin.func((function open_new_tab(n,e){return Sk.builtin.pyCheckArgsLen("open_new_tab",arguments.length,2,2),open_tab(e)}))}),"DefaultBrowser",[]),e.get=new Sk.builtin.func((function get(){return Sk.builtin.pyCheckArgsLen("get",arguments.length,0,1),Sk.misceval.callsimArray(e.DefaultBrowser,[])})),e};',"src/lib/webgl/math.js":'var $builtinmodule=function(e){var n={};return n.Mat44=Sk.misceval.buildClass(n,(function(e,t){t.__init__=new Sk.builtin.func((function(e){Sk.misceval.callsimArray(t.loadIdentity,[e]),e.stack=[]})),t.push=new Sk.builtin.func((function(e){e.stack.push(e.elements.slice(0))})),t.pop=new Sk.builtin.func((function(e){e.elements=e.stack.pop()})),t.loadIdentity=new Sk.builtin.func((function(e){e.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]})),t.transform3=new Sk.builtin.func((function(e,t){var l=e.elements;return Sk.misceval.callsimArray(n.Vec3,[l[0]*t.x+l[4]*t.y+l[8]*t.z,l[1]*t.x+l[5]*t.y+l[9]*t.z,l[2]*t.x+l[6]*t.y+l[10]*t.z])})),t.scale=new Sk.builtin.func((function(e,n,t,l){return e.elements[0]*=n,e.elements[1]*=n,e.elements[2]*=n,e.elements[3]*=n,e.elements[4]*=t,e.elements[5]*=t,e.elements[6]*=t,e.elements[7]*=t,e.elements[8]*=l,e.elements[9]*=l,e.elements[10]*=l,e.elements[11]*=l,e})),t.translate=new Sk.builtin.func((function(e,n,t,l){return e.elements[12]+=e.elements[0]*n+e.elements[4]*t+e.elements[8]*l,e.elements[13]+=e.elements[1]*n+e.elements[5]*t+e.elements[9]*l,e.elements[14]+=e.elements[2]*n+e.elements[6]*t+e.elements[10]*l,e.elements[15]+=e.elements[3]*n+e.elements[7]*t+e.elements[11]*l,e})),t.rotate=new Sk.builtin.func((function(e,t,l,s,m){var i,a,c,u,r,f,o,k,S,y,b,v=Math.sqrt(l*l+s*s+m*m),_=Math.sin(t*Math.PI/180),w=Math.cos(t*Math.PI/180);v>0&&(i=(l/=v)*l,a=(s/=v)*s,c=(m/=v)*m,u=l*s,r=s*m,f=m*l,o=l*_,k=s*_,S=m*_,y=1-w,(b=Sk.misceval.callsimArray(n.Mat44)).elements[0]=y*i+w,b.elements[1]=y*u-S,b.elements[2]=y*f+k,b.elements[3]=0,b.elements[4]=y*u+S,b.elements[5]=y*a+w,b.elements[6]=y*r-o,b.elements[7]=0,b.elements[8]=y*f-k,b.elements[9]=y*r+o,b.elements[10]=y*c+w,b.elements[11]=0,b.elements[12]=0,b.elements[13]=0,b.elements[14]=0,b.elements[15]=1,b=b.multiply(e),e.elements=b.elements);return e})),t.multiply=new Sk.builtin.func((function(e,t){for(var l=Sk.misceval.callsimArray(n.Mat44),s=0;s<4;s++)l.elements[4*s+0]=e.elements[4*s+0]*t.elements[0]+e.elements[4*s+1]*t.elements[4]+e.elements[4*s+2]*t.elements[8]+e.elements[4*s+3]*t.elements[12],l.elements[4*s+1]=e.elements[4*s+0]*t.elements[1]+e.elements[4*s+1]*t.elements[5]+e.elements[4*s+2]*t.elements[9]+e.elements[4*s+3]*t.elements[13],l.elements[4*s+2]=e.elements[4*s+0]*t.elements[2]+e.elements[4*s+1]*t.elements[6]+e.elements[4*s+2]*t.elements[10]+e.elements[4*s+3]*t.elements[14],l.elements[4*s+3]=e.elements[4*s+0]*t.elements[3]+e.elements[4*s+1]*t.elements[7]+e.elements[4*s+2]*t.elements[11]+e.elements[4*s+3]*t.elements[15];return e.elements=l.elements,e})),t.lookAt=new Sk.builtin.func((function(e,t,l,s,m,i,a,c,u,r){var f=[t-m,l-i,s-a],o=Math.sqrt(f[0]*f[0]+f[1]*f[1]+f[2]*f[2]);o&&(f[0]/=o,f[1]/=o,f[2]/=o);var k=[c,u,r],S=[];S[0]=k[1]*f[2]-k[2]*f[1],S[1]=-k[0]*f[2]+k[2]*f[0],S[2]=k[0]*f[1]-k[1]*f[0],k[0]=f[1]*S[2]-f[2]*S[1],k[1]=-f[0]*S[2]+f[2]*S[0],k[2]=f[0]*S[1]-f[1]*S[0],(o=Math.sqrt(S[0]*S[0]+S[1]*S[1]+S[2]*S[2]))&&(S[0]/=o,S[1]/=o,S[2]/=o),(o=Math.sqrt(k[0]*k[0]+k[1]*k[1]+k[2]*k[2]))&&(k[0]/=o,k[1]/=o,k[2]/=o);var y=Sk.misceval.callsimArray(n.Mat44);return y.elements[0]=S[0],y.elements[4]=S[1],y.elements[8]=S[2],y.elements[12]=0,y.elements[1]=k[0],y.elements[5]=k[1],y.elements[9]=k[2],y.elements[13]=0,y.elements[2]=f[0],y.elements[6]=f[1],y.elements[10]=f[2],y.elements[14]=0,y.elements[3]=0,y.elements[7]=0,y.elements[11]=0,y.elements[15]=1,y=y.multiply(e),e.elements=y.elements,e.translate(-t,-l,-s),e}))}),"Mat44",[]),n.Mat33=Sk.misceval.buildClass(n,(function(e,n){n.__init__=new Sk.builtin.func((function(e){Sk.misceval.callsimArray(n.loadIdentity,[e])})),n.loadIdentity=new Sk.builtin.func((function(e){e.elements=[1,0,0,0,1,0,0,0,1]}))}),"Mat33",[]),n.Vec3=Sk.misceval.buildClass(n,(function(e,t){t.__init__=new Sk.builtin.func((function(e,n,t,l){e.x=n,e.y=t,e.z=l})),t.__sub__=new Sk.builtin.func((function(e,t){return Sk.misceval.callsimArray(n.Vec3,[e.x-t.x,e.y-t.y,e.z-t.z])}))}),"Vec3",[]),n.cross=new Sk.builtin.func((function(e,t){return Sk.asserts.assert(e instanceof n.Vec3&&t instanceof n.Vec3),Sk.misceval.callsimArray(n.Vec3,[e.y*t.z-e.z*t.y,e.z*t.x-e.x*t.z,e.x*t.y-e.y*t.x])})),n};',"src/lib/webgl/matrix4.js":"var $builtinmodule=function(n){var r={},t=new Float32Array(3),a=new Float32Array(3),u=new Float32Array(3),e=(new Float32Array(4),new Float32Array(4),new Float32Array(4),new Float32Array(16),new Float32Array(16),new Float32Array(16),function(n,r){for(var t=0,a=r.length,u=0;u<a;++u)t+=r[u]*r[u];if((t=Math.sqrt(t))>1e-5)for(u=0;u<a;++u)n[u]=r[u]/t;else for(u=0;u<a;++u)n[u]=0;return n}),cross=function(n,r,t){return n[0]=r[1]*t[2]-r[2]*t[1],n[1]=r[2]*t[0]-r[0]*t[2],n[2]=r[0]*t[1]-r[1]*t[0],n},dot=function(n,r){return n[0]*r[0]+n[1]*r[1]+n[2]*r[2]};return r.lookAt=new Sk.builtin.func((function(n,r,i,o){var v=a,f=u,l=e(t,function(n,r,t){for(var a=r.length,u=0;u<a;++u)n[u]=r[u]-t[u];return n}(t,r.v,i.v)),c=e(v,cross(v,o.v,l)),w=cross(f,l,c),h=n.v;return h[0]=c[0],h[1]=w[0],h[2]=l[0],h[3]=0,h[4]=c[1],h[5]=w[1],h[6]=l[1],h[7]=0,h[8]=c[2],h[9]=w[2],h[10]=l[2],h[11]=0,h[12]=-dot(c,r.v),h[13]=-dot(w,r.v),h[14]=-dot(l,r.v),h[15]=1,n})),r.perspective=new Sk.builtin.func((function(n,r,t,a,u){var e=Math.tan(.5*Math.PI-r*Math.PI/180*.5),i=1/(a-u),o=n.v;return o[0]=e/t,o[1]=0,o[2]=0,o[3]=0,o[4]=0,o[5]=e,o[6]=0,o[7]=0,o[8]=0,o[9]=0,o[10]=(a+u)*i,o[11]=-1,o[12]=0,o[13]=0,o[14]=a*u*i*2,o[15]=0,n})),r.rotationY=new Sk.builtin.func((function(n,r){var t=n.v,a=Math.cos(r*Math.PI/180),u=Math.sin(r*Math.PI/180);return t[0]=a,t[1]=0,t[2]=-u,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=u,t[9]=0,t[10]=a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,n})),r.identity=new Sk.builtin.func((function(n){var r=n.v;return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,n})),r.mul=new Sk.builtin.func((function(n,r,t){var a=n.v,u=r.v,e=t.v,i=u[0],o=u[1],v=u[2],f=u[3],l=u[4],c=u[5],w=u[6],h=u[7],y=u[8],A=u[9],F=u[10],b=u[11],k=u[12],M=u[13],s=u[14],S=u[15],I=e[0],P=e[1],p=e[2],d=e[3],g=e[4],m=e[5],q=e[6],Y=e[7],$=e[8],j=e[9],x=e[10],z=e[11],B=e[12],C=e[13],D=e[14],E=e[15];return a[0]=i*I+o*g+v*$+f*B,a[1]=i*P+o*m+v*j+f*C,a[2]=i*p+o*q+v*x+f*D,a[3]=i*d+o*Y+v*z+f*E,a[4]=l*I+c*g+w*$+h*B,a[5]=l*P+c*m+w*j+h*C,a[6]=l*p+c*q+w*x+h*D,a[7]=l*d+c*Y+w*z+h*E,a[8]=y*I+A*g+F*$+b*B,a[9]=y*P+A*m+F*j+b*C,a[10]=y*p+A*q+F*x+b*D,a[11]=y*d+A*Y+F*z+b*E,a[12]=k*I+M*g+s*$+S*B,a[13]=k*P+M*m+s*j+S*C,a[14]=k*p+M*q+s*x+S*D,a[15]=k*d+M*Y+s*z+S*E,n})),r.invert=new Sk.builtin.func((function(n,r){var t=n.v,a=r.v,u=a[0],e=a[1],i=a[2],o=a[3],v=a[4],f=a[5],l=a[6],c=a[7],w=a[8],h=a[9],y=a[10],A=a[11],F=a[12],b=a[13],k=a[14],M=a[15],s=y*M,S=k*A,I=l*M,P=k*c,p=l*A,d=y*c,g=i*M,m=k*o,q=i*A,Y=y*o,$=i*c,j=l*o,x=w*b,z=F*h,B=v*b,C=F*f,D=v*h,E=w*f,G=u*b,H=F*e,J=u*h,K=w*e,L=u*f,N=v*e,O=s*f+P*h+p*b-(S*f+I*h+d*b),Q=S*e+g*h+Y*b-(s*e+m*h+q*b),R=I*e+m*f+$*b-(P*e+g*f+j*b),T=d*e+q*f+j*h-(p*e+Y*f+$*h),U=1/(u*O+v*Q+w*R+F*T);return t[0]=U*O,t[1]=U*Q,t[2]=U*R,t[3]=U*T,t[4]=U*(S*v+I*w+d*F-(s*v+P*w+p*F)),t[5]=U*(s*u+m*w+q*F-(S*u+g*w+Y*F)),t[6]=U*(P*u+g*v+j*F-(I*u+m*v+$*F)),t[7]=U*(p*u+Y*v+$*w-(d*u+q*v+j*w)),t[8]=U*(x*c+C*A+D*M-(z*c+B*A+E*M)),t[9]=U*(z*o+G*A+K*M-(x*o+H*A+J*M)),t[10]=U*(B*o+H*c+L*M-(C*o+G*c+N*M)),t[11]=U*(E*o+J*c+N*A-(D*o+K*c+L*A)),t[12]=U*(B*y+E*k+z*l-(D*k+x*l+C*y)),t[13]=U*(J*k+x*i+H*y-(G*y+K*k+z*i)),t[14]=U*(G*l+N*k+C*i-(L*k+B*i+H*l)),t[15]=U*(L*y+D*i+K*l-(J*l+N*y+E*i)),n})),r.transpose=new Sk.builtin.func((function(n,r){for(var t=n.v,a=r.v,u=0;u<4;++u)for(var e=0;e<4;++e)t[4*u+e]=a[4*e+u];return t})),r};","src/lib/webgl/models.js":'var $builtinmodule=function(t){return Sk.misceval.chain(Sk.importModule("webgl",!1,!0),(e=>{const n=e.$d;var r={},Buffer=function(t,e){var r=e||n.ARRAY_BUFFER,i=n.createBuffer();if(this.target=r,this.buf=i,this.set(t),this.numComponents_=t.numComponents,this.numElements_=t.numElements,this.totalComponents_=this.numComponents_*this.numElements_,t.buffer instanceof Float32Array)this.type_=n.FLOAT;else if(t.buffer instanceof Uint8Array)this.type_=n.UNSIGNED_BYTE;else if(t.buffer instanceof Int8Array)this.type_=n._BYTE;else if(t.buffer instanceof Uint16Array)this.type_=n.UNSIGNED_SHORT;else{if(!(t.buffer instanceof Int16Array))throw"unhandled type:"+typeof t.buffer;this.type_=n.SHORT}};return Buffer.prototype.set=function(t){n.bindBuffer(this.target,this.buf),n.bufferData(this.target,t.buffer,n.STATIC_DRAW)},Buffer.prototype.type=function(){return this.type_},Buffer.prototype.numComponents=function(){return this.numComponents_},Buffer.prototype.numElements=function(){return this.numElements_},Buffer.prototype.totalComponents=function(){return this.totalComponents_},Buffer.prototype.buffer=function(){return this.buf},Buffer.prototype.stride=function(){return 0},Buffer.prototype.offset=function(){return 0},r.Model=Sk.misceval.buildClass(r,(function(e,r){r.__init__=new Sk.builtin.func((function(e,r,i,f){e.buffers={};var setBuffer=function(t,r){var i="indices"==t?n.ELEMENT_ARRAY_BUFFER:n.ARRAY_BUFFER;let f=e.buffers[t];f?f.set(r):f=new Buffer(r,i),e.buffers[t]=f};for(t in i)setBuffer(t,i[t]);var o={},s=0;for(var u in f)o[u]=s++;e.mode=n.TRIANGLES,e.textures=f.v,e.textureUnits=o,e.shader=r})),r.drawPrep=new Sk.builtin.func((function(t,e){var r=t.shader,i=t.buffers,f=t.textures;for(var o in e=Sk.ffi.remapToJs(e),Sk.misceval.callsimArray(r.use,[r]),i){var s=i[o];if("indices"==o)n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s.buffer());else{var u=r.attrib[o];u&&u(s)}}for(var a in f){var m=t.textureUnits[a];r.setUniform$impl(r,f,m),f[a].bindToUnit(m)}for(var p in e)r.setUniform$impl(r,p,e[p])})),r.draw=new Sk.builtin.func((function(t,e,r){var i=t.shader;e=Sk.ffi.remapToJs(e);for(let n in e)i.setUniform$impl(i,n,e[n]);if(r)for(var f in r){var o=t.textureUnits[f];i.setUniform$impl(i,f,o),r[f].bindToUnit(o)}var s=t.buffers;n.drawElements(t.mode,s.indices.totalComponents(),n.UNSIGNED_SHORT,0)}))}),"Model",[]),r}))};',"src/lib/webgl/primitives.js":'var $builtinmodule=function(t){var n={},AttribBuffer=function(t,n,e){e=e||"Float32Array";var r=window[e];n.length?(this.buffer=new r(n),n=this.buffer.length/t,this.cursor=n):(this.buffer=new r(t*n),this.cursor=0),this.numComponents=t,this.numElements=n,this.type=e};return AttribBuffer.prototype.stride=function(){return 0},AttribBuffer.prototype.offset=function(){return 0},AttribBuffer.prototype.getElement=function(t){for(var n=t*this.numComponents,e=[],r=0;r<this.numComponents;++r)e.push(this.buffer[n+r]);return e},AttribBuffer.prototype.setElement=function(t,n){for(var e=t*this.numComponents,r=0;r<this.numComponents;++r)this.buffer[e+r]=n[r]},AttribBuffer.prototype.clone=function(){var t=new AttribBuffer(this.numComponents,this.numElements,this.type);return t.pushArray(this),t},AttribBuffer.prototype.push=function(t){this.setElement(this.cursor++,t)},AttribBuffer.prototype.pushArray=function(t){for(var n=0;n<t.numElements;++n)this.push(t.getElement(n))},AttribBuffer.prototype.pushArrayWithOffset=function(t,n){for(var e=0;e<t.numElements;++e){for(var r=t.getElement(e),o=0;o<n.length;++o)r[o]+=n[o];this.push(r)}},AttribBuffer.prototype.computeExtents=function(){for(var t=this.numElements,n=this.numComponents,e=this.getElement(0),r=this.getElement(0),o=1;o<t;++o)for(var s=this.getElement(o),u=0;u<n;++u)e[u]=Math.min(e[u],s[u]),r[u]=Math.max(r[u],s[u]);return{min:e,max:r}},n.createCube=new Sk.builtin.func((function(t){for(var n=[[3,7,5,1],[0,4,6,2],[6,7,3,2],[0,1,5,4],[5,7,6,4],[2,3,1,0]],e=t/2,r=[[-e,-e,-e],[+e,-e,-e],[-e,+e,-e],[+e,+e,-e],[-e,-e,+e],[+e,-e,+e],[-e,+e,+e],[+e,+e,+e]],o=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]],s=[[0,0],[1,0],[1,1],[0,1]],u=new AttribBuffer(3,24),i=new AttribBuffer(3,24),h=new AttribBuffer(2,24),p=new AttribBuffer(3,12,"Uint16Array"),m=0;m<6;++m){for(var f=n[m],a=0;a<4;++a){var l=r[f[a]],c=o[m],y=s[a];u.push(l),i.push(c),h.push(y)}var v=4*m;p.push([v+0,v+1,v+2]),p.push([v+0,v+2,v+3])}return{position:u,normal:i,texCoord:h,indices:p}})),n};',"src/lib/webgl/__init__.js":`var $builtinmodule=function(n){var t={__name__:new Sk.builtin.str("webgl")},makeFailHTML=function(n){return'<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+n+"</div></div></td></tr></table>"},e='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>';return t.Context=Sk.misceval.buildClass(t,(function(n,t){t.__init__=new Sk.builtin.func((function(n,t){var i=document.getElementById(t.v),r=function(n,t){var i=document.getElementById(n);if(t||(t=i.getElementsByTagName("canvas")[0]),t){var r=function(n){for(var t=["webgl","experimental-webgl","webkit-3d","moz-webgl"],e=null,i=0;i<t.length;++i){try{e=n.getContext(t[i])}catch(r){}if(e)break}if(e){function returnFalse(){return!1}n.onselectstart=returnFalse,n.onmousedown=returnFalse}return e}(t);if(!r){var u=navigator.userAgent.match(/(\\w+\\/.*? )/g),a={};try{for(var o=0;o<u.length;++o){for(var l=u[o].match(/(\\w+)/g),c=[],f=1;f<l.length;++f)c.push(parseInt(l[f]));a[l[0]]=c}}catch(s){}a.Chrome&&(a.Chrome[0]>7||7==a.Chrome[0]&&a.Chrome[1]>0||7==a.Chrome[0]&&0==a.Chrome[1]&&a.Chrome[2]>=521)?i.innerHTML=makeFailHTML('It doesn\\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org">Click here for more information.</a>'):i.innerHTML=makeFailHTML(e)}return r}i.innerHTML=makeFailHTML(e)}(t.v,i);if(!r)throw new Error("Your browser does not appear to support WebGL.");for(var u in n.gl=r,r.__proto__)if("number"==typeof r.__proto__[u])Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str(u),r.__proto__[u]);else if("function"==typeof r.__proto__[u])switch(u){case"bufferData":case"clearColor":case"drawArrays":case"getAttribLocation":case"getUniformLocation":case"shaderSource":case"uniformMatrix4fv":case"vertexAttribPointer":case"viewport":break;default:!function(t){Sk.abstr.objectSetItem(n.$d,new Sk.builtin.str(u),new Sk.builtin.func((function(){var n=r.__proto__[t];return n.apply(r,arguments)})))}(u)}r.clearColor(100/255,149/255,237/255,1),r.clear(r.COLOR_BUFFER_BIT)})),t.tp$getattr=Sk.generic.getAttr,t.bufferData=new Sk.builtin.func((function(n,t,e,i){n.gl.bufferData(t,e.v,i)})),t.clearColor=new Sk.builtin.func((function(n,t,e,i,r){n.gl.clearColor(Sk.builtin.asnum$(t),Sk.builtin.asnum$(e),Sk.builtin.asnum$(i),Sk.builtin.asnum$(r))})),t.getAttribLocation=new Sk.builtin.func((function(n,t,e){return n.gl.getAttribLocation(t,e.v)})),t.getUniformLocation=new Sk.builtin.func((function(n,t,e){return n.gl.getUniformLocation(t,e.v)})),t.shaderSource=new Sk.builtin.func((function(n,t,e){n.gl.shaderSource(t,e.v)})),t.drawArrays=new Sk.builtin.func((function(n,t,e,i){n.gl.drawArrays(Sk.builtin.asnum$(t),Sk.builtin.asnum$(e),Sk.builtin.asnum$(i))})),t.vertexAttribPointer=new Sk.builtin.func((function(n,t,e,i,r,u,a){n.gl.vertexAttribPointer(t,Sk.builtin.asnum$(e),Sk.builtin.asnum$(i),r,Sk.builtin.asnum$(u),Sk.builtin.asnum$(a))})),t.viewport=new Sk.builtin.func((function(n,t,e,i,r){n.gl.viewport(Sk.builtin.asnum$(t),Sk.builtin.asnum$(e),Sk.builtin.asnum$(i),Sk.builtin.asnum$(r))})),t.uniformMatrix4fv=new Sk.builtin.func((function(n,t,e,i){n.gl.uniformMatrix4fv(Sk.builtin.asnum$(t),e,i.v)})),t.setDrawFunc=new Sk.builtin.func((function(n,t){var e=(new Date).getTime();setInterval((function(){Sk.misceval.callsimArray(t,[n,(new Date).getTime()-e])}),1e3/60)}))}),"Context",[]),t.Float32Array=Sk.misceval.buildClass(t,(function(n,t){t.__init__=new Sk.builtin.func((function(n,t){n.v="number"==typeof t?new Float32Array(t):new Float32Array(Sk.ffi.remapToJs(t))})),t.__repr__=new Sk.builtin.func((function(n){for(var t=[],e=0;e<n.v.length;++e)t.push(n.v[e]);return new Sk.builtin.str("["+t.join(", ")+"]")}))}),"Float32Array",[]),t.Matrix4x4=Sk.misceval.buildClass(t,(function(n,t){t.__init__=new Sk.builtin.func((function(n,t){n.v=new Float32Array(Sk.ffi.remapToJs(t))})),t.identity=new Sk.builtin.func((function(n){var t=n.v;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1})),t.perspective=new Sk.builtin.func((function(n,t,e,i,r){var u=Math.tan(.5*Math.PI-Sk.builtin.asnum$(t)*Math.PI/180*.5),a=Sk.builtin.asnum$(e),o=Sk.builtin.asnum$(i),l=Sk.builtin.asnum$(r),c=1/(o-l),f=n.v;f[0]=u/a,f[1]=0,f[2]=0,f[3]=0,f[4]=0,f[5]=u,f[6]=0,f[7]=0,f[8]=0,f[9]=0,f[10]=(o+l)*c,f[11]=-1,f[12]=0,f[13]=0,f[14]=o*l*c*2,f[15]=0})),t.translate=new Sk.builtin.func((function(n,t){var e=n.v,i=Sk.ffi.remapToJs(t);e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=i[0],e[13]=i[1],e[14]=i[2],e[15]=1})),t.__repr__=new Sk.builtin.func((function(n){for(var t=[],e=0;e<n.v.length;++e)t.push(n.v[e]);return new Sk.builtin.str("["+t.join(", ")+"]")}))}),"Matrix4x4",[]),t};`,"src/lib/_strptime.js":`function $builtinmodule(){const e=Sk.builtin.int_,t=Sk.builtin.none.none$,i=Sk.builtin.str,s=Sk.builtin.tuple,n=Sk.misceval.callsimOrSuspendArray,{isTrue:a,richCompareBool:r,chain:l}=Sk.misceval,{typeName:o,setUpModuleMethods:_,buildNativeClass:c}=Sk.abstr,{TypeError:m,ValueError:d,KeyError:h,IndexError:f,checkString:u,asnum$:w}=Sk.builtin,{remapToPy:p,remapToJs:g}=Sk.ffi,{getAttr:$,setAttr:y}=Sk.generic,S=l,k=/^[0-9]+$/;function _as_integer(e){if(!k.test(e))throw new d(\`invalid literal for int() with base 10: '\${e}'\`);return parseInt(e)}const b=/([\\\\.^$*+?\\(\\){}\\[\\]|])/g,v=/\\s+/g;let O=Sk.importModule("time",!1,!0),z=Sk.importModule("datetime",!1,!0);const L=S(z,(e=>(z=e.$d,O)),(e=>{O=e.$d}));return S(L,(()=>{function _strftime(e){return t=>e.$strftime(t).toString().toLowerCase()}function _strftime_timetuple(e,t){return O.strftime.tp$call([new i(e),t]).toString().toLowerCase()}const l=new i("fromordinal");function _struct_time(t){return O.struct_time.tp$call([new s(t.map((t=>new e(t))))])}function _localized_month(){const e=[()=>""];for(let t=0;t<12;t++){const i=new k(2001,t+1,1);e.push(_strftime(i))}return e}function _localized_day(){const e=[];for(let t=0;t<7;t++){const i=new k(2001,1,t+1);e.push(_strftime(i))}return e}const S={__name__:new i("_strptime")},k=z.date,L=z.timedelta,E=z.timezone;function _getlang(){return[t,t]}class LocaleTime{constructor(){this.lang=_getlang(),this.__calc_weekday(),this.__calc_month(),this.__calc_am_pm(),this.__calc_timezone(),this.__calc_date_time()}__calc_weekday(){this.a_weekday=_localized_day().map((e=>e("%a"))),this.f_weekday=_localized_day().map((e=>e("%A")))}__calc_month(){this.a_month=_localized_month().map((e=>e("%b"))),this.f_month=_localized_month().map((e=>e("%B")))}__calc_am_pm(){const e=[];[1,22].forEach((t=>{const i=_strftime_timetuple("%p",_struct_time([1999,3,17,t,44,55,2,76,0]));e.push(i)})),this.am_pm=e}__calc_date_time(){const e=_struct_time([1999,3,17,22,44,55,2,76,0]),i=[t,t,t];i[0]=_strftime_timetuple("%c",e),i[1]=_strftime_timetuple("%x",e),i[2]=_strftime_timetuple("%X",e);const s=[["%","%%"],[this.f_weekday[2],"%A"],[this.f_month[3],"%B"],[this.a_weekday[2],"%a"],[this.a_month[3],"%b"],[this.am_pm[1],"%p"],["1999","%Y"],["99","%y"],["22","%H"],["44","%M"],["55","%S"],["76","%j"],["17","%d"],["03","%m"],["3","%m"],["2","%w"],["10","%I"]];s.push(...this.timezone.flat().map((e=>[e,"%Z"]))),[[0,"%c"],[1,"%x"],[2,"%X"]].forEach((([e,t])=>{let n=i[e];s.forEach((([e,t])=>{e&&(n=n.replace(e,t))}));let a;a=_strftime_timetuple(t,_struct_time([1999,1,3,1,1,1,6,3,0])).includes("00")?"%W":"%U",i[e]=n.replace("11",a)})),this.LC_date_time=i[0],this.LC_date=i[1],this.LC_time=i[2]}__calc_timezone(){try{O.tzset.tp$call([])}catch{}this.tzname=O.tzname.v.map((e=>e.toString())),this.daylight=w(O.daylight);const e=[this.tzname[0].toLowerCase(),"utc","gmt"];let t;t=this.daylight?[this.tzname[1].toLowerCase()]:[],this.timezone=[e,t]}}class TimeRE{constructor(e=null){this.locale_time=e||new LocaleTime,Object.assign(this,{d:"(?<d>3[0-1]|[1-2]\\\\d|0[1-9]|[1-9]| [1-9])",f:"(?<f>[0-9]{1,6})",H:"(?<H>2[0-3]|[0-1]\\\\d|\\\\d)",I:"(?<I>1[0-2]|0[1-9]|[1-9])",G:"(?<G>\\\\d\\\\d\\\\d\\\\d)",j:"(?<j>36[0-6]|3[0-5]\\\\d|[1-2]\\\\d\\\\d|0[1-9]\\\\d|00[1-9]|[1-9]\\\\d|0[1-9]|[1-9])",m:"(?<m>1[0-2]|0[1-9]|[1-9])",M:"(?<M>[0-5]\\\\d|\\\\d)",S:"(?<S>6[0-1]|[0-5]\\\\d|\\\\d)",U:"(?<U>5[0-3]|[0-4]\\\\d|\\\\d)",w:"(?<w>[0-6])",u:"(?<u>[1-7])",V:"(?<V>5[0-3]|0[1-9]|[1-4]\\\\d|\\\\d)",y:"(?<y>\\\\d\\\\d)",Y:"(?<Y>\\\\d\\\\d\\\\d\\\\d)",z:"(?<z>[+-]\\\\d\\\\d:?[0-5]\\\\d(:?[0-5]\\\\d(\\\\.\\\\d{1,6})?)?|Z)",A:this.__seqToRE(this.locale_time.f_weekday,"A"),a:this.__seqToRE(this.locale_time.a_weekday,"a"),B:this.__seqToRE(this.locale_time.f_month.slice(1),"B"),b:this.__seqToRE(this.locale_time.a_month.slice(1),"b"),p:this.__seqToRE(this.locale_time.am_pm,"p"),Z:this.__seqToRE(this.locale_time.timezone.flat(),"Z"),"%":"%"}),this.W=this.U.replace("U","W"),this.x=this.pattern(this.locale_time.LC_date),this.X=this.pattern(this.locale_time.LC_time),this.c=this.pattern(this.locale_time.LC_date_time)}__seqToRE(e,t){if((e=e.slice(0).sort(((e,t)=>t.length-e.length))).every((e=>""===e)))return"";return\`(?<\${t}>\${e.map((e=>e)).join("|")})\`}pattern(e){let t="";for(e=(e=e.replace(b,"\\\\$1")).replace(v,"\\\\s+");e.includes("%");){const i=e.indexOf("%")+1,s=this[e[i]];if(void 0===s)throw new h(e[i]);t=\`\${t}\${e.slice(0,i-1)}\${s}\`,e=e.slice(i+1)}return t+e}compile(e){return new RegExp("^"+this.pattern(e),"i")}}let C=new TimeRE;let T={};function _strptime(i,s="%a %b %d %H:%M:%S %Y"){function _checkString(e,t){if("string"!=typeof e&&!u(e))throw new m(\`strptime() argument \${t} must be a str, not '\${o(e)}'\`)}_checkString(i,0),_checkString(s,1),i=i.toString(),s=s.toString();let n,_=C.locale_time;if(Object.keys(T).length>5&&(T={}),n=T[s],void 0===n)try{n=C.compile(s)}catch(R){if(R instanceof h){let e=R.args.v[0];throw"\\\\"==e&&(e="%"),new d(\`'\${e}' is a bad directive in format '\${s}'\`)}if(R instanceof f)throw new d("stray %% in format '"+s+"'");throw R}const c=i.match(n);if(null===c)throw new d(\`time data '\${i}' does not match format '\${s}'\`);if(i.length!==c[0].length)throw new d(\`unconverted data remains: \${i.slice(c[0].length)}\`);let w=t,p=t,g=1,$=1,y=0,S=0,b=0,v=0,z=-1,L=t,E=0,A=t,I=t,M=t,H=t,Y=t,j=c.groups||{};if(Object.keys(j).forEach((e=>{if(void 0!==j[e])if("y"===e)p=_as_integer(j.y),p+=p<=68?2e3:1900;else if("Y"===e)p=_as_integer(j.Y);else if("G"===e)w=_as_integer(j.G);else if("m"===e)g=_as_integer(j.m);else if("B"===e)g=_.f_month.indexOf(j.B.toLowerCase());else if("b"===e)g=_.a_month.indexOf(j.b.toLowerCase());else if("d"===e)$=_as_integer(j.d);else if("H"===e)y=_as_integer(j.H);else if("H"===e)y=_as_integer(j.H);else if("I"===e){y=_as_integer(j.I);const e=(j.p||"").toLowerCase();["",_.am_pm[0]].includes(e)?12===y&&(y=0):e===_.am_pm[1]&&12!==y&&(y+=12)}else if("M"===e)S=_as_integer(j.M);else if("S"===e)b=_as_integer(j.S);else if("f"===e){let e=j.f;e+="0".repeat(6-e.length),v=_as_integer(e)}else if("A"===e)H=_.f_weekday.indexOf(j.A.toLowerCase());else if("a"===e)H=_.a_weekday.indexOf(j.a.toLowerCase());else if("w"===e)H=_as_integer(j.w),0===H?H=6:H-=1;else if("u"===e)H=_as_integer(j.u),H-=1;else if("j"===e)Y=_as_integer(j.j);else if(["U","W"].includes(e))I=_as_integer(j[e]),M="U"===e?6:0;else if("V"===e)A=_as_integer(j.V);else if("z"===e){let e=j.z;if("Z"===e)L=0;else{if(":"===e[3]&&(e=e.slice(0,3)+e.slice(4),e.length>5)){if(":"!==e[5]){const e=\`Inconsistent use of : in \${j.z}\`;throw new d(e)}e=e.slice(0,5)+e.slice(6)}const t=_as_integer(e.slice(1,3)),i=_as_integer(e.slice(3,5)),s=_as_integer(e.slice(5,7)||0);L=3600*t+60*i+s;const n=e.slice(8),a="0".repeat(6-n.length);E=_as_integer(n+a),e.startsWith("-")&&(L=-L,E=-E)}}else if("Z"===e){let e=j.Z.toLowerCase(),t=0;for(let i of _.timezone){if(i.includes(e)){const i=O.tzname.v;if(r(i[0],i[1],"Eq")&&a(O.daylight)&&!["utc","gmt"].includes(e))break;z=t}t++}}})),p===t&&w!==t){if(A===t||H===t)throw new d("ISO year directive '%G' must be used with the ISO week directive '%V' and a weekday directive ('%A','%a', '%w', or '%u').");if(Y!==t)throw new d("Day of the year directive '%j' is not compatible with ISO year directive '%G'.Use '%Y' instead.")}else if(I===t&&A!==t)throw new d(H===t?"ISO week directive '%V' must be used with the ISO year directive '%G' and a weekday directive ('%A', '%a', '%w', or '%u').":"ISO week directive '%V' is incompatible with the year directive '%Y'. Use the ISO year '%G' instead.");let U=!1;if(p===t&&2===g&&29===$?(p=1904,U=!0):p===t&&(p=1900),Y===t&&H!==t){if(I!==t){Y=function _calc_julian_from_U_or_W(e,t,i,s){let n=(new k(e,1,1).$toOrdinal()+6)%7;return s||(n=(n+1)%7,i=(i+1)%7),0===t?1+i-n:(7-n)%7+7*(t-1)+1+i}(p,I,H,0===M)}else w!==t&&A!==t&&([p,Y]=function _calc_julian_from_V(e,t,i){let s=7*t+i-((new k(e,1,4).$toOrdinal()%7||7)+3);return s<1&&(s+=new k(e,1,1).$toOrdinal(),s-=new k(e-=1,1,1).$toOrdinal()),[e,s]}(w,A,H+1));if(Y!==t&&Y<=0){p-=1;const e=function _is_leap(e){return e%4==0&&(e%100!=0||e%400==0)}(p)?366:365;Y+=e}}if(Y===t)Y=new k(p,g,$).$toOrdinal()-new k(p,1,1).$toOrdinal()+1;else{const t=function _fromordinal(t){return k.tp$getattr(l).tp$call([new e(t)])}(Y-1+new k(p,1,1).$toOrdinal());p=t.$year,g=t.$month,$=t.$day}H===t&&(H=(new k(p,g,$).$toOrdinal()+6)%7);const x=j.Z||t;return U&&(p=1900),[[p,g,$,y,S,b,H,Y,z,x,L],v,E]}return _("_strptime",S,{_strptime_time:{$meth:function _strptime_time(t,i="%a %b %d %H:%M:%S %Y"){let n=_strptime(t,i)[0].slice(0,11);return n=n.map(((t,i)=>i<9?new e(t):p(t))),O.struct_time.tp$call([new s(n)])},$flags:{NamedArgs:["data_string","format"],Defaults:["%a %b %d %H:%M:%S %Y"]}},_strptime_datetime:{$meth:function _strptime_datetime(s,r,l="%a %b %d %H:%M:%S %Y"){const[o,_,c]=_strptime(r,l),[m,d]=o.slice(-2),h=o.slice(0,6);let f,u;return h.push(_),h.map((t=>new e(t))),d!==t&&(f=new L(0,d,c),u=a(m)?new E(f,new i(m)):new E(f),h.push(u)),n(s,h)},$flags:{NamedArgs:["cls","data_string","format"],Defaults:["%a %b %d %H:%M:%S %Y"]}},_strptime:{$meth(i,n){const a=_strptime(i,n);return a[0]=new s(a[0].map((i=>i===t?i:new e(i)))),a[1]=new e(a[1]),a[2]=new e(a[2]),new s(a)},$flags:{NamedArgs:["data_string","format"],Defaults:["%a %b %d %H:%M:%S %Y"]}},_getlang:{$meth:()=>p(_getlang()),$flags:{NoArgs:!0}}}),S.LocaleTime=c("_strptime.LocaleTime",{constructor:function(){this.v=new LocaleTime},slots:{tp$getattr(e,t){return this.v.hasOwnProperty(e.toString())?p(this.v[e.toString()]):$.call(this,e,t)},tp$setattr(e,t){if(!this.v.hasOwnProperty(e.toString()))return y.call(this,e,t);this.v[e.toString()]=g(t)}}}),S}))}`}};
