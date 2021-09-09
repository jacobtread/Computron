<template>
  <div class="blocks">
    <TextBlock title="Remote Support" centered>
      This page contains instructions to help you get setup for remote support using the remote access software named
      TeamViewer. At Computron we use TeamViewer to allow us to remotely connect to your computer to provide you with
      help
    </TextBlock>
    <TextBlock title="1" numbered centered>
      <template>
        Firstly you will need to download the TeamViewer software which can be found by clicking the button below or the
        link underneath it. Visiting this page should automatically select the right operating system for your device
        but if it does not please select your operating system from the list at the top
      </template>
      <template #buttons>
        <a class="button" href="https://www.teamviewer.com/en-us/download" rel="noreferrer">Download</a>
      </template>
      <template #extra>
        <a href="https://www.teamviewer.com/en-us/download"
           rel="noreferrer">https://www.teamviewer.com/en-us/download</a>
      </template>
    </TextBlock>
    <TextBlock title="2" numbered centered>
      Open the installer and when prompted select “Run only (one time use)” this will make allow you to run the
      program without having to install it (Note you can use another option if you have an understanding of it) and
      then press “Accept - run”
    </TextBlock>
    <TextBlock title="3" numbered centered>
      You will be prompted to run the program as administrator by windows this is required for the software to run so
      accept it. You should then have a window open in your browser with the instructions to use team viewer you may
      read this if you want but the steps you will need for remote support are listed here
    </TextBlock>
    <TextBlock title="4" numbered centered>
      For the technician to be able to connect to your computer you must give them both your unique ID and password that
      teamviewer has given you they will appear inside the teamviewer software the following screenshot highlights these
    </TextBlock>
    <ImageBlock image="teamviewer_preview.png"/>
    <TextBlock title="5" numbered centered>
      Your done! now simply wait for the technician to connect to your computer and get to helping you out.
    </TextBlock>
  </div>
</template>

<script lang="ts">

import IconBlock from "~/components/IconBlock.vue"
import TextBlock from "~/components/TextBlock.vue"
import ImageBlock from "~/components/ImageBlock.vue"

export default {
  components: {
    IconBlock,
    TextBlock,
    ImageBlock
  }
}

</script>


<style scoped lang="sass">

.email-button
  padding: 1em 4em

</style>
