from threading import Thread

minha_lista = []

def funcao():
    for i in range(100000):
        minha_lista.append(1)
    for i in range(100000):
        minha_lista.pop()


if __name__ == '__main__':
    tarefas = []
    for indice in range(10):
        tarefa = Thread(target=funcao)
        tarefas.append(tarefa)
        tarefas.append(tarefa)
        tarefa.start()

    print(len(minha_lista))
    for tarefa in tarefas:
        tarefa.join()
        print(len(minha_lista))