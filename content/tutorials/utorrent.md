---
title: Setting-up UTorrent
description: This is a tutorial on how to properly setup UTorrent to avoid ads and other unwanted features
---

# UTorrent

This page contains instructions to help you get the most out of your UTorrent setup. 

# Download Settings

### Location / Folders
Under: Directories > Location of Downloaded Files:
Tick Put new downloads in:
   (then select a temporary Download folder)
Tick Move completed downloads to:
   (then select a Download/Done folder)

### Limit Upload
Under: Bandwidth > Global Upload Rate Limiting:
Change the "Maximum Upload Rate" to "8"
(if it its less than 8 your downloads will be slower, Please note: 8 not 6)

### Encryption
Under: BitTorrent > Protocol Encryption:
Change "Outgoing" to "Forced"
Untick "Allow incoming legacy connections"

# Turn off ads and offers
open Options > Preferences > Advanced.
Here you'll find a large list of flags for the app and a filter box.
Locate and disable the following flags:

![UTorrent Flags](images/utorrent-flags.jpg)

- bt.enable_pulse
- gui.show_notorrents_node
- gui.show_plus_upsell
- offers.content_offer_autoexec
- offers.left_rail_offer_enabled/left_rail_offer
- offers.sponsored_torrent_offer_enabled/sponsored_torrent_offer_enabled

These flags may be named slightly differently depending on which version of the app you're using.
Be careful when editing things if you're not entirely sure what they do.

[button](http://lifehacker.com/disable-ads-in-utorrent-via-settings-826283231 "View Source")

[http://lifehacker.com/disable-ads-in-utorrent-via-settings-826283231](http://lifehacker.com/disable-ads-in-utorrent-via-settings-826283231)